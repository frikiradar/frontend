import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import {
  ActionSheetController,
  AlertController,
  IonContent,
  IonInfiniteScroll,
  ModalController,
  Platform,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { ChatService } from "../services/chat.service";
import { ConfigService } from "../services/config.service";
import { UrlService } from "../services/url.service";
import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { Room } from "../models/room";
import { RoomService } from "../services/room.service";
import { Page } from "../models/page";
import { NavService } from "../services/navigation.service";
import { UserService } from "../services/user.service";
import { RulesPage } from "../rules/rules.page";

@Component({
  selector: "app-room",
  templateUrl: "./room.page.html",
  styleUrls: ["./room.page.scss"]
})
export class RoomPage implements OnInit {
  @ViewChild("chatlist", { static: false })
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;

  source: EventSource;
  public toggled: boolean = false;
  public oldLastMessage: number;

  public room: Room;
  public roomPage: Page;
  slug: Room["slug"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  page = 0;
  pressOptions = false;
  selectedMessage: Chat;
  alertError: any;
  public image: string;
  public replying = false;
  public editing = false;
  public writing = false;
  public toUserWriting = "";
  public pane: CupertinoPane;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    initialBreak: "middle",
    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
      this.selectedMessage = undefined;
      this.pressOptions = false;
    }
  };

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavService,
    private roomSvc: RoomService,
    private chatSvc: ChatService,
    private toast: ToastController,
    private alert: AlertController,
    private clipboard: Clipboard,
    public keyboard: Keyboard,
    public platform: Platform,
    private config: ConfigService,
    private urlSvc: UrlService,
    private androidPermissions: AndroidPermissions,
    public sheet: ActionSheetController,
    public utils: UtilsService,
    public modalController: ModalController,
    public popover: PopoverController,
    public userSvc: UserService,
    private afMessaging: AngularFireMessaging,
    private firebase: FirebaseX,
  ) { }

  async ngOnInit() {
    const config: {
      maintenance: boolean;
      min_version: string;
      chat: boolean;
    } = (await this.config.getConfig()) as any;

    this.alertError = await this.alert.create({
      header: `Ups, error al conectar`,
      message:
        "Es posible que el servicio de chat esté en mantenimiento en estos momentos.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Intentar reconectar"
        },
        {
          text: "Ok, seré paciente",
          handler: () => {
            this.back();
          }
        }
      ],
      cssClass: "round-alert"
    });

    if (!config.chat && !this.auth.isAdmin()) {
      this.alertError.present();
    }

    this.slug = this.route.snapshot.paramMap.get("slug");
    try {
      this.room = await this.roomSvc.getRoom(this.slug);

      const rooms_config = await this.roomSvc.getRoomsConfig();
      if (
        this.room.last_message >
        rooms_config.find(r => r.slug === this.room.slug).last_message
      ) {
        this.oldLastMessage = rooms_config.find(
          r => r.slug === this.room.slug
        ).last_message;
      }
      this.roomPage = this.room.page;
    } catch (e) {
      console.error(`No se ha podido cargar la sala. Error: ${e}`);
    }

    if (
      !this.auth.currentUserValue?.roles?.includes(this.room.permissions[0])
    ) {
      this.auth.logout();
    }

    const rules = await this.config.get("rules");
    if (!rules) {
      const modal = await this.modalController.create({
        component: RulesPage,
        cssClass: "full-modal",
        backdropDismiss: false
      });
      return await modal.present();
    }

    // this.roomSvc.setNotifications(this.room);

    this.page = 1;
    try {
      const messages = (await this.roomSvc.getMessages(this.slug, this.page))
        .filter(m => m.text || m.image || m.audio)
        .reverse();

      if (messages.length && (this.room?.visible || this.roomPage)) {
        this.room.last_message = messages[messages.length - 1].id;
        this.roomSvc.setLastMessage(this.room);
      }

      this.messages = [...this.messages, ...messages];

      if (this.messages.length < 15) {
        this.infiniteScroll.disabled = true;
      }

      this.scrollDown(1000);

      this.connectSSE();

      window.addEventListener("keyboardDidShow", event => {
        this.scrollDown();
      });

      window.addEventListener("keyboardDidHide", event => {
        this.scrollDown();
      });

      this.platform.backButton.subscribe(() => {
        this.source?.close();
      });
    } catch (e) {
      console.error(e);
      await this.alertError.present();
    }
  }

  async sendMessage(message?: Chat) {
    const text = message.text;
    const image = message.image;
    const mentions = message.mentions;

    if (this.editing) {
      const chat = await this.chatSvc
        .updateMessage(this.selectedMessage.id, text)
        .then();
      this.messages.map(m => {
        if (m.id === this.selectedMessage.id) {
          m.text = text;
        }
      });
      this.editing = false;
    } else {
      this.messages = [
        ...this.messages,
        ...[
          {
            slug: this.slug,
            fromuser: this.auth.currentUserValue,
            text,
            image,
            time_creation: new Date(),
            sending: true,
            mentions
          }
        ]
      ].filter((m: Chat) => m.text || m.image);

      this.scrollDown(1, true);
      let replyToId =
        this.selectedMessage && this.replying ? this.selectedMessage.id : null;
      this.replying = false;

      try {
        if (!image) {
          message = await this.roomSvc
            .sendMessage(this.slug, this.room.name, text, replyToId, mentions)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urltoBlob(image);
          message = await this.roomSvc
            .sendImage(this.slug, this.room.name, imageFile, text, mentions)
            .then();
        }
        this.messages.map(m => {
          m.sending = false;
        });
        this.room.last_message = message.id;
        this.roomSvc.setLastMessage(this.room);

        replyToId = null;
      } catch (e) {
        this.messages = this.messages.filter(m => m.sending !== true);
        console.error(e);
      }
    }
  }

  async scrollDown(delay = 500, force = false) {
    const scroll = await this.chatlist.getScrollElement();

    if (
      scroll.scrollTop +
      scroll.offsetHeight +
      (scroll.offsetHeight - 200) / 2 >=
      scroll.scrollHeight ||
      force
    ) {
      if (!this.chatlist) {
        return;
      }
      setTimeout(() => {
        this.chatlist.scrollToBottom(0);
      }, delay);
    }
  }

  async loadChats(event: any) {
    if (!this.messages.length) {
      return;
    }
    this.page++;
    const messages = (await this.roomSvc.getMessages(this.slug, this.page))
      .filter(m => m.text || m.image || m.audio)
      .reverse();
    this.messages = [...messages, ...this.messages];
    event.target.complete();

    if (this.messages.length < 15) {
      event.target.disabled = true;
    }
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
    }
  }

  selectMessage(event: Event, message: Chat) {
    event.preventDefault();

    this.selectedMessage = message;
    this.pressOptions = true;
  }

  async copy() {
    this.pressOptions = false;
    try {
      if (this.platform.is("cordova")) {
        await this.clipboard.copy(this.selectedMessage.text);
      } else {
        await navigator.clipboard.writeText(this.selectedMessage.text);
      }

      (
        await this.toast.create({
          message: "Mensaje copiado",
          duration: 2000,
          position: "middle"
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al copiar el mensaje",
          duration: 2000,
          position: "middle"
        })
      ).present();
    }
  }

  reply() {
    this.replying = true;
    this.pressOptions = false;
    this.scrollDown();
  }

  edit() {
    this.editing = true;
    this.pressOptions = false;
    this.scrollDown();
  }

  async deleteMessage() {
    this.pressOptions = false;
    try {
      await this.chatSvc.deleteMessage(this.selectedMessage.id);
      if (this.selectedMessage.fromuser.id === this.auth.currentUserValue.id) {
        this.messages = this.messages.filter(
          m => m.id !== this.selectedMessage.id
        );
      }
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el mensaje",
          duration: 2000,
          position: "middle"
        })
      ).present();

      console.error(e);
    }
  }

  async reportMessage() {
    const alert = await this.alert.create({
      header: `¿Quieres reportar a el mensaje de ${this.selectedMessage?.fromuser?.username}?`,
      message:
        "Nos llegará un aviso para que revisemos el caso y actuemos en consecuencia.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del reporte (opcional)"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Reportar",
          role: "block",
          handler: async data => {
            try {
              await this.chatSvc.report(this.selectedMessage, data.note);
              (
                await this.toast.create({
                  message: "Mensaje reportado correctamente",
                  duration: 2000,
                  position: "bottom"
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al reportar el mensaje ${e}`,
                  duration: 2000,
                  position: "bottom",
                  color: "danger"
                })
              ).present();
              alert.present();
            }
          }
        }
      ],
      cssClass: "round-alert"
    });

    await alert.present();
  }

  async dragItem(event: any, message: Chat) {
    this.selectedMessage = message;
    if (event.detail.ratio < -0.9) {
      event.target.close();
      this.reply();
    }
  }

  async openUrl(event: any) {
    if (event?.target?.href) {
      event.stopImmediatePropagation();
      this.urlSvc.openUrl(event);
    }
    return false;
  }

  async openPictureSheet() {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);
    }

    if (this.platform.is("cordova")) {
      const actionSheet = await this.sheet.create({
        buttons: [
          {
            text: "Desde la cámara",
            icon: "camera",
            handler: async () => {
              const image = (await this.utils.takePicture(
                "camera",
                false,
                "default",
                true
              )) as string;
              this.addPicture(image);
            }
          },
          {
            text: "Desde la galería",
            icon: "images",
            handler: async () => {
              const image = (await this.utils.takePicture(
                "gallery",
                false,
                "default",
                true
              )) as string;
              this.addPicture(image);
            }
          }
        ]
      });
      await actionSheet.present();
    } else {
      this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
    }
  }

  async addPicture(image: string | File) {
    if (typeof image !== "string") {
      image = await this.utils.fileToBase64(image);
    }
    this.image = image;
  }

  async openViewer(src: string, title: string, text: string, scheme = "dark") {
    let componentProps = {};
    if (text) {
      componentProps = {
        src,
        title,
        text,
        scheme
      };
    } else {
      componentProps = {
        src,
        title,
        scheme
      };
    }
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps,
      cssClass: "ion-img-viewer",
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  async showOptions() {
    this.pane = new CupertinoPane(".options-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  async setWriting() {
    if (this.writing || this.editing) {
      return;
    }
    this.writing = true;
    await this.roomSvc.writing(this.auth.currentUserValue.username, this.slug);
    setTimeout(async () => {
      this.writing = false;
    }, 15000);
  }

  async showPage(slug: Page["slug"]) {
    if (this.roomPage?.slug) {
      this.router.navigate(["/page", slug]);
    }
  }

  async connectSSE() {
    if (this.auth.isMaster()) {
      if (this.platform.is("cordova")) {
        this.firebase.onMessageReceived().subscribe(
          notification => {
            if (notification?.message) {
              const message = JSON.parse(notification.message) as Chat;
              // console.log(message);
              this.messageReceived(message);
            }
          });
      } else {
        this.afMessaging.messages.subscribe((payload: any) => {
          if (payload?.data?.message) {
            const message = JSON.parse(payload.data.message) as Chat;
            console.log(message);
            this.messageReceived(message)
          }
        });
      }
    } else {
      // Nos suscribimos al canal
      (await this.roomSvc.sseListener()).subscribe(
        (message: Chat) => {
          this.messageReceived(message)
        },
        async error => {
          console.error(
            "Escucha al servidor de " + this.slug + " perdida",
            error
          );
          this.connectSSE();
        }
      );
    }
  }

  async messageReceived(message: Chat) {
    if (message.conversationId === this.slug) {
      // console.log(message);
      if (
        message.writing &&
        message.fromuser.username !== this.auth.currentUserValue.username
      ) {
        this.toUserWriting = message.fromuser.name + " está escribiendo...";
        setTimeout(() => {
          this.toUserWriting = "";
        }, 10000);
      } else if (!message.writing) {
        this.toUserWriting = "";
        // borramos los enviando
        this.messages = this.messages.filter(m => !m.sending);
        if (this.messages.some(m => m.id === message.id)) {
          // Si ya existe el mensaje lo actualizamos
          this.messages.map(m => {
            if (m.id === message.id) {
              m.text = message.text;
              m.time_read = message.time_read;
              m.edited = message.edited;
              m.deleted = message.deleted;
              m.modded = message.modded;
            }
          });
        } else {
          this.messages = [...this.messages, message];
        }

        // Borramos los deleted
        this.messages = this.messages.filter(m => !m.deleted);

        this.scrollDown();
      }
    }
  }

  goToMessage(message: Chat) {
    if (message?.reply_to?.id) {
      const el = document.getElementById("" + message.reply_to.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("clicked");
        setTimeout(() => {
          el.classList.remove("clicked");
        }, 1000);
      }
    }
  }

  back() {
    this.nav.back();
    this.source?.close();
  }

  ngOnDestroy() {
    if (this.room?.visible || this.roomPage) {
      this.room.last_message = this.messages[this.messages.length - 1]?.id;
      this.roomSvc.setLastMessage(this.room);
    }
  }
}

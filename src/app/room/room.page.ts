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
  NavController,
  Platform,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";

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
import { RoomPopover } from "./room-popover/room-popover";

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

  public room: Room;
  slug: Room["slug"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  page = 0;
  pressOptions = false;
  selectedMessage: Chat;
  conErrors = 0;
  connected = false;
  alertError: any;
  public image: string;
  public replying = false;
  public editing = false;
  public writing = false;
  public toUserWriting = "";

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
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
    public popover: PopoverController
  ) {}

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
      ]
    });

    if (!config.chat && !this.auth.isAdmin()) {
      this.alertError.present();
    }

    this.slug = this.route.snapshot.paramMap.get("slug");
    this.room = await this.roomSvc.getRoom(this.slug);

    if (
      !this.auth.currentUserValue?.roles?.includes(this.room.permissions[0])
    ) {
      this.auth.logout();
    }

    // this.roomSvc.setNotifications(this.room);

    this.page = 1;
    try {
      const messages = (await this.roomSvc.getMessages(this.slug, this.page))
        .filter(m => m.text || m.image || m.audio)
        .reverse();

      if (messages.length && this.room.visible) {
        this.roomSvc.setLastMessage(
          this.slug,
          messages[messages.length - 1].id
        );
      }

      this.messages = [...this.messages, ...messages];
      // this.chatSvc.setStoragedMessages(messages);

      if (this.messages.length < 15) {
        this.infiniteScroll.disabled = true;
      }

      this.scrollDown(500);

      // Nos suscribimos al canal
      this.source = await this.roomSvc.register(this.slug);
      this.source.addEventListener("message", async (res: any) => {
        this.connected = true;
        this.conErrors = 0;
        let message = JSON.parse(res.data) as Chat;

        if (
          message.writing &&
          message.fromuser.username !== this.auth.currentUserValue.username
        ) {
          this.toUserWriting = message.fromuser.name + " está escribiendo...";
          setTimeout(() => {
            this.toUserWriting = "";
          }, 10000);
        } else if (!message.writing) {
          if (this.room.visible) {
            this.roomSvc.setLastMessage(this.slug, message.id);
          }

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
              }
            });
            // Borramos los deleted
            this.messages = this.messages.filter(m => !m.deleted);
          } else {
            this.messages = [...this.messages, message];
          }

          this.scrollDown();
        }
      });

      this.source.addEventListener("error", async error => {
        console.error(
          "Error al conectarse al servidor de chat",
          `connected: ${this.connected}`,
          `conErrors: ${this.conErrors}`,
          error
        );
        this.conErrors++;
        if (error.type === "error" && this.conErrors === 5) {
          (
            await this.toast.create({
              message: "Se ha perdido la conexión con el servidor de chat",
              duration: 2000,
              position: "bottom",
              color: "danger"
            })
          ).present();
        }

        if (error.type === "error" && this.conErrors >= 10) {
          this.source.close();

          await this.alertError.present();
        }
      });

      this.source.addEventListener("open", async error => {
        if (this.conErrors === 5) {
          (
            await this.toast.create({
              message: "¡Conexión al servidor de chat restablecida!",
              duration: 2000,
              position: "bottom",
              color: "success"
            })
          ).present();
        }
        this.conErrors = 0;
      });

      window.addEventListener("keyboardDidShow", event => {
        this.scrollDown();
      });

      window.addEventListener("keyboardDidHide", event => {
        this.scrollDown();
      });

      this.platform.backButton.subscribe(() => {
        this.source.close();
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
            fromuser: { id: this.auth.currentUserValue.id },
            text,
            image,
            time_creation: new Date(),
            sending: true,
            mentions
          }
        ]
      ].filter((m: Chat) => m.text || m.image);

      this.scrollDown();
      let replyToId =
        this.selectedMessage && this.replying ? this.selectedMessage.id : null;
      this.replying = false;

      try {
        if (!image) {
          const chat = await this.roomSvc
            .sendMessage(this.slug, this.room.name, text, replyToId, mentions)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urlToFile(image);
          const chat = await this.roomSvc
            .sendImage(this.slug, this.room.name, imageFile, text, mentions)
            .then();
        }

        replyToId = null;
        // this.chatSvc.setStoragedMessages([chat]);
      } catch (e) {
        this.messages = this.messages.filter(m => m.sending !== true);
        console.error(e);
      }
    }
  }

  scrollDown(delay = 1) {
    if (!this.chatlist) {
      return;
    }
    setTimeout(() => {
      this.chatlist.scrollToBottom(0);
    }, delay);
  }

  async loadChats(event: any) {
    console.log(event);
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
  }

  edit() {
    this.editing = true;
    this.pressOptions = false;
  }

  async deleteMessage() {
    this.pressOptions = false;
    try {
      await this.chatSvc.deleteMessage(this.selectedMessage.id);
      this.messages = this.messages.filter(
        m => m.id !== this.selectedMessage.id
      );
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

  async dragItem(event: any, message: Chat) {
    this.selectedMessage = message;
    if (event.detail.ratio < -0.9) {
      event.target.close();
      this.reply();
    }
  }

  async openUrl(event: any) {
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      this.urlSvc.openUrl(event.srcElement.href);
    }

    if (event.srcElement.href && event.target.className.includes("mention")) {
      event.preventDefault();
      this.showProfile(event.target.innerHTML.replace("@", ""));
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
            text: "Desde tus fotos",
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

  async showOptions(event: any) {
    const popover = await this.popover.create({
      component: RoomPopover,
      cssClass: "options-popover",
      event: event,
      translucent: true,
      componentProps: {
        room: this.room
      }
    });
    return await popover.present();
  }

  async setWriting() {
    if (this.writing || this.editing) {
      return;
    }
    this.writing = true;
    await this.roomSvc.writing(this.auth.currentUserValue.username, this.slug);
    setTimeout(async () => {
      this.writing = false;
    }, 2500);
  }

  back() {
    this.nav.back();
    this.source.close();
  }
}

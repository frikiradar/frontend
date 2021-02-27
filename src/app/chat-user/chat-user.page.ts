import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import {
  ActionSheetController,
  AlertController,
  IonContent,
  IonInfiniteScroll,
  IonTextarea,
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
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";
import { UtilsService } from "../services/utils.service";
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { OptionsPopover } from "../options-popover/options-popover";

@Component({
  selector: "app-chat-user",
  templateUrl: "./chat-user.page.html",
  styleUrls: ["./chat-user.page.scss"]
})
export class ChatUserPage implements OnInit {
  public chatForm: FormGroup;
  get message() {
    return this.chatForm.get("message");
  }

  @ViewChild("textarea", { static: true })
  textarea: IonTextarea;
  @ViewChild("chatlist", { static: true })
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;
  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;

  source: EventSource;
  public toggled: boolean = false;

  user: Partial<User>;
  userId: User["id"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  page = 0;
  pressOptions = false;
  selectedMessage: Chat;
  conErrors = 0;
  alertError: any;
  public image: string;

  constructor(
    public auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private chatSvc: ChatService,
    private toast: ToastController,
    private alert: AlertController,
    private clipboard: Clipboard,
    public keyboard: Keyboard,
    public platform: Platform,
    private config: ConfigService,
    public formBuilder: FormBuilder,
    private urlSvc: UrlService,
    private androidPermissions: AndroidPermissions,
    public sheet: ActionSheetController,
    public utils: UtilsService,
    public modalController: ModalController,
    private popover: PopoverController
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    const config: {
      maintenance: boolean;
      min_version: string;
      chat: boolean;
    } = (await this.config.getConfig()) as any;

    this.alertError = await this.alert.create({
      header: `Ups, error al conectar`,
      message:
        "El servicio de chat está en mantenimiento en estos momentos, regresa en unos minutos.",
      backdropDismiss: false,
      buttons: [
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

    this.userId = +this.route.snapshot.paramMap.get("id");

    /*try {
      this.user = await this.userSvc.getUser(this.userId);

      if (this.user.username === "frikiradar") {
        this.chatForm.get("message").disable();
      }
    } catch (e) {
      this.chatForm.get("message").disable();
    }*/

    this.page = 1;

    this.chatSvc.deleteStoragedMessages();

    /*const storagedMessages: Chat[] = this.chatSvc.getStoragedMessages();
    if (storagedMessages) {
      this.messages = storagedMessages?.filter(
        (c: Chat) =>
          (c?.fromuser?.id == this.userId &&
            c?.touser?.id == this.auth.currentUserValue.id) ||
          (c?.touser?.id == this.userId &&
            c?.fromuser?.id == this.auth.currentUserValue.id) ||
          (c?.fromuser?.id == this.userId && c?.touser?.id == null)
      );
    }*/

    // Solamente los mensajes a partir del ultimo guardado
    const lastId = this.messages?.reduce(
      (max, message) => (message.id > max ? message.id : max),
      this.messages[0]?.id
    );
    try {
      const messages = (
        await this.chatSvc.getMessages(this.userId, true, this.page, lastId)
      )
        .filter(m => m.text || m.image || m.audio)
        .reverse();

      this.messages = [...this.messages, ...messages];
      // this.chatSvc.setStoragedMessages(messages);

      if (this.messages.length < 15) {
        this.infiniteScroll.disabled = true;
      }

      this.scrollDown(500);

      if (this.messages.length > 0) {
        if (this.userId == this.messages[0].fromuser.id) {
          this.user = this.messages[0].fromuser;
        } else {
          this.user = this.messages[0].touser;
        }
      } else {
        try {
          this.user = await this.userSvc.getUser(this.userId);
        } catch (e) {
          this.chatForm.get("message").disable();
        }
      }

      if (this.auth.isDemo(this.user as User) || !this.user.active) {
        this.chatForm.get("message").disable();
      }

      const min = Math.min(this.auth.currentUserValue.id, this.userId);
      const max = Math.max(this.auth.currentUserValue.id, this.userId);
      const channel = `${min}_${max}`;

      // Nos suscribimos al canal
      this.source = await this.chatSvc.register(channel);
      this.source.addEventListener("message", async (res: any) => {
        this.conErrors = 0;
        let message = JSON.parse(res.data) as Chat;
        if (this.messages.some(m => m.id === message.id)) {
          // Si ya existe el mensaje lo actualizamos
          this.messages.map(m => {
            if (m.id === message.id) {
              m.time_read = message.time_read;
            }
          });
        } else {
          this.messages = [...this.messages, message];
          if (
            message.fromuser.id === this.user.id &&
            (message.text || message.image || message.audio)
          ) {
            // marcamos como leido
            try {
              message = await this.chatSvc.readChat(message.id);
            } catch (e) {
              console.error(e);
              await this.alertError.present();
            }
          } else {
            // borramos los enviando...
            this.messages = this.messages.filter(m => !m.sending);
          }
        }

        if (message.fromuser.id === this.user.id) {
          this.user = message.fromuser;
        }

        this.scrollDown();
      });

      this.source.addEventListener("error", async error => {
        this.conErrors++;
        if (error.type === "error" && this.conErrors >= 3) {
          console.error(error);
          this.source.close();

          await this.alertError.present();
        }
      });

      this.source.addEventListener("open", async error => {
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

      this.textarea?.setFocus();

      if (!this.user.chat) {
        this.message.setValue(undefined);
        this.sendMessage();
      }
    } catch (e) {
      console.error(e);
      await this.alertError.present();
    }
  }

  /*@HostListener("window:click", ["$event"]) onClick(event: any) {
    event.stopPropagation();
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      console.log("este vale", event);
    }
  }*/

  async sendMessage(event?: Event) {
    this.toggled = false;
    if (event) {
      event.preventDefault();
    }

    if ((this.message.value && this.message.value.trim()) || this.image) {
      const text = this.message.value ? this.message.value.trim() : "";
      const image = this.image;
      this.message.setValue("");
      this.textarea?.setFocus();

      this.messages = [
        ...this.messages,
        ...[
          {
            touser: { id: this.user?.id },
            fromuser: { id: this.auth.currentUserValue.id },
            text,
            image,
            time_creation: new Date(),
            sending: true
          }
        ]
      ].filter((m: Chat) => m.text || m.image);

      this.scrollDown();
      try {
        if (!image) {
          const chat = await this.chatSvc
            .sendMessage(this.user.id, text)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urlToFile(image);
          const chat = await this.chatSvc
            .sendImage(this.user.id, imageFile, text)
            .then();
          this.image = "";
        }
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
    if (!this.messages.length) {
      return;
    }
    this.page++;
    const messages = (
      await this.chatSvc.getMessages(this.userId, false, this.page)
    )
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

  selectMessage(message: Chat) {
    this.selectedMessage = message;
    this.pressOptions = true;
  }

  async copy() {
    this.clipboard.copy(this.selectedMessage.text);

    (
      await this.toast.create({
        message: "Copiado al portapapeles",
        duration: 2000,
        position: "middle"
      })
    ).present();
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

  addEmoji(event: any) {
    this.message.setValue(
      (this.message.value ? this.message.value : "") + event.emoji.native
    );
  }

  openUrl(event: any) {
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      this.urlSvc.openUrl(event.srcElement.href);
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
      component: OptionsPopover,
      cssClass: "options-popover",
      event: event,
      translucent: true,
      componentProps: {
        user: this.user,
        page: "chat"
      }
    });
    return await popover.present();
  }

  back() {
    this.nav.back();
    this.source.close();
  }
}

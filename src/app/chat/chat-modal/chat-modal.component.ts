import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import {
  AlertController,
  IonContent,
  IonInfiniteScroll,
  ModalController,
  NavController,
  Platform,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { Vibration } from "@ionic-native/vibration/ngx";

import { Chat } from "../../models/chat";
import { User } from "../../models/user";
import { ChatService } from "../../services/chat.service";
import { ConfigService } from "../../services/config.service";
import { UrlService } from "../../services/url.service";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { UtilsService } from "../../services/utils.service";
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { OptionsPopover } from "../../options-popover/options-popover";

@Component({
  selector: "app-chat-modal",
  templateUrl: "./chat-modal.component.html",
  styleUrls: ["./chat-modal.component.scss"]
})
export class ChatModalComponent implements OnInit {
  @Input() userId: User["id"];

  @ViewChild("chatlist", { static: false })
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  source: EventSource;

  user: Partial<User>;
  messages: Chat[] = [];
  page = 0;
  pressOptions = false;
  selectedMessage: Chat;
  conErrors = 0;
  connected = false;
  alertError: any;
  public replying = false;
  public editing = false;
  public writing = false;
  public toUserWriting = "";

  constructor(
    public auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private nav: NavController,
    private chatSvc: ChatService,
    private toast: ToastController,
    private alert: AlertController,
    private clipboard: Clipboard,
    public keyboard: Keyboard,
    public platform: Platform,
    private config: ConfigService,
    private urlSvc: UrlService,
    public utils: UtilsService,
    public modalController: ModalController,
    private popover: PopoverController,
    private vibration: Vibration
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
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.userId.currentValue !== changes.userId.previousValue) {
      this.location.replaceState("/chat/" + changes.userId.currentValue);
      this.userId = changes.userId.currentValue;

      this.page = 1;

      this.messages = [];
      this.pressOptions = false;
      this.selectedMessage = undefined;
      this.conErrors = 0;
      this.connected = false;
      this.replying = false;
      this.editing = false;
      this.writing = false;
      this.toUserWriting = "";

      try {
        const messages = (
          await this.chatSvc.getMessages(this.userId, true, this.page)
        )
          .filter(m => m.text || m.image || m.audio)
          .reverse();

        this.messages = [...this.messages, ...messages];

        if (this.messages.length < 15) {
          this.infiniteScroll.complete();
        } else {
          this.infiniteScroll.complete();
          this.infiniteScroll.disabled = false;
          this.infiniteScroll.ionInfinite;
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
            console.error(e);
          }
        }

        const min = Math.min(this.auth.currentUserValue.id, this.userId);
        const max = Math.max(this.auth.currentUserValue.id, this.userId);
        const channel = `${min}_${max}`;

        // Nos suscribimos al canal
        this.source = await this.chatSvc.register(channel);
        this.source.addEventListener("message", async (res: any) => {
          this.connected = true;
          this.conErrors = 0;
          let message = JSON.parse(res.data) as Chat;
          if (message.writing && message.fromuser.id === this.user.id) {
            this.toUserWriting = "Escribiendo...";
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
                  if (this.user.id !== this.auth.currentUserValue.id) {
                    message = await this.chatSvc.readChat(message.id);
                  }
                } catch (e) {
                  console.error(e);
                  await this.alertError.present();
                }
              }
            }

            if (message.fromuser.id === this.user.id) {
              this.user = message.fromuser;
            }

            // Borramos los deleted
            this.messages = this.messages.filter(m => {
              if (!m.deleted) {
                return m;
              }
            });

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
  }

  async sendMessage(message?: Chat) {
    const text = message.text;
    const image = message.image;

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
      let replyToId =
        this.selectedMessage && this.replying ? this.selectedMessage.id : null;
      this.replying = false;

      try {
        if (!image) {
          const chat = await this.chatSvc
            .sendMessage(this.user.id, text, replyToId)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urlToFile(image);
          const chat = await this.chatSvc
            .sendImage(this.user.id, imageFile, text)
            .then();
        }

        replyToId = null;
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

  selectMessage(event: Event, message: Chat) {
    event.preventDefault();
    this.vibration.vibrate(5);
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

  openUrl(event: any) {
    this.urlSvc.openUrl(event);
    return false;
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

  async setWriting() {
    if (this.writing || this.editing) {
      return;
    }
    this.writing = true;
    await this.chatSvc.writing(this.auth.currentUserValue.id, this.userId);
    setTimeout(async () => {
      this.writing = false;
    }, 2500);
  }

  back() {
    this.nav.back();
    this.source.close();
  }
}

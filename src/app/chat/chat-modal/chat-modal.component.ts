import { EventService } from "src/app/services/event.service";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Clipboard } from "@capacitor/clipboard";
import { Keyboard } from "@capacitor/keyboard";
import {
  AlertController,
  IonContent,
  IonInfiniteScroll,
  ModalController,
  Platform,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

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
import { NavService } from "src/app/services/navigation.service";
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { EventModal } from "src/app/events/event-modal/event.modal";
import { Event } from "src/app/models/event";

@Component({
  selector: "app-chat-modal",
  templateUrl: "./chat-modal.component.html",
  styleUrls: ["./chat-modal.component.scss"],
})
export class ChatModalComponent implements OnInit {
  @Input() userId: User["id"];
  @Input() messageEvent: EventEmitter<Chat>;
  @Output() messageChange: EventEmitter<Chat> = new EventEmitter();
  @Output() backToList: EventEmitter<any> = new EventEmitter();

  @ViewChild("chatlist", { static: false })
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  user: Partial<User>;
  messages: Chat[] = [];
  page = 1;
  pressOptions = false;
  selectedMessage: Chat;
  alertError: any;
  private conversationId: string;
  public replying = false;
  public editing = false;
  public writing = false;
  public toUserWriting = "";
  public realtimeChat = true;

  constructor(
    public auth: AuthService,
    public userSvc: UserService,
    private router: Router,
    public chatSvc: ChatService,
    private toast: ToastController,
    private alert: AlertController,
    public platform: Platform,
    private config: ConfigService,
    private urlSvc: UrlService,
    public utils: UtilsService,
    public modalController: ModalController,
    private popover: PopoverController,
    private nav: NavService,
    private dc: ChangeDetectorRef,
    private afMessaging: AngularFireMessaging,
    private eventSvc: EventService
  ) {}

  @HostListener("window:focus")
  async onFocus() {
    await this.getLastMessages();
  }

  async ngOnInit() {
    if (this.userId) {
      const min = Math.min(this.auth.currentUserValue.id, this.userId);
      const max = Math.max(this.auth.currentUserValue.id, this.userId);
      this.conversationId = `${min}_${max}`;

      this.getLastMessages();
    }

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
          text: "Intentar reconectar",
        },
        {
          text: "Ok, seré paciente",
          handler: () => {
            this.nav.back();
          },
        },
      ],
      cssClass: "round-alert",
    });

    if (!config.chat && !this.auth.isAdmin()) {
      this.alertError.present();
    }

    this.messageEvent.subscribe(async (message) => {
      if (!message) {
        return;
      }

      if (message.conversationId === this.conversationId) {
        if (message.writing && message.fromuser?.id === this.user?.id) {
          this.getWriting();
        } else if (!message.writing) {
          this.toUserWriting = "";
          await this.newMessage(message);
        }
      }
    });

    if (!this.platform.is("capacitor")) {
      try {
        await this.afMessaging.requestPermission.toPromise();
      } catch (e) {
        this.realtimeChat = false;
      }
    }
  }

  async getLastMessages() {
    if (!this.userId) {
      return;
    }

    try {
      let messages = (await this.chatSvc.getMessages(this.userId, true, 1))
        .filter((m) => m.text || m.image || m.audio)
        .reverse();

      messages = messages.filter((m) => {
        if (!this.messages.some((me) => me.id === m.id)) {
          return m;
        }
      });

      messages.map((m) => {
        if (new Date(m?.event?.date) < new Date()) {
          m.event.past = true;
        }
      });

      if (this.messages.length) {
        messages.forEach(async (message) => {
          await this.newMessage(message);
        });
      } else {
        this.messages = messages;
      }

      if (this.messages.length < 15) {
        this.infiniteScroll.complete();
      } else {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = false;
        this.infiniteScroll.ionInfinite;
      }

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
      if (this.platform.is("capacitor")) {
        Keyboard.addListener("keyboardDidShow", () => {
          this.scrollDown();
        });

        Keyboard.addListener("keyboardDidHide", () => {
          this.scrollDown();
        });
      }

      this.scrollDown(200);
    } catch (e) {
      console.error(e);
      await this.alertError.present();
    }
  }

  async newMessage(message: Chat) {
    console.log(message);
    if (
      this.messages.some(
        (m) =>
          (m.id === message.id && !!m.id) ||
          (m.tmp_id === message.tmp_id && !!m.tmp_id)
      )
    ) {
      // Si ya existe el mensaje lo actualizamos
      this.messages.map((m) => {
        if (
          (m.id === message.id && !!m.id) ||
          (m.tmp_id === message.tmp_id && !!m.tmp_id)
        ) {
          m.id = message.id;
          m.text = message.text;
          m.time_read = message.time_read;
          m.edited = message.edited;
          m.deleted = message.deleted;
          m.sending = false;
          m.event = message.event;
          m.reply_to = message.reply_to;
        }
      });
      // this.messageChange.emit(message);
    } else {
      this.messages = [...this.messages, message];
      // this.messageChange.emit(message);
      /* //Opción para ordenar por orden de creación en lugar de recepción
      this.messages = messages.sort((a, b) => {
        return (
          new Date(a.time_creation).getTime() -
          new Date(b.time_creation).getTime()
        );
      });*/
    }

    if (
      message.fromuser?.id === this.user?.id &&
      (message.text || message.image || message.audio)
    ) {
      // marcamos como leido
      try {
        if (this.user?.id !== this.auth.currentUserValue.id) {
          message = await this.chatSvc.readChat(message.id);
        }
      } catch (e) {
        console.error(e);
        await this.alertError.present();
      }
    }

    if (message.fromuser?.id === this.user?.id) {
      this.user = message.fromuser;
    }

    // Borramos los deleted
    this.messages = this.messages.filter((m) => {
      if (!m.deleted) {
        return m;
      }
    });

    this.messages.map((m) => {
      if (new Date(m?.event?.date) < new Date()) {
        m.event.past = true;
      }
    });

    this.dc.detectChanges();
    this.scrollDown();
  }

  async sendMessage(message?: Chat) {
    const text = message.text;
    const image = message.image;
    const audio = message.audio;

    if (this.editing) {
      const chat = await this.chatSvc
        .updateMessage(this.selectedMessage.id, text)
        .then();
      this.messages.map((m) => {
        if (m.id === this.selectedMessage.id) {
          m.text = text;
        }
      });
      this.editing = false;
    } else {
      const tmpId = this.utils.makeId(6);

      const message = {
        tmp_id: tmpId,
        touser: this.user,
        fromuser: this.auth.currentUserValue,
        text,
        image,
        audio,
        time_creation: new Date(),
        sending: true,
      } as Chat;

      this.messages = [...this.messages, ...[message]].filter(
        (m: Chat) => m.text || m.image || m.audio
      );

      this.scrollDown(1, true);
      let replyToId =
        this.selectedMessage && this.replying ? this.selectedMessage.id : null;
      this.replying = false;

      try {
        let chat = null;
        if (!image && !audio) {
          chat = await this.chatSvc
            .sendMessage(this.user.id, text, replyToId, tmpId)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urltoBlob(image);
          chat = await this.chatSvc
            .sendImage(this.user.id, imageFile, text, tmpId)
            .then();
        } else if (audio) {
          const audioFile = await this.utils.urltoBlob(audio);
          chat = await this.chatSvc
            .sendAudio(this.user.id, audioFile, tmpId)
            .then();
        }

        await this.newMessage(chat);

        // this.messageChange.emit(chat);

        replyToId = null;
      } catch (e) {
        this.messages = this.messages.filter((m) => m.sending !== true);
        console.error(e);
      }
    }
  }

  async scrollDown(delay = 1, force = false) {
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
    const messages = (
      await this.chatSvc.getMessages(this.userId, false, this.page)
    )
      .filter((m) => m.text || m.image || m.audio)
      .reverse();
    this.messages = [...messages, ...this.messages];

    this.messages.map((m) => {
      if (new Date(m?.event?.date) < new Date()) {
        m.event.past = true;
      }
    });

    this.infiniteScroll.complete();

    if (messages.length < 15) {
      event.target.disabled = true;
    }
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
      if (await this.modalController.getTop()) {
        this.modalController.dismiss();
      }
    }
  }

  async selectMessage(event: any, message: Chat) {
    event.preventDefault();
    await Haptics.impact({ style: ImpactStyle.Medium });
    this.selectedMessage = message;
    this.pressOptions = true;
  }

  async copy() {
    this.pressOptions = false;
    try {
      await Clipboard.write({ string: this.selectedMessage.text });

      (
        await this.toast.create({
          message: "Mensaje copiado",
          duration: 2000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al copiar el mensaje",
          duration: 2000,
          position: "middle",
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
        (m) => m.id !== this.selectedMessage.id
      );
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el mensaje",
          duration: 2000,
          position: "middle",
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
        scheme,
      };
    } else {
      componentProps = {
        src,
        title,
        scheme,
      };
    }
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps,
      cssClass: "ion-img-viewer",
      keyboardClose: true,
      showBackdrop: true,
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
        page: "chat",
      },
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
    }, 15000);
  }

  async getWriting() {
    this.toUserWriting = "Escribiendo...";
    setTimeout(() => {
      this.toUserWriting = "";
    }, 10000);
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

  async createEvent() {
    const modal = await this.modalController.create({
      component: EventModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
      componentProps: { user: this.user },
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async confirmDate(message: Chat) {
    await this.eventSvc.confirmDate(message.id);
  }

  async declineDate(message: Chat) {
    await this.eventSvc.declineDate(message.id);
  }

  showEvent(event: Event) {
    this.router.navigate(["/event", event.id]);
  }

  back() {
    this.backToList.emit();
  }
}

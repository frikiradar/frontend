import { EventService } from "src/app/services/event.service";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { Clipboard } from "@capacitor/clipboard";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonContent,
  IonInfiniteScroll,
  ModalController,
  PopoverController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
import { Haptics } from "@capacitor/haptics";

import { Chat } from "../../models/chat";
import { User } from "../../models/user";
import { ChatService } from "../../services/chat.service";
import { UrlService } from "../../services/url.service";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { UtilsService } from "../../services/utils.service";
import { OptionsPopover } from "../../options-popover/options-popover";
import { EventModal } from "src/app/events/event-modal/event.modal";
import { Event } from "src/app/models/event";
import { ImageViewerModal } from "src/app/image-viewer/image-viewer.modal";
import { App } from "@capacitor/app";
import { Meta, Title } from "@angular/platform-browser";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "app-chat-modal",
  templateUrl: "./chat-modal.component.html",
  styleUrls: ["./chat-modal.component.scss"],
})
export class ChatModalComponent implements OnInit {
  @Input() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();
  @Output() backToList: EventEmitter<boolean> = new EventEmitter();

  @ViewChild(IonContent)
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  user: Partial<User>;
  messages: Chat[] = [];
  page = 1;
  pressOptions = false;
  selectedMessage: Chat;
  private conversationId: string;
  public replying = false;
  public editing = false;
  public writing = false;
  public toUserWriting = "";
  private userId: User["id"];

  constructor(
    public auth: AuthService,
    public userSvc: UserService,
    private router: Router,
    public chatSvc: ChatService,
    private toast: ToastController,
    private urlSvc: UrlService,
    public utils: UtilsService,
    public modalController: ModalController,
    private popoverController: PopoverController,
    private cd: ChangeDetectorRef,
    private eventSvc: EventService,
    private meta: Meta,
    private title: Title,
    private i18n: I18nService
  ) {}

  async ngOnInit() {
    this.meta.addTags([
      {
        name: "keywords",
        content: "frikiradar, friki, red social, chat",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "frikiradar" },
      { charset: "UTF-8" },
    ]);

    App.addListener("appStateChange", ({ isActive }) => {
      if (isActive) {
        this.getLastMessages();
      }
    });

    this.chatSvc.currentMessage.subscribe(async (message) => {
      if (!message) {
        return;
      }

      if (message.conversationId === this.conversationId) {
        if (message.status == "online") {
          this.user.last_login = new Date();
        } else if (message.status == "offline") {
          // this.user.last_login = new Date(0);
        }

        if (message.writing && message.fromuser?.id === this.user?.id) {
          this.getWriting();
        } else if (message.text || message.image || message.audio) {
          this.toUserWriting = "";
          await this.newMessage(message);
        }
      }
    });

    this.userChangeEvent.subscribe(async (id) => {
      this.userId = id;
      this.messages = [];
      this.user = null;
      this.conversationId = this.chatSvc.getConversationId(
        this.auth.currentUserValue.id,
        this.userId
      );
      await this.getLastMessages();

      this.chatSvc.userOnline(this.auth.currentUserValue.id, this.userId);
    });
  }

  async getLastMessages() {
    if (!this.userId) {
      return;
    }

    try {
      let messages = (await this.chatSvc.getMessages(this.userId, false, 1))
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

        this.title.setTitle(
          "Chat con " + this.user.username + " en frikiradar"
        );
        this.meta.updateTag({
          name: "description",
          content: "Chat con " + this.user.username + " en frikiradar",
        });
      } else {
        try {
          this.user = await this.userSvc.getUser(this.userId);
        } catch (e) {
          console.error(e);
        }
      }

      if (isPlatform("capacitor")) {
        Keyboard.addListener("keyboardWillShow", () => {
          this.scrollDown(0, true, false);
        });

        Keyboard.addListener("keyboardDidHide", () => {
          this.scrollDown(0, true, false);
        });
      }

      this.scrollDown(300, true, false);
    } catch (e) {
      console.error(e);
    }
  }

  async newMessage(message: Chat) {
    console.log("new message", message);
    // Si el mensaje es mio, lo actualizo
    if (message.fromuser?.id === this.auth.currentUserValue.id) {
      this.messages.map((m) => {
        if (m.tmp_id === message.tmp_id) {
          m.id = message.id;
          m.sending = false;
          m.time_creation = message.time_creation;
          m.time_read = message.time_read;
        }
      });
    } else if (message.deleted) {
      // Si el mensaje ha sido eliminado
      console.log("mensaje eliminado", message);
      this.messages = this.messages.filter((m) =>
        message.tmp_id ? m.tmp_id !== message.tmp_id : m.id !== message.id
      );
    } else if (message.edited) {
      console.log("mensaje editado", message);
      // Si el mensaje ha sido editado
      const index = this.messages.findIndex(
        (m) => m.id === message.id || m.tmp_id === message.tmp_id
      );
      if (index !== -1) {
        this.messages[index] = message;
      }
    } else if (!message.writing) {
      // Si el mensaje no es mio, lo añado a la lista y lo marco como leído
      this.messages = [...this.messages, message];
      if (message.time_read === undefined) {
        message.time_read = new Date();
        this.chatSvc.readChat(message);
      }
    }

    // Marcamos los mensajes pasados
    this.messages.forEach((m) => {
      if (new Date(m?.event?.date) < new Date()) {
        m.event.past = true;
      }
    });

    this.cd.detectChanges();
    this.scrollDown();
  }

  async sendMessage(message?: Chat) {
    const text = message.text;
    const image = message.image;
    const audio = message.audio;

    const tmpId = this.utils.makeId(12);

    message = {
      conversationId: this.conversationId,
      tmp_id: tmpId,
      touser: this.user,
      fromuser: {
        id: this.auth.currentUserValue.id,
        username: this.auth.currentUserValue.username,
        name: this.auth.currentUserValue.name,
        avatar: this.auth.currentUserValue.avatar,
        thumbnail: this.auth.currentUserValue.thumbnail,
        roles: this.auth.currentUserValue.roles,
        last_login: this.auth.currentUserValue.last_login,
        verified: this.auth.currentUserValue.verified,
        block: this.auth.currentUserValue.block,
        banned: this.auth.currentUserValue.banned,
        active: this.auth.currentUserValue.active,
      },
      text,
      image,
      audio,
      time_creation: new Date(),
      sending: true,
      status: "online",
      edited: this.editing,
    } as Chat;
    console.log("mensaje a enviar", message);

    if (this.editing) {
      await this.chatSvc.emitMessage(message);
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
      this.messages = [...this.messages, ...[message]].filter(
        (m: Chat) => m.text || m.image || m.audio
      );

      this.scrollDown(300, true, true);
      let replyToId =
        this.selectedMessage && this.replying ? this.selectedMessage.id : null;
      this.replying = false;

      try {
        let chat = null;
        if (!image && !audio) {
          await this.chatSvc.emitMessage(message);
          chat = await this.chatSvc
            .sendMessage(this.user.id, text, replyToId, tmpId)
            .then();
        } else if (image) {
          const imageFile = await this.utils.urltoBlob(image);
          chat = await this.chatSvc
            .sendImage(this.user.id, imageFile, text, tmpId)
            .then();
          await this.chatSvc.emitMessage(chat);
        } else if (audio) {
          const audioFile = await this.utils.urltoBlob(audio);
          chat = await this.chatSvc
            .sendAudio(this.user.id, audioFile, tmpId)
            .then();
          await this.chatSvc.emitMessage(chat);
        }

        // añadele el id al mensaje
        this.messages.map((m) => {
          if (m.tmp_id === tmpId) {
            m.id = chat.id;
            m.sending = false;
          }
        });

        replyToId = null;
      } catch (e) {
        this.messages = this.messages.filter((m) => m.sending !== true);
        console.error(e);
      }
    }
  }

  async scrollDown(delay = 0, force = false, smooth = true) {
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
        this.chatlist.scrollToBottom(smooth ? 300 : 0);
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
    await Haptics.vibrate({ duration: 1 });
    this.selectedMessage = message;
    this.pressOptions = true;
  }

  async copy() {
    this.pressOptions = false;
    try {
      await Clipboard.write({ string: this.selectedMessage.text });

      (
        await this.toast.create({
          message: this.i18n.translate("message-copied"),
          duration: 2000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-copying-message"),
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
      this.selectedMessage.deleted = true;
      this.chatSvc.emitMessage(this.selectedMessage);
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-deleting-message"),
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

  async openViewer(message: Chat) {
    const modal = await this.modalController.create({
      component: ImageViewerModal,
      componentProps: {
        params: {
          src: message.image,
          title: message.fromuser.username,
          description: message.text,
          date: this.utils.niceDate(message?.time_creation),
        },
      },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
  }

  async showOptions(event: any) {
    const popover = await this.popoverController.create({
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
    await this.chatSvc.typing(this.auth.currentUserValue.id, this.userId);
    setTimeout(async () => {
      this.writing = false;
    }, 15000);
  }

  async getWriting() {
    this.toUserWriting = this.i18n.translate("typing") + "...";
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

  trackByFn(index, item) {
    return item.time_creation; // o cualquier propiedad única en tus objetos de mensaje
  }

  back() {
    this.chatSvc.userOffline(this.auth.currentUserValue.id, this.userId);
    this.backToList.emit(true);
  }
}

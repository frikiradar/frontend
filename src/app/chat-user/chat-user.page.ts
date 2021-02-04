import { Component, OnInit, ViewChild } from "@angular/core";
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
  AlertController,
  IonContent,
  IonInfiniteScroll,
  IonTextarea,
  NavController,
  Platform,
  ToastController
} from "@ionic/angular";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { ChatService } from "../services/chat.service";
import { ConfigService } from "../services/config.service";
import { UrlService } from "../services/url.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

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

  source: EventSource;

  user: User;
  userId: User["id"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  loading = true;
  page = 0;
  showOptions = false;
  selectedMessage: Chat;
  conErrors = 0;
  alertError: any;

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
    private platform: Platform,
    private config: ConfigService,
    public formBuilder: FormBuilder,
    private urlSvc: UrlService
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

    try {
      this.user = await this.userSvc.getUser(this.userId);
      this.loading = false;

      if (this.user.username === "frikiradar") {
        this.chatForm.get("message").disable();
      }
    } catch (e) {
      this.chatForm.get("message").disable();
    }

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
    const messages = (
      await this.chatSvc.getMessages(this.userId, true, this.page, lastId)
    )
      .filter(m => m.text)
      .reverse();

    this.messages = [...this.messages, ...messages];
    // this.chatSvc.setStoragedMessages(messages);

    if (this.messages.length < 50) {
      this.infiniteScroll.disabled = true;
    }

    this.scrollDown(500);

    const min = Math.min(this.auth.currentUserValue.id, this.userId);
    const max = Math.max(this.auth.currentUserValue.id, this.userId);
    const channel = `${min}_${max}`;

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
        if (message.fromuser.id === this.user.id) {
          // marcamos como leido
          message = await this.chatSvc.readChat(message.id);
        } else {
          // borramos los enviando...
          this.messages = this.messages.filter(m => !m.sending);
        }
      }

      if (message.fromuser.id === this.user.id) {
        this.user = { ...this.user, ...message.fromuser };
      }

      this.scrollDown();
    });

    this.source.addEventListener("error", async error => {
      this.conErrors++;
      if (error.type === "error" && this.conErrors >= 3) {
        console.error(error);
        this.source.close();

        // await this.alertError.present();
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
  }

  /*@HostListener("window:click", ["$event"]) onClick(event: any) {
    event.stopPropagation();
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      console.log("este vale", event);
    }
  }*/

  async sendMessage(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (this.message.value && this.message.value.trim()) {
      const text = this.message.value.trim();
      this.message.setValue("");
      this.textarea?.setFocus();

      this.messages = [
        ...this.messages,
        ...[
          {
            touser: { id: this.user.id },
            fromuser: { id: this.auth.currentUserValue.id },
            text,
            time_creation: new Date(),
            sending: true
          }
        ]
      ].filter(m => m.text);

      this.scrollDown();
      try {
        const chat = await this.chatSvc.sendMessage(this.user.id, text).then();
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
      .filter(m => m.text)
      .reverse();
    this.messages = [...messages, ...this.messages];
    event.target.complete();

    if (this.messages.length < 50) {
      event.target.disabled = true;
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  selectMessage(message: Chat) {
    this.selectedMessage = message;
    this.showOptions = true;
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
    this.showOptions = false;
  }

  async deleteMessage() {
    this.showOptions = false;
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

  openUrl(event: any) {
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      this.urlSvc.openUrl(event.srcElement.href);
    }
    return false;
  }

  back() {
    this.nav.back();
    this.source.close();
  }
}

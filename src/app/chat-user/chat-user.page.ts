import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import {
  AlertController,
  IonContent,
  IonInfiniteScroll,
  IonTextarea,
  NavController,
  Platform
} from "@ionic/angular";

import { SafeResourceUrl } from "@angular/platform-browser";
import { Chat } from "../models/chat";
import { User } from "../models/user";
import { ChatService } from "../services/chat.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

@Component({
  selector: "app-chat-user",
  templateUrl: "./chat-user.page.html",
  styleUrls: ["./chat-user.page.scss"]
})
export class ChatUserPage implements OnInit {
  @ViewChild("textarea")
  textarea: IonTextarea;
  @ViewChild("chatlist")
  chatlist: IonContent;
  @ViewChild(IonInfiniteScroll)
  infiniteScroll: IonInfiniteScroll;

  source: EventSource;

  user: User;
  userId: User["id"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  loading = true;
  page = 1;
  showOptions = false;
  selectedMessage: Chat;
  conErrors = 0;

  constructor(
    public auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private chatSvc: ChatService,
    private toast: Toast,
    private alert: AlertController,
    private clipboard: Clipboard,
    public keyboard: Keyboard,
    private platform: Platform
  ) {}

  async ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get("id");

    try {
      this.user = await this.userSvc.getUser(this.userId);
      this.loading = false;
    } catch (e) {}

    this.messages = (await this.chatSvc.getMessages(
      this.userId,
      true,
      this.page
    )).reverse();

    if (this.messages.length < 50) {
      this.infiniteScroll.disabled = true;
    }

    this.scrollDown(500);

    const min = Math.min(this.auth.currentUserValue.id, this.userId);
    const max = Math.max(this.auth.currentUserValue.id, this.userId);
    const channel = `${min}_${max}`;

    this.source = this.chatSvc.register(channel);
    this.source.addEventListener("message", async (res: any) => {
      this.conErrors = 0;
      let message = JSON.parse(res.data) as Chat;
      if (this.messages.some(m => m.id === message.id)) {
        // Si ya existe el mensaje lo actualizamos
        this.messages.map(m => {
          if (m.id === message.id) {
            m = message;
          }
        });
      } else {
        if (message.fromuser.id === this.user.id) {
          // marcamos como leido
          message = await this.chatSvc.readChat(message.id);
        } else {
          // borramos los enviando...
          this.messages = this.messages.filter(m => !m.sending);
        }
      }
      this.messages = [...this.messages, message];
      this.scrollDown();
    });

    this.source.addEventListener("error", async error => {
      this.conErrors++;
      if (error.type === "error" && this.conErrors >= 2) {
        console.error(error);
        this.source.close();
        const alert = await this.alert.create({
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

        await alert.present();
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

    this.textarea.setFocus();
  }

  async sendMessage() {
    if (this.textarea.value.trim()) {
      const text = this.textarea.value.trim();
      this.textarea.value = "";
      this.textarea.setFocus();

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
      ];

      this.scrollDown();
      this.chatSvc.sendMessage(this.user.id, text);
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
    this.page++;
    const messages = (await this.chatSvc.getMessages(
      this.userId,
      false,
      this.page
    )).reverse();
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

    this.toast.show("Copiado al portapapeles", "short", "center").subscribe();
    this.showOptions = false;
  }

  back() {
    this.nav.back();
    this.source.close();
  }
}

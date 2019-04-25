import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { Toast } from "@ionic-native/toast/ngx";
import {
  IonContent,
  IonInfiniteScroll,
  IonTextarea,
  NavController
} from "@ionic/angular";

import { SafeResourceUrl } from "@angular/platform-browser";
import { Chat } from "../models/chat";
import { User } from "../models/user";
import { ChatService } from "../services/chat.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

const { Clipboard } = Plugins;

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

  constructor(
    public auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private chatSvc: ChatService,
    private toast: Toast
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

    setTimeout(() => {
      this.scrollDown();
    }, 500);

    const min = Math.min(this.auth.currentUserValue.id, this.userId);
    const max = Math.max(this.auth.currentUserValue.id, this.userId);
    const channel = `${min}_${max}`;

    this.source = this.chatSvc.register(channel);
    this.source.addEventListener("message", async (res: any) => {
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

        this.messages = [...this.messages, message];
      }
      setTimeout(() => {
        this.scrollDown();
      }, 100);
    });

    this.source.addEventListener("error", async error => {
      if (error.type === "error") {
        console.error(error);
        // this.source.close();
        /*const alert = await this.alert.create({
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
  
          await alert.present();*/
      }
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

  scrollDown() {
    if (!this.chatlist) {
      return;
    }

    this.chatlist.scrollToBottom(0);
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
    Clipboard.write({
      string: this.selectedMessage.text
    });

    this.toast.show("Copiado al portapapeles", "short", "center").subscribe();
    this.showOptions = false;
  }

  back() {
    this.nav.back();
  }
}

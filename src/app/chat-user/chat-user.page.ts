import { Location } from "@angular/common";
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonTextarea, NavController } from "@ionic/angular";

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
export class ChatUserPage implements OnInit, AfterViewChecked {
  @ViewChild("textarea")
  textarea: IonTextarea;
  @ViewChild("chatlist")
  set _chatlist(c: ElementRef) {
    this.chatlist = c.nativeElement;
  }
  chatlist: HTMLElement;

  source: EventSource;

  user: User;
  userId: User["id"];
  messages: Chat[] = [];
  avatar: SafeResourceUrl;
  loading = true;

  constructor(
    private auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private chatSvc: ChatService
  ) {}

  async ngOnInit() {
    this.avatar = "../../assets/img/users/default.jpg";

    this.userId = +this.route.snapshot.paramMap.get("id");

    try {
      this.user = await this.userSvc.getUser(this.userId);
      this.loading = false;
      if (this.user && this.user.avatar) {
        this.avatar = this.user.avatar;
      }
    } catch (e) {}

    this.messages = (await this.chatSvc.getMessages(this.userId)).reverse();
    this.scrollDown();

    const min = Math.min(this.auth.currentUserValue.id, this.userId);
    const max = Math.max(this.auth.currentUserValue.id, this.userId);
    const channel = `${min}_${max}`;

    this.source = this.chatSvc.register(channel);
    this.source.addEventListener("message", (res: any) => {
      const message = JSON.parse(res.data) as Chat;

      if (message.fromuser !== this.auth.currentUserValue.id) {
        this.messages = [...this.messages, message];
        this.scrollDown();
      }
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

  ngAfterViewChecked() {
    this.scrollDown();
  }

  async sendMessage() {
    if (this.textarea.value.trim()) {
      const text = this.textarea.value.trim();
      this.scrollDown();
      this.textarea.value = "";
      this.textarea.setFocus();

      this.messages = [
        ...this.messages,
        ...[
          {
            touser: this.user.id,
            text,
            time_creation: new Date()
          }
        ]
      ];

      // TODO: Marcar como enviado cuando lo reciba de vuelta
      const message = this.chatSvc.sendMessage(this.user.id, text);
    }
  }

  scrollDown() {
    if (!this.chatlist) {
      return;
    }
    this.chatlist.scrollTop = this.chatlist.scrollHeight;
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  back() {
    this.nav.navigateBack(["/tabs/chat"]);
  }
}

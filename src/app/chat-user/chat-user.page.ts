import { Location } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, IonContent, IonTextarea } from "@ionic/angular";

import { SafeResourceUrl } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
import { Chat } from "../models/chat";
import { User } from "../models/user";
import { RestService } from "../services/rest.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

@Component({
  selector: "app-chat-user",
  templateUrl: "./chat-user.page.html",
  styleUrls: ["./chat-user.page.scss"]
})
export class ChatUserPage {
  @ViewChild("textarea")
  textarea: IonTextarea;
  @ViewChild("chatlist")
  chatlist: IonContent;

  source: EventSource;

  user: User;
  messages: Chat[] = [];
  avatar: SafeResourceUrl;

  constructor(
    private auth: AuthService,
    private userSvc: UserService,
    private rest: RestService,
    private alert: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  async ionViewWillEnter() {
    this.avatar = "../../assets/img/users/default.jpg";

    const id = this.route.snapshot.paramMap.get("id");
    this.user = await this.userSvc.getUser(+id);
    if (this.user.avatar) {
      this.avatar = this.user.avatar;
    }

    this.messages = (await this.rest.get(`chat/${id}`)) as Chat[];
    this.scrollDown();

    const min = Math.min(this.auth.currentUserValue.id, this.user.id);
    const max = Math.max(this.auth.currentUserValue.id, this.user.id);
    const topic = `${min}_${max}`;

    this.source = new EventSource(`${environment.pushUrl}?topic=${topic}`);

    this.source.addEventListener("message", (res: any) => {
      const message = JSON.parse(res.data) as Chat;
      if (message.fromuser !== this.auth.currentUserValue.id) {
        this.messages = [...this.messages, message];
        this.scrollDown();
      }
    });

    this.source.addEventListener("error", async error => {
      if (error.type === "error") {
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
  }

  async sendMessage() {
    if (this.textarea.value.trim()) {
      const text = this.textarea.value.trim();
      this.scrollDown(0);
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
      const message = (await this.rest
        .put("chat", { touser: this.user.id, text })
        .toPromise()) as Chat;
    }
  }

  scrollDown(delay = 100) {
    setTimeout(() => {
      this.chatlist.scrollToBottom();
    }, delay);
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  back() {
    this.location.back();
  }
}

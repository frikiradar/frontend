import { Component, ViewChild } from "@angular/core";
import {
  AlertController,
  IonContent,
  IonTextarea,
  ModalController,
  NavParams
} from "@ionic/angular";

import { SafeResourceUrl } from "@angular/platform-browser";
import { environment } from "../../../environments/environment";
import { Chat } from "../../models/chat";
import { User } from "../../models/user";
import { RestService } from "../../services/rest.service";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "app-chat-modal",
  templateUrl: "./chat.modal.html",
  styleUrls: ["./chat.modal.scss"]
})
export class ChatModal {
  @ViewChild("textarea")
  textarea: IonTextarea;
  @ViewChild("chatlist")
  chatlist: IonContent;

  source: EventSource;

  user: User;
  messages: Chat[] = [];
  avatar: SafeResourceUrl;

  constructor(
    public modal: ModalController,
    private auth: AuthService,
    private navParams: NavParams,
    private userSvc: UserService,
    private rest: RestService,
    private alert: AlertController
  ) {}

  async ionViewWillEnter() {
    this.avatar = "../../../assets/img/users/default.jpg";

    const id = this.navParams.get("id");
    this.user = await this.userSvc.getUser(id);
    if (this.user.avatar) {
      this.avatar = this.user.avatar;
    }

    this.messages = (await this.rest.get(`chat/${id}`)) as Chat[];
    this.scrollDown();
    this.textarea.setFocus();

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
        const alert = await this.alert.create({
          header: `Ups, error al conectar`,
          message:
            "El servicio de chat está en mantenimiento en estos momentos, regresa en unos minutos.",
          backdropDismiss: false,
          buttons: [
            {
              text: "Ok, seré paciente",
              handler: () => {
                this.closeModal();
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

  closeModal() {
    this.source.close();
    this.modal.dismiss();
  }
}

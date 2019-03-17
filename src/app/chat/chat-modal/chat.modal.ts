import { Component, OnInit, ViewChild } from "@angular/core";
import {
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
export class ChatModal implements OnInit {
  @ViewChild("text")
  text: IonTextarea;
  @ViewChild("chatlist")
  chatlist: IonContent;

  user: User;
  messages: Chat[] = [];
  avatar: SafeResourceUrl;

  constructor(
    public modal: ModalController,
    private auth: AuthService,
    private navParams: NavParams,
    private userSvc: UserService,
    private rest: RestService
  ) {
    this.avatar = "../../assets/img/users/default.jpg";
  }

  async ngOnInit() {
    const id = this.navParams.get("id");
    this.user = await this.userSvc.getUser(id);
    if (this.user.avatar) {
      this.avatar = this.user.avatar;
    }

    this.messages = (await this.rest.get(`chat/${id}`)) as Chat[];
    setTimeout(() => {
      this.chatlist.scrollToBottom();
    }, 100);

    const min = Math.min(this.auth.currentUserValue.id, this.user.id);
    const max = Math.max(this.auth.currentUserValue.id, this.user.id);
    const topic = `${min}_${max}`;

    const source = new EventSource(`${environment.pushUrl}?topic=${topic}`);

    source.addEventListener("message", (res: any) => {
      const message = JSON.parse(res.data) as Chat;
      if (message.fromuser !== this.auth.currentUserValue.id) {
        this.messages = [...this.messages, message];
      }
    });
  }

  async sendMessage() {
    if (this.text.value.trim()) {
      this.messages = [
        ...this.messages,
        ...[
          {
            touser: this.user.id,
            text: this.text.value.trim(),
            time_creation: new Date()
          }
        ]
      ];

      // TODO: Marcar como enviado cuando lo reciba de vuelta
      const message = (await this.rest
        .put("chat", { touser: this.user.id, text: this.text.value.trim() })
        .toPromise()) as Chat;

      this.text.value = "";
    }
  }

  scrollDown() {}

  closeModal() {
    this.modal.dismiss();
  }
}

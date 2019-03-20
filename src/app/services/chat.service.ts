import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { Chat } from "../models/chat";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(private rest: RestService) {}

  register(channel: string) {
    return new EventSource(`${environment.pushUrl}?topic=${channel}`);
  }

  async getChats() {
    const chats = (await this.rest.get(`chats`)) as Chat[];
    chats.map(
      chat =>
        (chat.user.avatar = chat.user.avatar
          ? chat.user.avatar
          : "../../assets/img/users/default.jpg")
    );

    return chats;
  }

  async getMessages(id: number) {
    return (await this.rest.get(`chat/${id}`)) as Chat[];
  }

  async sendMessage(id: number, text: string) {
    return (await this.rest
      .put("chat", { touser: id, text })
      .toPromise()) as Chat;
  }
}

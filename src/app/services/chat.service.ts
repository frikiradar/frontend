import { Injectable } from "@angular/core";

import { Chat } from "../models/chat";
import { ConfigService } from "./config.service";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(private rest: RestService, private config: ConfigService) {}

  async register(channel: string) {
    const config = await this.config.getConfig();
    return new EventSource(`${config.push_url}?topic=${channel}`);
  }

  async getChats() {
    const chats = (await this.rest.get(`chats`).toPromise()) as Chat[];

    return chats;
  }

  async getMessages(id: number, read?: boolean, page = 1, lastId = 0) {
    return (await this.rest
      .get(`chat/${id}?read=${read}&page=${page}&lastid=${lastId}`)
      .toPromise()) as Chat[];
  }

  async sendMessage(id: number, text: string) {
    return (await this.rest
      .put("chat", { touser: id, text })
      .toPromise()) as Chat;
  }

  async readChat(id: number) {
    return (await this.rest.get(`read-chat/${id}`).toPromise()) as Chat;
  }

  async deleteMessage(id: number) {
    await this.rest.delete(`chat-message/${id}`).toPromise();
    let storagedMessages = this.getStoragedMessages();
    storagedMessages = storagedMessages.filter(m => m.id !== id);

    localStorage.setItem("chats", JSON.stringify(storagedMessages));
  }

  async deleteChat(touserid: number) {
    await this.rest.delete(`chat/${touserid}`).toPromise();
    let storagedMessages = this.getStoragedMessages();
    storagedMessages = storagedMessages.filter(
      m => m.touser.id !== touserid && m.fromuser.id !== touserid
    );

    localStorage.setItem("chats", JSON.stringify(storagedMessages));
  }

  getStoragedMessages(): Chat[] {
    const storagedMessages = JSON.parse(localStorage.getItem("chats"));
    return storagedMessages ? storagedMessages : [];
  }

  deleteStoragedMessages() {
    localStorage.removeItem("chats");
  }

  setStoragedMessages(messages: Chat[]) {
    let storagedMessages = this.getStoragedMessages();
    messages.forEach(message => {
      if (storagedMessages.some(m => m.id === message.id)) {
        storagedMessages.map(m => {
          if (m.id === message.id) {
            m.time_read = message.time_read;
            m.sending = message.sending;
          }
        });
      } else {
        storagedMessages = [...storagedMessages, message];
      }
    });

    storagedMessages.sort((a, b) => a.id - b.id);

    localStorage.setItem("chats", JSON.stringify(storagedMessages));
  }
}

import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { Config } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { I18nService } from "./i18n.service";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  public source: EventSource;

  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService,
    private alert: AlertController,
    private i18n: I18nService
  ) {}

  async getChats() {
    const chats = (await this.rest.get(`chats`)) as Chat[];

    return chats;
  }

  async getMessages(id: number, read?: boolean, page = 1, lastId = 0) {
    return (await this.rest.get(
      `chat/${id}?read=${read}&page=${page}&lastid=${lastId}`
    )) as Chat[];
  }

  async sendMessage(
    id: number,
    text: string,
    replyto?: number,
    tmp_id?: string
  ): Promise<Chat> {
    return (await this.rest.put("chat", {
      touser: id,
      text,
      replyto,
      tmp_id,
    })) as Chat;
  }

  async sendImage(
    id: number,
    image: Blob,
    text: string,
    tmp_id?: string
  ): Promise<Chat> {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("touser", "" + id);
    formData.set("text", text);
    formData.set("tmp_id", tmp_id);
    return (await this.uploadSvc.upload("chat-upload", formData)) as Chat;
  }

  async sendAudio(id: number, audio: Blob, tmp_id?: string): Promise<Chat> {
    const formData: FormData = new FormData();
    formData.set("audio", audio);
    formData.set("touser", "" + id);
    formData.set("tmp_id", tmp_id);
    return (await this.uploadSvc.upload("chat-upload", formData)) as Chat;
  }

  async writing(fromuser: number, touser: number) {
    return (await this.rest.put("writing-chat", { fromuser, touser })) as Chat;
  }

  async updateMessage(id: Chat["id"], text: Chat["text"]) {
    return (await this.rest.put("update-message", { id, text })) as Chat;
  }

  async readChat(id: number) {
    return (await this.rest.get(`read-chat/${id}`)) as Chat;
  }

  async deleteMessage(id: number) {
    await this.rest.delete(`chat-message/${id}`);
  }

  async deleteChat(touserid: number) {
    await this.rest.delete(`chat/${touserid}`);
  }

  async archiveChat(chat: Chat, allChats: Chat[]) {
    let chats_config = (await this.getChatsConfig()) || [];

    chats_config = chats_config.filter((c) => {
      return allChats.some(
        (ac) => ac.conversationId === c.conversationId && c.archived
      );
    });

    const existingChat = chats_config.find(
      (c) => c.conversationId === chat.conversationId
    );

    if (existingChat) {
      existingChat.archived = true;
    } else {
      chats_config.push({
        conversationId: chat.conversationId,
        archived: true,
      });
    }

    await this.setChatsConfig(chats_config);
  }

  async unarchiveChat(chat: Chat, allChats: Chat[]) {
    let chats_config = (await this.getChatsConfig()) || [];

    chats_config = chats_config.filter((c) => {
      return allChats.some(
        (ac) =>
          ac.conversationId === c.conversationId &&
          c.archived &&
          ac.id !== chat.id
      );
    });

    await this.setChatsConfig(chats_config);
  }

  async setChatsConfig(chats_config: Config["chats"]) {
    const user = (await this.rest.put("chats-config", {
      chats_config,
    })) as User;
    this.auth.setAuthUser(user);
  }

  async getChatsConfig() {
    const config = this.auth.currentUserValue?.config;
    return config?.chats;
  }

  async report(message: Chat, note: string) {
    return await this.rest.put("report-chat", { message, note });
  }

  async realtimeChatInfo() {
    (
      await this.alert.create({
        header: this.i18n.translate("notifications-disabled"),
        message: this.i18n.translate("realtime-chat-requirement"),
        buttons: [
          {
            text: this.i18n.translate("understood"),
            handler: async () => {
              await Notification.requestPermission();
            },
          },
        ],
        cssClass: "round-alert",
      })
    ).present();
  }
}

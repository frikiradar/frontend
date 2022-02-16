import { Injectable } from "@angular/core";
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { AlertController, Platform } from "@ionic/angular";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { Config, ConfigService } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

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
    private afMessaging: AngularFireMessaging
  ) {}

  async getChats() {
    const chats = (await this.rest.get(`chats`).toPromise()) as Chat[];

    return chats;
  }

  async getMessages(id: number, read?: boolean, page = 1, lastId = 0) {
    return (await this.rest
      .get(`chat/${id}?read=${read}&page=${page}&lastid=${lastId}`)
      .toPromise()) as Chat[];
  }

  async sendMessage(
    id: number,
    text: string,
    replyto?: number,
    tmp_id?: string
  ): Promise<Chat> {
    return (await this.rest
      .put("chat", { touser: id, text, replyto, tmp_id })
      .toPromise()) as Chat;
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
    return (await this.rest
      .put("writing-chat", { fromuser, touser })
      .toPromise()) as Chat;
  }

  async updateMessage(id: Chat["id"], text: Chat["text"]) {
    return (await this.rest
      .put("update-message", { id, text })
      .toPromise()) as Chat;
  }

  async readChat(id: number) {
    return (await this.rest.get(`read-chat/${id}`).toPromise()) as Chat;
  }

  async deleteMessage(id: number) {
    await this.rest.delete(`chat-message/${id}`).toPromise();
  }

  async deleteChat(touserid: number) {
    await this.rest.delete(`chat/${touserid}`).toPromise();
  }

  async archiveChat(chat: Chat) {
    let chats_config = await this.getChatsConfig();

    if (chats_config) {
      if (chats_config?.some((c) => c.conversationId === chat.conversationId)) {
        chats_config.map((c) => {
          if (c.conversationId === chat.conversationId) {
            c.archived = true;
          }
        });
      } else {
        chats_config = [
          ...chats_config,
          {
            conversationId: chat.conversationId,
            archived: true,
          },
        ];
      }
    } else {
      chats_config = [
        {
          conversationId: chat.conversationId,
          archived: true,
        },
      ];
    }

    await this.setChatsConfig(chats_config);
  }

  async unarchiveChat(chat: Chat) {
    let chats_config = await this.getChatsConfig();

    if (chats_config) {
      if (chats_config?.some((c) => c.conversationId === chat.conversationId)) {
        chats_config.map((c) => {
          if (c.conversationId === chat.conversationId) {
            c.archived = false;
          }
        });
      } else {
        chats_config = [
          ...chats_config,
          {
            conversationId: chat.conversationId,
            archived: false,
          },
        ];
      }
    } else {
      chats_config = [
        {
          conversationId: chat.conversationId,
          archived: false,
        },
      ];
    }

    await this.setChatsConfig(chats_config);
  }

  async setChatsConfig(chats_config: Config["chats"]) {
    const user = (await this.rest
      .put("chats-config", { chats_config })
      .toPromise()) as User;
    this.auth.setAuthUser(user);
  }

  async getChatsConfig() {
    const config = this.auth.currentUserValue?.config;
    return config?.chats;
  }

  async report(message: Chat, note: string) {
    return await this.rest.put("report-chat", { message, note }).toPromise();
  }

  async realtimeChatInfo() {
    (
      await this.alert.create({
        header: "Notificaciones desactivadas",
        message:
          "Para tener chat en tiempo real es necesario activar las notificaciones. Actívalas para tener esta función.",
        buttons: [
          {
            text: "Entendido!",
            handler: async () => {
              await this.afMessaging.requestPermission.toPromise();
            },
          },
        ],
        cssClass: "round-alert",
      })
    ).present();
  }
}

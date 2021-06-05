import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { Config, ConfigService } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  public source: EventSource;

  constructor(
    private rest: RestService,
    private config: ConfigService,
    private uploadSvc: UploadService,
    private auth: AuthService
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

  async sendMessage(id: number, text: string, replyto?: number) {
    return (await this.rest
      .put("chat", { touser: id, text, replyto })
      .toPromise()) as Chat;
  }

  async sendImage(id: number, image: Blob, text: string) {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("touser", "" + id);
    formData.set("text", text);
    return (await this.uploadSvc.upload("chat-upload", formData)) as Chat;
  }

  async sendAudio(id: number, audio: Blob) {
    const formData: FormData = new FormData();
    formData.set("audio", audio);
    formData.set("touser", "" + id);
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
      if (chats_config?.some(c => c.conversationId === chat.conversationId)) {
        chats_config.map(c => {
          if (c.conversationId === chat.conversationId) {
            c.archived = true;
          }
        });
      } else {
        chats_config = [
          ...chats_config,
          {
            conversationId: chat.conversationId,
            archived: true
          }
        ];
      }
    } else {
      chats_config = [
        {
          conversationId: chat.conversationId,
          archived: true
        }
      ];
    }

    await this.setChatsConfig(chats_config);
  }

  async unarchiveChat(chat: Chat) {
    let chats_config = await this.getChatsConfig();

    if (chats_config) {
      if (chats_config?.some(c => c.conversationId === chat.conversationId)) {
        chats_config.map(c => {
          if (c.conversationId === chat.conversationId) {
            c.archived = false;
          }
        });
      } else {
        chats_config = [
          ...chats_config,
          {
            conversationId: chat.conversationId,
            archived: false
          }
        ];
      }
    } else {
      chats_config = [
        {
          conversationId: chat.conversationId,
          archived: false
        }
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

  async sseRegister(channel: string) {
    const config = await this.config.getConfig();
    this.source = new EventSource(`${config.push_url}?topic=${channel}`);
  }

  async sseListener(userid: User["id"]) {
    if (!this.source || this.source.readyState === 2) {
      this.sseRegister(`chats-${userid}`);
    }

    return new Observable(observer => {
      this.source.onmessage = x => observer.next(JSON.parse(x.data) as Chat);
      this.source.onerror = x => {
        this.source.close();
        observer.error(x);
      };

      return () => {
        this.source.close();
      };
    });
  }
}

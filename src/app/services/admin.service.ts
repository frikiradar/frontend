import { Injectable } from "@angular/core";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { ConfigService } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private rest: RestService) {}

  async warn(id: User["id"], message: string) {
    return this.rest.put("warn", { touser: id, message }).toPromise();
  }

  getBans() {
    return this.rest.get("bans").toPromise() as Promise<User[]>;
  }

  async ban(id: User["id"], message: string, days: string, hours: string) {
    return this.rest
      .put("ban", { touser: id, message, days, hours })
      .toPromise();
  }

  unban(id: User["id"]) {
    return this.rest.delete(`ban/${id}`).toPromise() as Promise<User[]>;
  }

  async sendTopicMessage(topic: string, message: string, title: string) {
    return await this.rest
      .put("topic-message", { topic, message, title })
      .toPromise();
  }

  async getBannedMessages(id: User["id"]): Promise<Chat[]> {
    return (await this.rest.get(`banned-messages/${id}`).toPromise()) as Chat[];
  }

  async sendMessage(id: number, text: string) {
    return (await this.rest
      .put("banned-message", { touser: id, text })
      .toPromise()) as Chat;
  }
}

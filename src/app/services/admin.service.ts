import { Injectable } from "@angular/core";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { RestService } from "./rest.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private rest: RestService) {}

  async warn(id: User["id"], message: string) {
    return await firstValueFrom(this.rest.put("warn", { touser: id, message }));
  }

  async getBans() {
    return (await firstValueFrom(this.rest.get("bans"))) as User[];
  }

  async ban(id: User["id"], message: string, days: string, hours: string) {
    return await firstValueFrom(
      this.rest.put("ban", { touser: id, message, days, hours })
    );
  }

  async unban(id: User["id"]) {
    return (await firstValueFrom(this.rest.delete(`ban/${id}`))) as User[];
  }

  async sendTopicMessage(topic: string, message: string, title: string) {
    return await firstValueFrom(
      this.rest.put("topic-message", { topic, message, title })
    );
  }

  async getBannedMessages(id: User["id"]): Promise<Chat[]> {
    return (await firstValueFrom(
      this.rest.get(`banned-messages/${id}`)
    )) as Chat[];
  }

  async sendMessage(id: number, text: string) {
    return (await firstValueFrom(
      this.rest.put("banned-message", { touser: id, text })
    )) as Chat;
  }
}

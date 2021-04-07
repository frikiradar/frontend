import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Chat } from "src/app/models/chat";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-chat-user",
  templateUrl: "./chat-user.page.html",
  styleUrls: ["./chat-user.page.scss"]
})
export class ChatUserPage implements OnInit {
  userId: User["id"];
  chats: Chat[];

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  async ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get("id");
  }

  showChat(id: User["id"]) {
    this.userId = id;
  }

  chatsChange(chats: Chat[]) {
    if (chats?.length < this.chats?.length) {
      this.userId = undefined;
    }
    // console.log("chats cambiados");
    this.chats = chats;
  }

  newChat(chat: Chat) {
    chat.user =
      chat.fromuser.id === this.auth.currentUserValue.id
        ? chat.touser
        : chat.fromuser;

    this.chats = [chat, ...this.chats];
  }
}

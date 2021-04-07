import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  userId: User["id"];
  chats: Chat[];
  showSkeleton: boolean;
  showOptions = false;
  selectedChat: Chat;
  source: EventSource;

  constructor(
    public auth: AuthService,
    public menu: MenuController,
    private router: Router
  ) {
    this.showSkeleton = true;
  }

  async ngOnInit() {}

  async showChat(id: User["id"]) {
    // this.userId = id;
    this.router.navigate(["/chat", id]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { ChatService } from "./../services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  chats: Chat[];
  showSkeleton: boolean;

  constructor(
    private chatSvc: ChatService,
    private router: Router,
    public auth: AuthService,
    public menu: MenuController
  ) {
    this.showSkeleton = true;

    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/tabs/chat") {
          this.chats = await this.chatSvc.getChats();
        }
      }
    });
  }

  async ngOnInit() {
    this.chats = await this.chatSvc.getChats();
    this.showSkeleton = false;
  }

  async showChat(id: User["id"]) {
    this.router.navigate(["/chat", id]);
  }
}

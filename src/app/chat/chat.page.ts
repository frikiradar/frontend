import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { ChatService } from "./../services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  chats: Chat[];
  showSkeleton = true;

  constructor(private router: Router, private chatSvc: ChatService) {}

  async ngOnInit() {
    this.chats = await this.chatSvc.getChats();
    this.showSkeleton = false;
  }

  async showChat(id: User["id"]) {
    this.router.navigate(["/chat", id]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { MenuController, ToastController } from "@ionic/angular";

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
    public menu: MenuController,
    private toast: ToastController
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

  async deleteChat(chat: Chat) {
    const chats = this.chats;
    this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
    const toast = await this.toast.create({
      message: "Has eliminado el chat con " + chat.user.name,
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.chats = chats;
          }
        }
      ]
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      console.log("borrada");
      await this.chatSvc.deleteChat(chat.user.id);
    }
  }

  async dragItem(event: any, id: number) {
    if (event.detail.ratio < -1.8) {
      await event.target.close();
      this.showChat(id);
    }
  }
}

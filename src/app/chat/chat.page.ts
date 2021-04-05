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
  showOptions = false;
  selectedChat: Chat;
  source: EventSource;

  constructor(
    private chatSvc: ChatService,
    private router: Router,
    public auth: AuthService,
    public menu: MenuController,
    private toast: ToastController
  ) {
    this.showSkeleton = true;
  }

  async ngOnInit() {
    this.chats = await this.chatSvc.getChats();
    this.showSkeleton = false;

    this.connectSSE();
  }

  async showChat(id: User["id"]) {
    this.router.navigate(["/chat", id]);
  }

  async deleteChat(chat: Chat) {
    this.showOptions = false;
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

  async openItem(event: any, id: number) {
    console.log(event);
    const element = event.target.parentElement;
    element.open("end");
  }

  selectChat(chat: Chat) {
    if (chat.user.username !== "frikiradar") {
      this.selectedChat = chat;
      this.showOptions = true;
    }
  }

  async connectSSE() {
    this.source = await this.chatSvc.register(
      `chats-${this.auth.currentUserValue.id}`
    );
    this.source.addEventListener("message", async (res: any) => {
      let message = JSON.parse(res.data) as Chat;
      this.chats.map(m => {
        if (m.conversationId === message.conversationId) {
          if (message.writing) {
            const oldText = m.text;
            m.text = "⌨ Escribiendo...";
            setTimeout(() => {
              m.text = oldText;
            }, 5000);
          } else {
            m.text = message.text;
            m.time_creation = message.time_creation;
            m.time_read = message.time_read;
            if (message.time_read) {
              if (m.count > 0) {
                m.count--;
              }
            } else if (message.fromuser.id !== this.auth.currentUserValue.id) {
              m.count++;
            }
          }
        }
      });
      if (!message.writing) {
        this.chats.sort((a, b) => {
          return (
            new Date(b.time_creation).getTime() -
            new Date(a.time_creation).getTime()
          );
        });
      }
    });

    this.source.addEventListener("error", async error => {
      console.error("Escucha al servidor de chat perdida", error);
      this.source.close();
      this.connectSSE();
    });
  }
}

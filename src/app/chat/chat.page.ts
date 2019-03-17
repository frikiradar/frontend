import { Component, OnInit } from "@angular/core";

import { ModalController } from "@ionic/angular";
import { User } from "../models/user";
import { RestService } from "../services/rest.service";
import { ChatModal } from "./chat-modal/chat.modal";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  chats;

  constructor(private modal: ModalController, private rest: RestService) {}

  async ngOnInit() {
    this.getChats();
  }

  async getChats() {
    this.chats = await this.rest.get(`chats`);
  }

  async showChat(id: User["id"]) {
    const modal = await this.modal.create({
      component: ChatModal,
      componentProps: { id }
    });

    modal.onDidDismiss().then(() => {
      this.getChats();
    });
    await modal.present();
  }
}

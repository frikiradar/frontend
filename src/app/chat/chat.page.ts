import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { RestService } from "../services/rest.service";
import { Chat } from "./../models/chat";
import { ChatModal } from "./chat-modal/chat.modal";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage {
  chats: Chat[];
  showSkeleton = true;

  constructor(private modal: ModalController, private rest: RestService) {}

  async ionViewWillEnter() {
    this.getChats();
  }

  async getChats() {
    const chats = (await this.rest.get(`chats`)) as Chat[];
    chats.map(
      chat =>
        (chat.user.avatar = chat.user.avatar
          ? chat.user.avatar
          : "../../assets/img/users/default.jpg")
    );

    this.chats = chats;
    this.showSkeleton = false;
  }

  async showChat(id: User["id"]) {
    const modal = await this.modal.create({
      component: ChatModal,
      componentProps: { id }
    });

    modal.onDidDismiss().then(() => {
      // this.showSkeleton = true;
      this.getChats();
    });
    await modal.present();
  }
}

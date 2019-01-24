import { Component } from "@angular/core";

import { ModalController } from "@ionic/angular";
import { ChatModal } from "./chat-modal/chat.modal";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage {
  constructor(private modal: ModalController) {}

  async showChat() {
    const modal = await this.modal.create({
      component: ChatModal
    });
    await modal.present();
  }
}

import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-chat-modal",
  templateUrl: "./chat.modal.html",
  styleUrls: ["./chat.modal.scss"]
})
export class ChatModal {
  constructor(public modal: ModalController) {}

  closeModal() {
    this.modal.dismiss();
  }

  /*toggled: boolean = false;
  emojitext: string;
   
  handleSelection(event) {
    this.emojitext = this.emojitext + " " + event.char;
  }*/
}

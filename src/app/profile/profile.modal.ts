import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.modal.html",
  styleUrls: ["./profile.modal.scss"]
})
export class ProfileModal {
  constructor(public modal: ModalController) {}

  closeModal() {
    this.modal.dismiss();
  }
}

import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "credits-modal",
  templateUrl: "./credits.modal.html",
  styleUrls: ["./credits.modal.scss"],
})
export class CreditsModal {
  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }
}

import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "verification-modal",
  templateUrl: "./verification.modal.html",
  styleUrls: ["./verification.modal.scss"],
})
export class VerificationModal implements OnInit {
  public user: User;

  constructor(
    private modalController: ModalController,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  close() {
    this.modalController.dismiss();
  }
}

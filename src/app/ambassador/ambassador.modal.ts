import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "ambassador-modal",
  templateUrl: "./ambassador.modal.html",
  styleUrls: ["./ambassador.modal.scss"]
})
export class AmbassadorModal implements OnInit {
  public user: User;
  constructor(private modal: ModalController, private auth: AuthService) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  close() {
    this.modal.dismiss();
  }
}

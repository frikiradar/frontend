import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "premium-modal",
  templateUrl: "./premium.modal.html",
  styleUrls: ["./premium.modal.scss"]
})
export class PremiumModal implements OnInit {
  constructor(private modal: ModalController, public auth: AuthService) {}

  async ngOnInit() {}

  close() {
    this.modal.dismiss();
  }
}

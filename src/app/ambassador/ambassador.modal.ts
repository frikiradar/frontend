import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { UrlService } from "../services/url.service";

@Component({
  selector: "ambassador-modal",
  templateUrl: "./ambassador.modal.html",
  styleUrls: ["./ambassador.modal.scss"]
})
export class AmbassadorModal implements OnInit {
  public user: User;
  constructor(
    private modal: ModalController,
    private auth: AuthService,
    private urlSvc: UrlService
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  public goToPatreon() {
    const url = "https://patreon.com/frikiradar";
    this.urlSvc.openUrl(url);
  }

  close() {
    this.modal.dismiss();
  }
}

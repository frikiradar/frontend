import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { Config, ConfigService } from "../services/config.service";

@Component({
  selector: "credits-modal",
  templateUrl: "./credits.modal.html",
  styleUrls: ["./credits.modal.scss"],
})
export class CreditsModal implements OnInit {
  public patreon: Config["patreon"];
  constructor(
    private modalController: ModalController,
    private config: ConfigService
  ) {}

  async ngOnInit() {
    this.patreon = (await this.config.get("patreon")) as Config["patreon"];
  }

  close() {
    this.modalController.dismiss();
  }
}

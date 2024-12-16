import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Config, ConfigService } from "../services/config.service";

import { NavService } from "../services/navigation.service";

@Component({
    selector: "app-rules",
    templateUrl: "./rules.page.html",
    styleUrls: ["./rules.page.scss"],
    standalone: false
})
export class RulesPage implements OnInit {
  public accepted = false;

  constructor(
    private nav: NavService,
    private modalController: ModalController,
    private config: ConfigService
  ) {}

  async ngOnInit() {
    this.accepted = (await this.config.get("rules")) as Config["rules"];
  }

  deny() {
    this.close();
  }

  async accept() {
    await this.config.set("rules", true);
    this.close();
    // location.reload();
  }

  async close() {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss();
    } else {
      this.nav.back();
    }
  }
}

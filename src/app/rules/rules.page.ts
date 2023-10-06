import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Config, ConfigService } from "../services/config.service";

import { NavService } from "../services/navigation.service";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.page.html",
  styleUrls: ["./rules.page.scss"],
})
export class RulesPage implements OnInit {
  public accepted = false;

  constructor(
    private nav: NavService,
    private modal: ModalController,
    private config: ConfigService
  ) {}

  async ngOnInit() {
    this.accepted = (await this.config.get("rules")) as Config["rules"];
  }

  deny() {
    this.close();
    this.nav.back();
  }

  async accept() {
    await this.config.set("rules", true);
    this.close();
    // location.reload();
  }

  async close() {
    this.modal.dismiss();
  }
}

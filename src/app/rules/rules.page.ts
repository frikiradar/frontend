import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ConfigService } from "../services/config.service";

import { NavService } from "../services/navigation.service";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.page.html",
  styleUrls: ["./rules.page.scss"]
})
export class RulesPage implements OnInit {
  constructor(
    private nav: NavService,
    private modal: ModalController,
    private config: ConfigService
  ) {}

  ngOnInit() {}

  deny() {
    this.close();
  }

  async accept() {
    await this.config.set("rules", true);
    this.close();
  }

  async close() {
    this.modal.dismiss();
    this.nav.back();
  }
}

import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { AdmobService } from "./../services/admob.service";

@Component({
  selector: "insert-coin-modal",
  templateUrl: "./insert-coin.modal.html",
  styleUrls: ["./insert-coin.modal.scss"]
})
export class InsertCoinModal implements OnInit {
  public page: "choose" | "credits" | "premium";

  constructor(private modal: ModalController, private admobSvc: AdmobService) {}

  async ngOnInit() {}

  async showPromo() {
    this.admobSvc.RewardVideoAd();
  }

  close() {
    this.modal.dismiss();
  }
}

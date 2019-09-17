import { Component, Injectable, OnInit } from "@angular/core";
import {
  IAPProduct,
  InAppPurchase2
} from "@ionic-native/in-app-purchase-2/ngx";
import { ModalController } from "@ionic/angular";

import { PremiumModal } from "../premium/premium.modal";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "credits-modal",
  templateUrl: "./credits.modal.html",
  styleUrls: ["./credits.modal.scss"]
})
export class CreditsModal implements OnInit {
  public one_credit: IAPProduct;
  public five_credits: IAPProduct;
  public ten_credits: IAPProduct;

  constructor(
    private modal: ModalController,
    private newModal: ModalController,
    public auth: AuthService,
    private store: InAppPurchase2
  ) {}

  async ngOnInit() {
    this.one_credit = this.store.get("1_credit");
    this.five_credits = this.store.get("5_credits");
    this.ten_credits = this.store.get("10_credits");
    console.log(this.one_credit);
    console.log(this.five_credits);
    console.log(this.ten_credits);

    this.store.register({ type: this.store.CONSUMABLE, id: "1_credit" });
    this.store.register({ type: this.store.CONSUMABLE, id: "5_credits" });
    this.store.register({ type: this.store.CONSUMABLE, id: "10_credits" });
    console.log(this.one_credit);
    console.log(this.five_credits);
    console.log(this.ten_credits);

    this.store.when("1_credit").approved(this.finishPurchase);
    this.store.when("5_credits").approved(this.finishPurchase);
    this.store.when("10_credits").approved(this.finishPurchase);
    console.log(this.one_credit);
    console.log(this.five_credits);
    console.log(this.ten_credits);
  }

  async buyCredits(value: number) {
    let id = "";
    switch (value) {
      case 1:
        id = "1_credit";
        break;
      case 5:
        id = "5_credits";
        break;
      case 10:
        id = "10_credits";
        break;
    }

    this.store.order(id);
  }

  updatePurchase(p: IAPProduct) {
    console.log("actualizado", p);
  }

  finishPurchase(p: IAPProduct) {
    console.log("comprado", p);
    // Añadimos créditos!!
  }

  async showPremium() {
    const modal = await this.newModal.create({
      component: PremiumModal
    });
    this.close();
    return await modal.present();
  }

  close() {
    this.modal.dismiss();
  }
}

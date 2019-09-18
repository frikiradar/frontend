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
    // this.store.verbosity = this.store.DEBUG;

    this.store.register({ type: this.store.CONSUMABLE, id: "1_credit" });
    this.store.register({ type: this.store.CONSUMABLE, id: "5_credits" });
    this.store.register({ type: this.store.CONSUMABLE, id: "10_credits" });

    this.store.when("1_credit").registered((product: IAPProduct) => {
      console.log("Registered: ", product);
    });
    this.store.when("5_credits").registered((product: IAPProduct) => {
      console.log("Registered: ", product);
    });
    this.store.when("10_credits").registered((product: IAPProduct) => {
      console.log("Registered: ", product);
    });

    // Updated
    this.store.when("1_credit").updated((product: IAPProduct) => {
      console.log("Updated: ", product);
    });
    this.store.when("5_credits").updated((product: IAPProduct) => {
      console.log("Updated: ", product);
    });
    this.store.when("10_credits").updated((product: IAPProduct) => {
      console.log("Updated: ", product);
    });

    // User closed the native purchase dialog
    this.store.when("1_credit").cancelled(product => {
      console.error("Purchase was Cancelled");
    });
    this.store.when("5_credits").cancelled(product => {
      console.error("Purchase was Cancelled");
    });
    this.store.when("10_credits").cancelled(product => {
      console.error("Purchase was Cancelled");
    });

    // Track all store errors
    this.store.error(err => {
      console.error("Store Error: ", err);
    });

    // Run some code only when the store is ready to be used
    this.store.ready(() => {
      console.log("Store is ready. Products: ", this.store.products);
      this.one_credit = this.store.get("1_credit");
      this.five_credits = this.store.get("5_credits");
      this.ten_credits = this.store.get("10_credits");
    });

    // Refresh the status of in-app products
    this.store.refresh();

    // Approved
    this.store.when("1_credit").approved((product: IAPProduct) => {
      console.log("Approved: ", product);
      this.finishPurchase(product);
    });
    this.store.when("5_credits").approved((product: IAPProduct) => {
      console.log("Approved: ", product);
      this.finishPurchase(product);
    });
    this.store.when("10_credits").approved((product: IAPProduct) => {
      console.log("Approved: ", product);
      this.finishPurchase(product);
    });
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

import { Injectable } from "@angular/core";
import {
  IAPProduct,
  InAppPurchase2
} from "@ionic-native/in-app-purchase-2/ngx";
import { ModalController, Platform } from "@ionic/angular";

import { PremiumModal } from "./../insert-coin/premium/premium.modal";
import { AuthService } from "./../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  public one_credit: IAPProduct;
  public five_credits: IAPProduct;
  public ten_credits: IAPProduct;

  constructor(
    private modal: ModalController,
    public auth: AuthService,
    private store: InAppPurchase2,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
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
        this.store.when("1_credit").cancelled((product: IAPProduct) => {
          console.error("Purchase was Cancelled: ", product);
        });
        this.store.when("5_credits").cancelled((product: IAPProduct) => {
          console.error("Purchase was Cancelled: ", product);
        });
        this.store.when("10_credits").cancelled((product: IAPProduct) => {
          console.error("Purchase was Cancelled: ", product);
        });

        // Track all store errors
        this.store.error(err => {
          console.error("Store Error: ", err);
        });

        // Run some code only when the store is ready to be used
        this.store.ready(() => {
          console.log("Store is ready. Products: ", this.store.products);
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
    });
  }

  get(id: string) {
    return this.store.get(id);
  }

  async order(p: IAPProduct) {
    this.store.order(p);
  }

  finishPurchase(p: IAPProduct) {
    p.finish();
    console.log("comprado", p);
    // Añadimos créditos!!
  }

  async showPremium() {
    const modal = await this.modal.create({
      component: PremiumModal
    });
    return await modal.present();
  }
}

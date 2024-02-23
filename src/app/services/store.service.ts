import { Injectable } from "@angular/core";
import { isPlatform } from "@ionic/angular";

import { Product } from "../models/product";
import { PaypalService } from "./paypal.service";
import { RevenuecatService } from "./revenuecat.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(
    private paypalSvc: PaypalService,
    private revenuecat: RevenuecatService
  ) {}

  async init() {
    // await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG }); // Enable to get debug logs
    if (isPlatform("capacitor")) {
      await this.revenuecat.init();
    }
  }

  async getProducts(): Promise<Product[]> {
    if (isPlatform("capacitor")) {
      return await this.revenuecat.getProducts();
    } else {
      await this.paypalSvc.init();
      return await this.paypalSvc.listPlans();
    }
  }

  async purchaseProduct(product: Product): Promise<boolean> {
    if (isPlatform("capacitor")) {
      return await this.revenuecat.purchaseProduct(product.product);
    } else {
      return await this.paypalSvc.purchaseProduct(product);
    }
  }

  async cancelSubscription() {
    if (isPlatform("capacitor")) {
      return await this.revenuecat.cancelSubscription();
    } else {
      // Paypal
      return await this.paypalSvc.cancelSubscription();
    }
  }
}

import { Injectable } from "@angular/core";
import { IAPProduct } from "@ionic-native/in-app-purchase-2/ngx";

export interface Product {
  name: string;
  id: string;
  type: "consumable" | "subscription";
  value?: number;
  data?: IAPProduct;
}

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor() {}
  getProducts(): Product[] {
    return [
      { name: "1 mes", id: "1_premium", type: "subscription", value: 30 },
      { name: "3 meses", id: "3_premium", type: "subscription", value: 90 },
      { name: "6 meses", id: "6_premium", type: "subscription", value: 180 },

      {
        name: "1 mes",
        id: "1_premium_subscription",
        type: "subscription",
        value: 30
      },
      {
        name: "3 meses",
        id: "3_premium_subscription",
        type: "subscription",
        value: 90
      },
      {
        name: "6 meses",
        id: "6_premium_subscription",
        type: "subscription",
        value: 180
      }
    ];
  }
}

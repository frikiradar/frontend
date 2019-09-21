import { Injectable } from "@angular/core";
import { IAPProduct } from "@ionic-native/in-app-purchase-2/ngx";

export interface Product {
  name: string;
  id: string;
  type: "consumable" | "non_consumable" | "subscription";
  value?: number;
  data?: IAPProduct;
}

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor() {}
  getProducts(): Product[] {
    return [
      { name: "1 Crédito", id: "1_credit", type: "consumable", value: 1 },
      { name: "5 Créditos", id: "5_credits", type: "consumable", value: 5 },
      { name: "10 Créditos", id: "10_credits", type: "consumable", value: 10 },
      {
        name: "FrikiRadar ILIMITADO",
        id: "frikiradar_premium",
        type: "subscription"
      }
    ];
  }
}

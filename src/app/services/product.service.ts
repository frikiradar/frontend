import { Injectable } from "@angular/core";
import { IAPProduct } from "@ionic-native/in-app-purchase-2/ngx";

export interface Product {
  name: string;
  id: string;
  value: number;
  data?: IAPProduct;
}

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor() {}
  getCreditsProducts(): Product[] {
    return [
      { name: "1 Crédito", id: "1_credit", value: 1 },
      { name: "5 Créditos", id: "5_credits", value: 5 },
      { name: "10 Créditos", id: "10_credits", value: 10 }
    ];
  }

  getSubscriptionProducts() {}
}

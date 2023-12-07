import { PurchasesStoreProduct } from "@revenuecat/purchases-capacitor";

export interface Product {
  product: PurchasesStoreProduct;
  price: string;
  period: { quantity: number; unit: string };
  price_per_month: string;
  discount: number;
  active: boolean;
}

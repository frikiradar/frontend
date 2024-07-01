import { PurchasesStoreProduct } from "@revenuecat/purchases-capacitor/";

export interface Product {
  price: string;
  period: { quantity: number; unit: string };
  price_per_month: string;
  discount: number;
  id?: string;
  name?: string;
  product?: PurchasesStoreProduct;
  active?: boolean;
  currency?: string;
}

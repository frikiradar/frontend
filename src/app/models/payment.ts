import { User } from "./user";

export interface Payment {
  title?: string;
  description?: string;
  method?:
    | "PLAY_STORE"
    | "APP_STORE"
    | "STRIPE"
    | "MAC_APP_STORE"
    | "PROMOTIONAL"
    | "AMAZON"
    | "UNKNOWN_STORE"
    | "PAYPAL";
  payment_date?: string;
  expiration_date?: string;
  amount?: number;
  currency?: string;
  product?: string;
  purchase?: string;
  user?: User;
  status?:
    | "pending"
    | "active"
    | "expired"
    | "canceled"
    | "refunded"
    | "failed";
  paypal_id?: string;
}

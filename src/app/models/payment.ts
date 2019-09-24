import { User } from "./user";

export interface Payment {
  title: string;
  description: string;
  order_id: string;
  token: string;
  signature: string;
  type: string;
  user: Partial<User>;
  payment_date?: Date;
  amount: number;
  currency: string;
}

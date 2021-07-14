import { User } from "./user";

export interface Event {
  id?: number;
  status: "active" | "cancelled";
  creator: User;
  title: string;
  description: string;
  date: string;
  date_end?: string;
  repeat?: string;
  slug?: string;
  minage?: number;
  image?: string;
  url?: string;
  price?: number;
  type: "online" | "offline";
  country?: string;
  city?: string;
  address?: string;
  postal_code?: string;
  contact_phone?: string;
  contact_email?: string;
  participants?: User[];
  participate?: boolean;
  user?: User;

  past?: boolean;
}

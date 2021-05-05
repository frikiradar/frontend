import { Time } from "@angular/common";
import { User } from "./user";

export interface Event {
  id?: number;
  creator: User;
  title: string;
  description: string;
  date: Date;
  time: Time;
  date_end?: Date;
  time_end?: Time;
  repeat?: string;
  slug?: string;
  image?: string;
  url?: string;
  location?: string;
}

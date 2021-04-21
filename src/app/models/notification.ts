import { SafeResourceUrl } from "@angular/platform-browser";
import { User } from "./user";

export interface Notification {
  id?: number;
  title: string;
  text: string;
  fromuser?: number;
  touser: number;
  url: string;
  time_creation?: Date;
  time_read?: Date;
  user?: Partial<User>;
}

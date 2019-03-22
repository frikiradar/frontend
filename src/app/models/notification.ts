import { SafeResourceUrl } from "@angular/platform-browser";

export interface Notification {
  title: string;
  text: string;
  fromuser?: number;
  touser: number;
  url: string;
  time_creation?: Date;
  user?: {
    id: number;
    username: string;
    avatar: SafeResourceUrl;
  };
}

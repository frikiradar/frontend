import { SafeResourceUrl } from "@angular/platform-browser";

export interface Chat {
  touser: number;
  text: string;
  fromuser?: number;
  time_creation?: Date;
  user?: {
    id: number;
    username: string;
    avatar: SafeResourceUrl;
  };
}

import { User } from "./user";

export interface Ad {
  id: number;
  image_url: string;
  url: string;
  title?: string;
  description?: string;
  creation_date?: Date;
  start_date?: Date;
  end_date?: Date;
  user: User;
  clicks: ClickAd[];
  views: ViewAd[];
}

export interface ClickAd {
  id: number;
  ad: Ad;
  user: User;
  date: Date;
}

export interface ViewAd {
  id: number;
  ad: Ad;
  user: User;
  date: Date;
}

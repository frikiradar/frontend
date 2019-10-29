import { SafeResourceUrl } from "@angular/platform-browser";

import { Device } from "./device";
import { Tag } from "./tags";

export interface User {
  id: number;
  username: string;
  email: string;
  description: string;
  birthday: string;
  gender: string;
  orientation: string;
  pronoun: string;
  relationship: string;
  status: string;
  age: number;

  lovegender: string[];
  minage: number;
  maxage: number;
  connection: string[];

  latitude: number;
  longitude: number;
  location: string;
  country: string;
  distance: number;

  password?: string;
  token?: string;
  devices: Device[];

  tags: Tag[];

  match: number;
  radar: boolean;
  like: boolean;
  from_like: boolean;
  block: boolean;
  chat: boolean;

  avatar: SafeResourceUrl;
  images: SafeResourceUrl[];
  roles: string[];
  active: boolean;
  credits?: number;
  is_premium: boolean;
  premium_expiration?: Date;
  verified: boolean;
  meet?: string;
  referral?: string;

  /*configuration*/
  hide_location?: boolean;
  block_messages?: boolean;
  two_step?: boolean;
  hide_connection?: boolean;
  mailing?: boolean;

  num_logins: number;
  last_login?: Date;
}

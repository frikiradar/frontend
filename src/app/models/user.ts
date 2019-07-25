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

  avatar: SafeResourceUrl;
  images: SafeResourceUrl[];
  roles: string[];
  active: boolean;

  /*configuration*/
  hide_location?: boolean;
  block_messages?: boolean;
  two_step?: boolean;
  hide_connection?: boolean;

  num_logins: number;
  last_login?: Date;
}

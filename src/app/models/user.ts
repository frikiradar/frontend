import { SafeResourceUrl } from "@angular/platform-browser";
import { Tag } from "./tags";

export interface User {
  id: number;
  username: string;
  email: string;
  description: string;
  birthday: Date;
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

  tags: Tag[];

  match: number;

  avatar: SafeResourceUrl;
}

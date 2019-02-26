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

  lovegender: string[];
  minage: number;
  maxage: number;
  connection: string[];

  latitude: number;
  longitude: number;

  password?: string;
  token?: string;

  tags: Tag[];

  avatar: string;
}

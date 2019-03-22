import { User } from "./user";

export interface Device {
  user: User;
  id: string;
  name: string;
  token: string;
}

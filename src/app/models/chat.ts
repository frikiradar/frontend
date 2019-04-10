import { User } from "./user";

export interface Chat {
  touser: number;
  text: string;
  fromuser?: number;
  time_creation?: Date;
  user?: User;
}

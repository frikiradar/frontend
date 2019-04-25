import { User } from "./user";

export interface Like {
  date?: Date;
  user: User;
  fromuser: number;
  time_read: Date;
}

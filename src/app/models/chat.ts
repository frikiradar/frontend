import { User } from "./user";

export interface Chat {
  touser: Partial<User>;
  text: string;
  fromuser?: Partial<User>;
  time_creation?: Date;
  time_read?: Date;
  id?: number;
  sending?: boolean;
  count?: number;
}

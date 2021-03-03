import { User } from "./user";

export interface Chat {
  touser: Partial<User>;
  text?: string;
  image?: string;
  audio?: string;
  fromuser?: Partial<User>;
  user?: Partial<User>;
  time_creation?: Date;
  time_read?: Date;
  id?: number;
  sending?: boolean;
  count?: number;
  replyto?: Partial<Chat>;
  edited?: boolean;
}

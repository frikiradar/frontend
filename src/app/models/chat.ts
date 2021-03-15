import { Room } from "./room";
import { User } from "./user";

export interface Chat {
  touser?: Partial<User>;
  slug?: Room["slug"];
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
  deleted?: boolean;
  writing?: boolean;
}

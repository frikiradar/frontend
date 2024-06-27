import { Event } from "./event";
import { User } from "./user";

export interface Chat {
  touser?: Partial<User>;
  text?: string;
  image?: string;
  audio?: string;
  fromuser?: Partial<User>;
  user?: Partial<User>;
  time_creation?: Date;
  time_read?: Date;
  id?: number;
  tmp_id?: string;
  sending?: boolean;
  count?: number;
  reply_to?: Partial<Chat>;
  edited?: boolean;
  deleted?: boolean;
  writing?: boolean;
  mentions?: string[];
  conversationId?: string;
  modded?: boolean;
  archived?: boolean;
  unread?: boolean;
  pinned?: boolean;
  event?: Event;
  status?: "online" | "offline";
}

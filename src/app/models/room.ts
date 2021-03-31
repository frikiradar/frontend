import { User } from "./user";

export interface Room {
  id: number;
  name: string;
  slug: string;
  description?: string;
  permissions: string[];
  visible: boolean;
  image?: string;
  creator?: Partial<User>;
  last_message?: number;
  unread: number | boolean;
}

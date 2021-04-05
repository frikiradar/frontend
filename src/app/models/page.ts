import { Room } from "./room";

export interface Page {
  id?: number;
  name: string;
  description?: string;
  time_creation: Date;
  last_update?: Date;
  cover?: string;
  artwork?: string;
  rating?: number;
  game_mode?: "offline" | "online";
  slug: string;
  category: string;
  room?: Room;
}

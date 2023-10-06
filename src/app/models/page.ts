export interface Page {
  id?: number;
  name: string;
  description?: string;
  time_creation: Date;
  last_update?: Date;
  cover?: string;
  artwork?: string;
  rating?: number;
  release_date?: Date;
  developer?: string;
  game_mode?: "offline" | "online";
  slug: string;
  category: string;
}

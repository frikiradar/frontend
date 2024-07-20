import { SafeResourceUrl } from "@angular/platform-browser";
import { User } from "./user";

export interface Story {
  id?: number;
  text?: string;
  image?: string;
  user?: User;
  time_creation?: Date;
  like?: boolean;
  likeStories?: {
    date: string;
    user: User;
  }[];
  viewed?: boolean;
  viewStories?: {
    date: string;
    user: User;
  }[];
  comments?: {
    id: number;
    text?: string;
    user?: User;
    like?: boolean;
    likes?: User[];
    time_creation?: Date;
  }[];
  slug?: string;
  color?: string;
  type?: "story" | "post";
  youtube?: SafeResourceUrl;
}

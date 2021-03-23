import { User } from "./user";

export interface Story {
  id?: number;
  text?: string;
  image?: string;
  user?: Partial<User>;
  time_creation?: Date;
  like?: boolean;
  likeStories?: {
    date: string;
    user: Partial<User>;
  }[];
  viewed?: boolean;
  viewStories?: {
    date: string;
    user: Partial<User>;
  }[];
  comments?: {
    id: number;
    text?: string;
    user?: Partial<User>;
    like?: boolean;
    likes?: Partial<User>[];
    time_creation?: Date;
  }[];
}

import { Injectable } from "@angular/core";

import { Like } from "../models/like";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class LikeService {
  constructor(private rest: RestService) {}

  async getLikes() {
    const likes = (await this.rest.get(`likes`).toPromise()) as Like[];
    likes.map(
      like =>
        (like.user.avatar = like.user.avatar
          ? like.user.avatar
          : "../../assets/img/users/default.jpg")
    );

    return likes;
  }
}

import { Injectable } from "@angular/core";

import { Like } from "../models/like";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class LikeService {
  constructor(private rest: RestService) {}

  async getLikes(param: "received" | "delivered") {
    const likes = (await this.rest
      .get(`likes?param=${param}`)
      .toPromise()) as Like[];

    return likes;
  }

  async readLike(id: number) {
    return (await this.rest.get(`read-like/${id}`).toPromise()) as Like;
  }
}

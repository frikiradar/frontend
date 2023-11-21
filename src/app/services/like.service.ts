import { Injectable } from "@angular/core";

import { Like } from "../models/like";
import { User } from "../models/user";
import { RestService } from "./rest.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LikeService {
  constructor(private rest: RestService) {}

  async getLikes(param: "received" | "delivered", page = 1, user?: User["id"]) {
    const likes = (await firstValueFrom(
      this.rest.get(`likes?param=${param}&page=${page}&user=${user}`)
    )) as Like[];
    return likes;
  }

  async readLike(id: number) {
    return (await firstValueFrom(this.rest.get(`read-like/${id}`))) as Like;
  }
}

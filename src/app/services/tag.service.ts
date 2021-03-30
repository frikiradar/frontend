import { Injectable } from "@angular/core";

import { Tag } from "../models/tags";
import { RestService } from "./rest.service";

@Injectable({ providedIn: "root" })
export class TagService {
  constructor(private rest: RestService) {}

  async searchTag(tag: string, category: string) {
    try {
      return await this.rest.post("tags", { tag, category }).toPromise();
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async addTag(name: string, category: string) {
    return (await this.rest
      .put("add-tag", { name, category })
      .toPromise()) as Tag;
  }

  async removeTag(id: number) {
    return await this.rest.delete(`tag/${id}`).toPromise();
  }
}

import { Injectable } from "@angular/core";

import { Tag } from "../models/tags";
import { RestService } from "./rest.service";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: "root" })
export class TagService {
  constructor(private rest: RestService) {}

  async searchTag(tag: string, category: string) {
    try {
      return await firstValueFrom(this.rest.post("tags", { tag, category }));
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async addTag(name: string, category: string, slug?: string) {
    return (await firstValueFrom(
      this.rest.put("add-tag", { name, category, slug })
    )) as Tag;
  }

  async removeTag(id: number) {
    return await firstValueFrom(this.rest.delete(`tag/${id}`));
  }
}

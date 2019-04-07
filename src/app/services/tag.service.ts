import { Injectable } from "@angular/core";

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
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class TagService {
  constructor(private http: HttpClient, private rest: RestService) {}

  async searchTag(tag: string, category: string) {
    try {
      return await this.rest.post("tags", { tag, category }).toPromise();
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }
}

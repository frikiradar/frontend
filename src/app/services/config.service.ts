import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private root = environment.root;

  constructor(public http: HttpClient) {}

  async getConfig() {
    return await this.http.get(`${this.root}api/config`).toPromise();
  }
}

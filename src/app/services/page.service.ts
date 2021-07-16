import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Page } from "../models/page";
import { Tag } from "../models/tags";

import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PageService {
  constructor(private rest: RestService, private http: HttpClient) {}

  async getPages() {
    return (await this.rest.get(`pages`).toPromise()) as Page[];
  }

  async getPage(slug: Page["slug"]) {
    return (await this.rest.get(`page/${slug}`).toPromise()) as Page;
  }

  async setPage(id: Tag["id"]) {
    return (await this.rest.post("page", { id }).toPromise()) as Page;
  }

  async getPublicPage(slug: Page["slug"]) {
    try {
      return (await this.http
        .get(`${environment.root}api/page/${slug}`, httpOptions)
        .toPromise()) as Page;
    } catch (e) {
      throw new Error("No se puede obtener la página");
    }
  }
}

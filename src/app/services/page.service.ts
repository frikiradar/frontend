import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { environment } from "src/environments/environment";
import { Page } from "../models/page";
import { Tag } from "../models/tags";
import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class PageService {
  constructor(private rest: RestService, private http: HttpClient) {}

  async getPages(limit?: number) {
    let endpoint = "";
    if (limit) {
      endpoint = `pages?limit=${limit}`;
    } else {
      endpoint = `pages`;
    }
    return (await firstValueFrom(this.rest.get(endpoint))) as Page[];
  }

  async getPage(slug: Page["slug"]) {
    return (await firstValueFrom(this.rest.get(`page/${slug}`))) as Page;
  }

  async setPage(id: Tag["id"]) {
    return (await firstValueFrom(this.rest.post("page", { id }))) as Page;
  }

  async getPublicPage(slug: Page["slug"]) {
    try {
      return (await firstValueFrom(
        this.http.get(`${environment.root}api/page/${slug}`, httpOptions)
      )) as Page;
    } catch (e) {
      throw new Error("No se puede obtener la página");
    }
  }
}

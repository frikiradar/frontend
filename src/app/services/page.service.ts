import { Injectable } from "@angular/core";
import { Page } from "../models/page";
import { Tag } from "../models/tags";

import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class PageService {
  constructor(private rest: RestService) {}

  async getPages() {
    return (await this.rest.get(`pages`).toPromise()) as Page[];
  }

  async getPage(slug: Page["slug"]) {
    return (await this.rest.get(`page/${slug}`).toPromise()) as Page;
  }

  async setPage(id: Tag["id"]) {
    return (await this.rest.post("page", { id }).toPromise()) as Page;
  }
}

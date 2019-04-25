import { Injectable } from "@angular/core";

import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private rest: RestService) {}

  async getUnread() {
    return this.rest.get(`notifications`).toPromise();
  }
}

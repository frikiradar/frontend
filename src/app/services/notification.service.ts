import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { Notification } from "./../models/notification";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private rest: RestService) {}

  register(channel: string) {
    return new EventSource(`${environment.pushUrl}?topic=${channel}`);
  }

  async getNotifications() {
    const notifications = (await this.rest
      .get(`notifications`)
      .toPromise()) as Notification[];
    notifications.map(
      notification =>
        (notification.user.avatar = notification.user.avatar
          ? notification.user.avatar
          : "../../assets/img/users/default.jpg")
    );

    return notifications;
  }
}

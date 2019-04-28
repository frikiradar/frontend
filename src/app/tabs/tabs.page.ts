import { Component } from "@angular/core";

import {
  Notification,
  NotificationService
} from "../services/notification.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  public counters: Notification;

  constructor(private notificationSvc: NotificationService) {}

  async ionViewWillEnter() {
    this.counters = (await this.notificationSvc.getUnread()) as Notification;
    this.notificationSvc.setNotification(this.counters);

    this.notificationSvc.notification.subscribe(notification => this.counters);
  }
}

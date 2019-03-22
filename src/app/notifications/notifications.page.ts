import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Notification } from "./../models/notification";
import { NotificationService } from "./../services/notification.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"]
})
export class NotificationsPage {
  notifications: Notification[];
  showSkeleton = true;

  constructor(
    private router: Router,
    private notificationSvc: NotificationService
  ) {}

  async ionViewWillEnter() {
    this.getNotifications();
  }

  async getNotifications() {
    this.notifications = await this.notificationSvc.getNotifications();
    this.showSkeleton = false;
  }

  async goToUrl(url: string) {
    this.router.navigate([url]);
  }
}

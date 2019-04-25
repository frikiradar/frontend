import { Component } from "@angular/core";

import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  public counters: { radar: number; chats: number; likes: number };

  constructor(private notificationSvc: NotificationService) {}

  async ionViewWillEnter() {
    this.counters = (await this.notificationSvc.getUnread()) as {
      radar: number;
      chats: number;
      likes: number;
    };
  }
}

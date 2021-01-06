import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

import {
  Notification,
  NotificationService
} from "../services/notification.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  public counters: Notification;

  constructor(
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private platform: Platform,
  ) {}

  async ngOnInit() {
    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
      this.detectorRef.detectChanges();
    });
  }

  async ionViewWillEnter() {
    this.counters = (await this.notificationSvc.getUnread()) as Notification;
    this.notificationSvc.setNotification(this.counters);
  }
}

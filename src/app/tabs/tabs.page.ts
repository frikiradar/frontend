import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

import {
  NotificationCounters,
  NotificationService
} from "../services/notification.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  public counters: NotificationCounters;

  constructor(
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
      this.detectorRef.detectChanges();
    });
  }

  async ionViewWillEnter() {
    this.counters = (await this.notificationSvc.getUnread()) as NotificationCounters;
    this.notificationSvc.setNotification(this.counters);
  }
}

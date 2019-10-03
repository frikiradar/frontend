import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

import { AdmobService } from "../services/admob.service";
import {
  Notification,
  NotificationService
} from "../services/notification.service";
import { PushService } from "../services/push.service";

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
    private push: PushService,
    private admob: AdmobService
  ) {}

  async ngOnInit() {
    if (this.platform.is("cordova")) {
      this.push.init();
      this.admob.init();
    }

    this.counters = (await this.notificationSvc.getUnread()) as Notification;
    this.notificationSvc.setNotification(this.counters);

    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
      this.detectorRef.detectChanges();
    });
  }
}

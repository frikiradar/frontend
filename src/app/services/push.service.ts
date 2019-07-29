import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FCM, NotificationData } from "@ionic-native/fcm/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Platform } from "@ionic/angular";

import { DeviceService } from "./device.service";
import { Notification, NotificationService } from "./notification.service";

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];

  constructor(
    private device: DeviceService,
    private fcm: FCM,
    private router: Router,
    private notificationSvc: NotificationService,
    private localNotifications: LocalNotifications,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.localNotifications.on("click").subscribe(notification => {
          console.log("click", notification);
          const data = JSON.parse(notification.data);
          console.log(data);
          this.router.navigate([data.url]);
        });

        this.localNotifications.on("trigger").subscribe(notification => {
          console.log("trigger", notification);
          const data = JSON.parse(notification.data);
          console.log(data);
        });
      }
    });
  }

  async init() {
    // this.fcm.subscribeToTopic('marketing');
    // this.fcm.unsubscribeFromTopic('marketing');

    this.fcm.getToken().then(token => {
      this.device.setDevice(token);
    });

    this.fcm.onNotification().subscribe(
      (data: NotificationData) => {
        // console.log(data);
        if (data.wasTapped) {
          this.router.navigate([data.url]);
        } else {
          if (this.router.url !== data.url) {
            this.localNotifications.schedule({
              title: data.title,
              text: data.body,
              sound: "file://assets/sounds/bipbip.mp3",
              smallIcon: "res://notification_icon",
              icon: data.icon,
              foreground: true
            });
          }

          this.notificationSvc
            .getUnread()
            .then((notification: Notification) => {
              this.notificationSvc.setNotification(notification);
            });
          // console.log("Received in foreground");
        }
      },
      error => {
        console.error("Error in notification", error);
      }
    );
  }
}

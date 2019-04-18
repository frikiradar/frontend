import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FCM, NotificationData } from "@ionic-native/fcm/ngx";

import { DeviceService } from "./device.service";

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];

  constructor(
    private device: DeviceService,
    private fcm: FCM,
    private router: Router
  ) {}

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
          // console.log("Received in foreground");
          // Añadir indicadores de mensaje nuevo y to la pesca
        }
      },
      error => {
        console.error("Error in notification", error);
      }
    );

    this.fcm.onTokenRefresh().subscribe(token => {
      this.device.setDevice(token);
    });
  }
}

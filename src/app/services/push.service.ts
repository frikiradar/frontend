import { Injectable } from "@angular/core";
import {
  DeviceInfo,
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken
} from "@capacitor/core";

import { DeviceService } from "./device.service";

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];
  deviceInfo: DeviceInfo;

  constructor(private device: DeviceService) {}

  async init() {
    PushNotifications.register();

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        // console.log("token", token.value);
        this.device.setDevice(token.value);
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      // console.log("error on register", error);
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert("notification " + JSON.stringify(notification));
        console.log("notification", notification);
        this.notifications.push(notification);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        console.log("notification performed", notification);
        this.notifications.push(notification);
      }
    );
  }
}

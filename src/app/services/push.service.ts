import { Injectable } from "@angular/core";
import {
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken
} from "@capacitor/core";

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];

  constructor() {}

  init() {
    PushNotifications.register();
    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        console.log("token " + token.value);
      }
    );
    PushNotifications.addListener("registrationError", (error: any) => {
      console.log("error on register " + JSON.stringify(error));
    });
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        console.log("notification " + JSON.stringify(notification));
        this.notifications.push(notification);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        console.log("notification " + JSON.stringify(notification));
        this.notifications.push(notification);
      }
    );
  }
}

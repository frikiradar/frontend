import { Injectable } from "@angular/core";
import {
  DeviceInfo,
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken
} from "@capacitor/core";

import { Device } from "./../models/device";
import { RestService } from "./rest.service";

const { PushNotifications, Device } = Plugins;

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];
  deviceInfo: DeviceInfo;

  constructor(private rest: RestService) {}

  async init() {
    const device = await this.getCurrentDevice();

    PushNotifications.register();

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        // console.log("token", token.value);
        if (!device) {
          this.setDevice(token.value);
        }
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      // console.log("error on register", error);
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert("notification " + JSON.stringify(notification));
        // console.log("notification", notification);
        this.notifications.push(notification);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        // console.log ("notification performed", notification);
        this.notifications.push(notification);
      }
    );
  }

  async getDevices(): Promise<Device[]> {
    const devices = (await this.rest.get("devices")) as Device[];
    // console.log("devices", devices);
    return devices;
  }

  async setDevice(token: string) {
    const name = `${this.deviceInfo.manufacturer} ${
      this.deviceInfo.model
    } (${this.deviceInfo.platform.charAt(0).toUpperCase() +
      this.deviceInfo.platform.slice(1)} ${this.deviceInfo.osVersion})`;

    const device = (await this.rest
      .put("device", {
        token,
        id: this.deviceInfo.uuid,
        name
      })
      .toPromise()) as Device;
  }

  async getCurrentDevice() {
    const devices = await this.getDevices();
    this.deviceInfo = await Device.getInfo();
    const device =
      devices.length &&
      devices.filter((d: Device) => {
        return (d.id = this.deviceInfo.uuid);
      })[0];

    return device ? device : false;
  }
}

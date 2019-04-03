import { Injectable } from "@angular/core";
import { DeviceInfo, Plugins } from "@capacitor/core";

import { User } from "../models/user";
import { Device } from "./../models/device";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";

const { Device } = Plugins;

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  deviceInfo: DeviceInfo;

  constructor(private rest: RestService, private auth: AuthService) {}

  async getDevices(): Promise<Device[]> {
    const devices = this.auth.currentUserValue.devices;
    // console.log("devices", devices);
    return devices;
  }

  async setDevice(token?: string) {
    this.deviceInfo = await Device.getInfo();
    const name = `${this.deviceInfo.manufacturer} ${
      this.deviceInfo.model
    } (${this.deviceInfo.platform.charAt(0).toUpperCase() +
      this.deviceInfo.platform.slice(1)} ${this.deviceInfo.osVersion})`;

    const device = (await this.rest
      .put("device", {
        id: this.deviceInfo.uuid,
        name,
        token
      })
      .toPromise()) as Device;
    localStorage.setItem("currentDevice", JSON.stringify(device));
  }

  async getCurrentDevice() {
    const devices = await this.getDevices();
    this.deviceInfo = await Device.getInfo();
    const device =
      devices.length &&
      devices.filter((d: Device) => {
        return d.device_id === this.deviceInfo.uuid;
      })[0];

    return device ? device : false;
  }

  unknownDevice() {
    return this.rest.get("unknown-device");
  }

  verifyDevice(verification_code: string) {
    return this.rest
      .put("unknown-device", { verification_code })
      .toPromise() as Promise<User>;
  }
}

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

  async getDevices(forceApi = false): Promise<Device[]> {
    if (
      this.auth.currentUserValue.devices &&
      this.auth.currentUserValue.devices.length &&
      !forceApi
    ) {
      return this.auth.currentUserValue.devices;
    } else {
      return (await this.rest.get(`devices`).toPromise()) as Device[];
    }
  }

  async setDevice(token?: string) {
    this.deviceInfo = await Device.getInfo();

    if (
      !this.auth.currentUserValue.devices.some(
        d => d.device_id === this.deviceInfo.uuid
      ) ||
      token
    ) {
      const name = `${this.deviceInfo.manufacturer} ${
        this.deviceInfo.model
      } (${this.deviceInfo.platform.charAt(0).toUpperCase() +
        this.deviceInfo.platform.slice(1)} ${this.deviceInfo.osVersion})`;

      const user = (await this.rest
        .put("device", {
          id: this.deviceInfo.uuid,
          name,
          token
        })
        .toPromise()) as User;

      this.auth.setAuthUser(user);
    }
  }

  async getCurrentDevice(): Promise<Device> {
    this.deviceInfo = await Device.getInfo();
    const device: Device = {
      device_id: this.deviceInfo.uuid,
      device_name: `${this.deviceInfo.manufacturer} ${
        this.deviceInfo.model
      } (${this.deviceInfo.platform.charAt(0).toUpperCase() +
        this.deviceInfo.platform.slice(1)} ${this.deviceInfo.osVersion})`
    };

    const devices = await this.getDevices();
    if (devices.some(d => d.device_id === device.device_id)) {
      return devices.find(d => d.device_id === device.device_id);
    } else {
      return device;
    }
  }

  unknownDevice() {
    return this.rest.get("unknown-device");
  }

  verifyDevice(verification_code: string, device: Device) {
    return this.rest
      .put("unknown-device", { verification_code, device })
      .toPromise() as Promise<User>;
  }

  removeDevice(device: Device) {
    return this.rest.delete(`device/${device.id}`).toPromise() as Promise<User>;
  }

  switchDevice(device: Device) {
    return this.rest.get(`switch-device/${device.id}`).toPromise() as Promise<
      User
    >;
  }
}

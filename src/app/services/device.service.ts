import { Injectable } from "@angular/core";
import { Device as deviceInfo } from "@ionic-native/device/ngx";

import { User } from "../models/user";
import { Device } from "./../models/device";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  constructor(
    private rest: RestService,
    private auth: AuthService,
    private device: deviceInfo
  ) {}

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
    if (this.device.uuid !== null) {
      const name = `${this.device.manufacturer} ${
        this.device.model
      } (${this.device.platform.charAt(0).toUpperCase() +
        this.device.platform.slice(1)} ${this.device.version})`;

      const user = (await this.rest
        .put("device", {
          id: this.device.uuid,
          name,
          token
        })
        .toPromise()) as User;

      if (!token) {
        this.auth.setAuthUser(user);
      }
    }
  }

  async getCurrentDevice(): Promise<Device> {
    if (this.device.uuid !== null) {
      const device: Device = {
        device_id: this.device.uuid,
        device_name: `${this.device.manufacturer} ${
          this.device.model
        } (${this.device.platform.charAt(0).toUpperCase() +
          this.device.platform.slice(1)} ${this.device.version})`
      };
      const devices = await this.getDevices();
      if (devices.some(d => d.device_id === device.device_id)) {
        return devices.find(d => d.device_id === device.device_id);
      } else {
        return device;
      }
    }
  }

  unknownDevice(device: Device) {
    return this.rest.put("unknown-device", { device });
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

import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

import { User } from "../models/user";
import { Device } from "./../models/device";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";

const { Device } = Plugins;

@Injectable({
  providedIn: "root"
})
export class DeviceService {
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
    const deviceInfo = await Device.getInfo();

    if (deviceInfo.uuid !== null) {
      const name = `${deviceInfo.manufacturer} ${
        deviceInfo.model
      } (${deviceInfo.platform.charAt(0).toUpperCase() +
        deviceInfo.platform.slice(1)} ${deviceInfo.osVersion})`;

      const user = (await this.rest
        .put("device", {
          id: deviceInfo.uuid,
          name,
          token
        })
        .toPromise()) as User;

      this.auth.setAuthUser(user);
    }
  }

  async getCurrentDevice(): Promise<Device> {
    const deviceInfo = await Device.getInfo();
    const device: Device = {
      device_id: deviceInfo.uuid,
      device_name: `${deviceInfo.manufacturer} ${
        deviceInfo.model
      } (${deviceInfo.platform.charAt(0).toUpperCase() +
        deviceInfo.platform.slice(1)} ${deviceInfo.osVersion})`
    };
    const devices = await this.getDevices();
    if (devices.some(d => d.device_id === device.device_id)) {
      return devices.find(d => d.device_id === device.device_id);
    } else {
      return device;
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

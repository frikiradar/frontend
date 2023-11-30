import { Injectable } from "@angular/core";
import { Device as DevicePlugin } from "@capacitor/device";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import { User } from "../models/user";
import { Device } from "./../models/device";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { isPlatform } from "@ionic/angular";
import platform from "platform";

@Injectable({
  providedIn: "root",
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
      return (await this.rest.get(`devices`)) as Device[];
    }
  }

  async setDevice(token?: string) {
    if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
      const device = await this.getCurrentDevice(token);
      // console.log("device", device);
      let uuid: string = null;
      if (isPlatform("capacitor")) {
        uuid = (await DevicePlugin.getId()).identifier;
      } else {
        const fp = await FingerprintJS.load();
        const fingerprint = await fp.get();
        uuid = fingerprint.visitorId;
      }
      if (uuid !== null) {
        const devices = await this.getDevices();
        if (
          devices.length &&
          !devices.some(
            (d) => d.device_id === device.device_id || d.token === device.token
          )
        ) {
          console.log("dispositivo desconocido", devices, device);
          // dispositivo desconocido, enviar email avisando
          this.unknownDevice(device);
        }

        let platform = "" as Device["platform"];
        if (isPlatform("capacitor")) {
          if (isPlatform("android")) {
            platform = "android";
          } else if (isPlatform("ios")) {
            platform = "ios";
          }
        } else {
          platform = "web";
        }

        const user = (await this.rest.put("device", {
          id: uuid,
          name: device.device_name,
          token,
          platform,
        })) as User;

        // this.auth.setAuthUser(user);
      }
    }
  }

  async getCurrentDevice(token?: string): Promise<Device> {
    let uuid: string = null;
    let device: Device;
    if (isPlatform("capacitor")) {
      uuid = (await DevicePlugin.getId()).identifier;
      const info = await DevicePlugin.getInfo();
      device = {
        device_id: uuid,
        device_name: `${info.manufacturer} ${info.model} (${
          info?.platform?.charAt(0).toUpperCase() + info?.platform?.slice(1)
        } ${info?.osVersion})`,
        token,
      };
    } else {
      const fp = await FingerprintJS.load();
      const fingerprint = await fp.get();
      device = {
        device_id: fingerprint.visitorId,
        device_name: platform.description,
        token,
      };
    }

    const devices = await this.getDevices();
    if (
      devices.some(
        (d) =>
          d.device_id === device.device_id ||
          d.token === device.token ||
          d.device_name === device.device_name
      )
    ) {
      return devices.find(
        (d) =>
          d.device_id === device.device_id ||
          d.token === device.token ||
          d.device_name === device.device_name
      );
    } else {
      return device;
    }
  }

  unknownDevice(device: Device) {
    return this.rest.put("unknown-device", { device });
  }

  async removeDevice(device: Device) {
    return (await this.rest.delete(`device/${device.id}`)) as User;
  }

  async switchDevice(device: Device) {
    return (await this.rest.get(`switch-device/${device.id}`)) as User;
  }
}

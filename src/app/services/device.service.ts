import { Injectable } from "@angular/core";
import { Device as DevicePlugin } from "@capacitor/device";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import * as platform from "platform";
import { Platform } from "@ionic/angular";

import { User } from "../models/user";
import { Device } from "./../models/device";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  constructor(
    private rest: RestService,
    private auth: AuthService,
    private platform: Platform
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
    if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
      const device = await this.getCurrentDevice(token);
      // console.log("device", device);
      let uuid: string = null;
      if (this.platform.is("capacitor")) {
        uuid = (await DevicePlugin.getId()).uuid;
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
        if (this.platform.is("capacitor")) {
          if (this.platform.is("android")) {
            platform = "android";
          } else if (this.platform.is("ios")) {
            platform = "ios";
          }
        } else {
          platform = "web";
        }

        const user = (await firstValueFrom(
          this.rest.put("device", {
            id: uuid,
            name: device.device_name,
            token,
            platform,
          })
        )) as User;

        // this.auth.setAuthUser(user);
      }
    }
  }

  async getCurrentDevice(token?: string): Promise<Device> {
    let uuid: string = null;
    let device: Device;
    if (this.platform.is("capacitor")) {
      uuid = (await DevicePlugin.getId()).uuid;
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
    return (await firstValueFrom(
      this.rest.delete(`device/${device.id}`)
    )) as Promise<User>;
  }

  async switchDevice(device: Device) {
    return (await firstValueFrom(
      this.rest.get(`switch-device/${device.id}`)
    )) as User;
  }
}

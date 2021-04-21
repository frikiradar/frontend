import { Injectable } from "@angular/core";
import { Device as deviceInfo } from "@ionic-native/device/ngx";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import * as platform from "platform";
import { Platform } from "@ionic/angular";

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
    private device: deviceInfo,
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
      let uuid = null;
      if (this.platform.is("cordova")) {
        uuid = this.device.uuid;
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
            d => d.device_id === device.device_id || d.token === device.token
          )
        ) {
          // log("devices", devices);
          console.log("dispositivo desconocido", devices, device);
          // dispositivo desconocido, enviar email avisando
          await this.unknownDevice(device).toPromise();
        }

        const user = (await this.rest
          .put("device", {
            id: uuid,
            name: device.device_name,
            token
          })
          .toPromise()) as User;

        // this.auth.setAuthUser(user);
      }
    }
  }

  async getCurrentDevice(token?: string): Promise<Device> {
    let uuid = null;
    let device: Device;
    if (this.platform.is("cordova")) {
      uuid = this.device.uuid;
      device = {
        device_id: uuid,
        device_name: `${this.device.manufacturer} ${
          this.device.model
        } (${this.device?.platform?.charAt(0).toUpperCase() +
          this.device?.platform?.slice(1)} ${this.device?.version})`,
        token
      };
    } else {
      const fp = await FingerprintJS.load();
      const fingerprint = await fp.get();
      device = {
        device_id: fingerprint.visitorId,
        device_name: platform.description,
        token
      };
    }

    const devices = await this.getDevices();
    if (
      devices.some(
        d =>
          d.device_id === device.device_id ||
          d.token === device.token ||
          d.device_name === device.device_name
      )
    ) {
      return devices.find(
        d =>
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

  removeDevice(device: Device) {
    return this.rest.delete(`device/${device.id}`).toPromise() as Promise<User>;
  }

  switchDevice(device: Device) {
    return this.rest.get(`switch-device/${device.id}`).toPromise() as Promise<
      User
    >;
  }
}

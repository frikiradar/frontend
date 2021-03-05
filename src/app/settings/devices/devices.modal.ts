import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { Device } from "./../../models/device";
import { AuthService } from "./../../services/auth.service";
import { DeviceService } from "./../../services/device.service";

@Component({
  selector: "devices-modal",
  templateUrl: "./devices.modal.html",
  styleUrls: ["./devices.modal.scss"]
})
export class DevicesSettingsModal implements OnInit {
  public devices: Device[];
  public user: User;

  constructor(
    private modal: ModalController,
    private alert: AlertController,
    private devicesSvc: DeviceService,
    private auth: AuthService,
    private toast: ToastController,
    private userSvc: UserService
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
    this.devices = await this.devicesSvc.getDevices(true);
    const currentDevice = await this.devicesSvc.getCurrentDevice();

    if (currentDevice) {
      this.devices.map(device => {
        device.current =
          device.device_id === currentDevice.device_id ||
          device.token === currentDevice.token;
      });
    }
  }

  async removeDevice(device: Device) {
    if (!device.current) {
      this.devices = this.devices.filter(d => d.id !== device.id);

      const user = await this.devicesSvc.removeDevice(device);
      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: "¡Dispositivo eliminado!",
          duration: 2000,
          position: "bottom"
        })
      ).present();
    } else {
      (
        await this.alert.create({
          message: "¡No puedes eliminar tu dispositivo actual!",
          buttons: ["Entendido"]
        })
      ).present();
    }
  }

  async switchNotifications(device: Device) {
    this.devices.map(d => {
      if (device.id === d.id) {
        d.active = !device.active;
      }
    });

    const user = await this.devicesSvc.switchDevice(device);
    this.auth.setAuthUser(user);

    if (!device.active) {
      (
        await this.toast.create({
          message: "¡Notificaciones silenciadas!",
          duration: 2000,
          position: "bottom"
        })
      ).present();
    } else {
      (
        await this.toast.create({
          message: "¡Notificaciones activadas!",
          duration: 2000,
          position: "bottom"
        })
      ).present();
    }
  }

  async switchMailing() {
    this.user.mailing = !this.user.mailing;
    this.user = await this.userSvc.updateUser(this.user);
  }

  close() {
    this.modal.dismiss();
  }
}

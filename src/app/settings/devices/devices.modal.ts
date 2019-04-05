import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { ModalController } from "@ionic/angular";

import { Device } from "./../../models/device";
import { AuthService } from "./../../services/auth.service";
import { DeviceService } from "./../../services/device.service";

const { Toast } = Plugins;

@Component({
  selector: "devices-modal",
  templateUrl: "./devices.modal.html",
  styleUrls: ["./devices.modal.scss"]
})
export class DevicesSettingsModal implements OnInit {
  public devices: Device[];

  constructor(
    private modal: ModalController,
    private devicesSvc: DeviceService,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    this.devices = await this.devicesSvc.getDevices(true);
    const currentDevice = await this.devicesSvc.getCurrentDevice();

    if (currentDevice) {
      this.devices.map(device => {
        device.current = device.device_id === currentDevice.device_id;
      });
    }
  }

  async removeDevice(device: Device) {
    this.devices = this.devices.filter(d => d.id !== device.id);

    const user = await this.devicesSvc.removeDevice(device);
    this.auth.setAuthUser(user);

    await Toast.show({
      text: "¡Dispositivo eliminado!"
    });
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
      await Toast.show({
        text: "¡Notificaciones silenciadas!"
      });
    } else {
      await Toast.show({
        text: "¡Notificaciones activadas!"
      });
    }
  }

  close() {
    this.modal.dismiss();
  }
}

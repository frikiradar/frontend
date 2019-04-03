import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController, ModalController } from "@ionic/angular";

import { Device } from "./../../models/device";
import { DeviceService } from "./../../services/device.service";

const { Toast } = Plugins;

@Component({
  selector: "devices-modal",
  templateUrl: "./devices.modal.html",
  styleUrls: ["./devices.modal.scss"]
})
export class DevicesModal implements OnInit {
  public devices: Device[];

  constructor(
    private modal: ModalController,
    private devicesSvc: DeviceService,
    private alert: AlertController
  ) {}

  async ngOnInit() {
    this.devices = await this.devicesSvc.getDevices();
    const currentDevice = await this.devicesSvc.getCurrentDevice();

    if (currentDevice) {
      this.devices.map(device => {
        device.current = device.device_id === currentDevice.device_id;
      });
    }
  }

  async removeDevice(device: Device) {
    this.devices = this.devices.filter(d => d.id !== device.id);

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

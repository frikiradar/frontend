import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { ModalController } from "@ionic/angular";

import { Device } from "../../models/device";
import { AuthService } from "../../services/auth.service";
import { DeviceService } from "../../services/device.service";

const { Toast } = Plugins;

@Component({
  selector: "ban-users-modal",
  templateUrl: "./ban-users.modal.html",
  styleUrls: ["./ban-users.modal.scss"]
})
export class BanUsersModal implements OnInit {
  public devices: Device[];

  constructor(
    private modal: ModalController,
    private devicesSvc: DeviceService,
    private auth: AuthService
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

  close() {
    this.modal.dismiss();
  }
}

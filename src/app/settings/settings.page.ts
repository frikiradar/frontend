import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { AccountModal } from "./account/account.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { DevicesModal } from "./devices/devices.modal";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage {
  constructor(private modal: ModalController) {}

  async passwordModal() {
    const modal = await this.modal.create({
      component: ChangePasswordModal
    });
    return await modal.present();
  }

  async devicesModal() {
    const modal = await this.modal.create({
      component: DevicesModal
    });
    return await modal.present();
  }
}

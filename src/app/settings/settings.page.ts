import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { AccountModal } from "./account/account.modal";
import { BanUsersModal } from "./ban-users/ban-users.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage implements OnInit {
  public user: User;

  constructor(
    private modal: ModalController,
    private auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async passwordModal() {
    const modal = await this.modal.create({
      component: ChangePasswordModal
    });
    return await modal.present();
  }

  async DevicesSettingsModal() {
    const modal = await this.modal.create({
      component: DevicesSettingsModal
    });
    return await modal.present();
  }

  async banUsersModal() {
    const modal = await this.modal.create({
      component: BanUsersModal
    });
    return await modal.present();
  }

  async onChangeCheck(property: keyof User, value: boolean) {
    this.user[property] = !value;

    try {
      this.user = await this.userSvc.updateUser(this.user);
    } catch (e) {
      const alert = await this.alert.create({
        header: "Error al guardar los cambios",
        message: "Vuelve a intentarlo transcurridos unos minutos.",
        buttons: ["¡Ok!"]
      });

      alert.present();
    }
  }
}

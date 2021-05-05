import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { BlockUsersModal } from "./block-users/block-users.modal";
import { ChangeEmailModal } from "./change-email/change-email.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { ChangeUsernameModal } from "./change-username/change-username.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";
import { DisableAccountModal } from "./disable-account/disable-account.modal";
import { VerificationModal } from "./verification/verification.modal";
import { HideUsersModal } from "./hide-users/hide-users.modal";
import { NavService } from "../services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage implements OnInit {
  public user: User;

  constructor(
    private modal: ModalController,
    public auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController,
    private nav: NavService,
    private router: Router
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

  async devicesSettingsModal() {
    const modal = await this.modal.create({
      component: DevicesSettingsModal
    });
    return await modal.present();
  }

  async blockUsersModal() {
    const modal = await this.modal.create({
      component: BlockUsersModal
    });
    return await modal.present();
  }

  async hideUsersModal() {
    const modal = await this.modal.create({
      component: HideUsersModal
    });
    return await modal.present();
  }

  async clearLocalStorage() {
    localStorage.removeItem("config");
    await caches.keys().then(keyList => {
      keyList.forEach(cache => {
        caches.delete(cache);
      });
    });

    const alert = await this.alert.create({
      header: "Eliminado correctamente",
      message: "Datos de configuración local y cache eliminados.",
      buttons: [
        {
          text: "¡Ok!",
          handler: () => {
            window.location.reload();
          }
        }
      ],
      cssClass: "round-alert"
    });

    alert.present();
  }

  async usernameModal() {
    const modal = await this.modal.create({
      component: ChangeUsernameModal
    });
    return await modal.present();
  }

  async emailModal() {
    const modal = await this.modal.create({
      component: ChangeEmailModal
    });
    return await modal.present();
  }

  async disableAccountModal() {
    const modal = await this.modal.create({
      component: DisableAccountModal,
      cssClass: "full-modal"
    });
    return await modal.present();
  }

  async verificationModal() {
    const modal = await this.modal.create({
      component: VerificationModal
    });
    return await modal.present();
  }

  async onChangeCheck(property: keyof User, value: boolean) {
    (this.user as any)[property] = !value;

    try {
      this.user = await this.userSvc.updateUser(this.user);
    } catch (e) {
      const alert = await this.alert.create({
        header: "Error al guardar los cambios",
        message: "Vuelve a intentarlo transcurridos unos minutos.",
        buttons: ["¡Ok!"],
        cssClass: "round-alert"
      });

      alert.present();
    }
  }

  patreon() {
    this.router.navigate(["/patreon"]);
  }

  back() {
    this.nav.back();
  }
}

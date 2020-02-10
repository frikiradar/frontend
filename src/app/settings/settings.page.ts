import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { PremiumModal } from "./../insert-coin/premium/premium.modal";
import { AuthService } from "./../services/auth.service";
import { BlockUsersModal } from "./block-users/block-users.modal";
import { ChangeEmailModal } from "./change-email/change-email.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { ChangeUsernameModal } from "./change-username/change-username.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";
import { DisableAccountModal } from "./disable-account/disable-account.modal";
import { PaymentsModal } from "./payments/payments.modal";
import { VerificationModal } from "./verification/verification.modal";

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
      component: DisableAccountModal
    });
    return await modal.present();
  }

  async premiumModal() {
    const modal = await this.modal.create({
      component: PremiumModal
    });
    return await modal.present();
  }

  async paymentsModal() {
    const modal = await this.modal.create({
      component: PaymentsModal
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
        buttons: ["¡Ok!"]
      });

      alert.present();
    }
  }
}

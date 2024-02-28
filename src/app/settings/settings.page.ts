import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { BlockUsersModal } from "./block-users/block-users.modal";
import { ChangeEmailModal } from "./change-email/change-email.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { ChangeUsernameModal } from "./change-username/change-username.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";
import { DisableAccountPage } from "./disable-account/disable-account.page";
import { VerificationModal } from "./verification/verification.modal";
import { HideUsersModal } from "./hide-users/hide-users.modal";
import { NavService } from "../services/navigation.service";
import { UtilsService } from "../services/utils.service";
import { PaymentsModal } from "./payments/payments.modal";
import { UnlimitedModal } from "../unlimited/unlimited.modal";
import { ConfigService, Config } from "../services/config.service";
import { I18nService } from "../services/i18n.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  public user: User;
  public language: "es" | "en";

  public themesOpts = {
    slidesPerView: 3.5,
    breakpoints: {
      1024: {
        slidesPerView: 5.5,
      },
    },
    grabCursor: true,
  };

  constructor(
    private modalController: ModalController,
    public auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController,
    private nav: NavService,
    private utils: UtilsService,
    private config: ConfigService,
    private i18n: I18nService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
    this.language = (await this.config.get("language")) as Config["language"];
  }

  async passwordModal() {
    const modal = await this.modalController.create({
      component: ChangePasswordModal,
    });
    return await modal.present();
  }

  async devicesSettingsModal() {
    const modal = await this.modalController.create({
      component: DevicesSettingsModal,
    });
    return await modal.present();
  }

  async blockUsersModal() {
    const modal = await this.modalController.create({
      component: BlockUsersModal,
    });
    return await modal.present();
  }

  async hideUsersModal() {
    const modal = await this.modalController.create({
      component: HideUsersModal,
    });
    return await modal.present();
  }

  async clearLocalStorage() {
    localStorage.removeItem("config");
    await caches.keys().then((keyList) => {
      keyList.forEach((cache) => {
        caches.delete(cache);
      });
    });

    const alert = await this.alert.create({
      header: this.i18n.translate("successfully-deleted"),
      message: this.i18n.translate("local-settings-and-cache-deleted"),
      buttons: [
        {
          text: this.i18n.translate("okay"),
          handler: () => {
            window.location.reload();
          },
        },
      ],
      cssClass: "round-alert",
    });

    alert.present();
  }

  async usernameModal() {
    const modal = await this.modalController.create({
      component: ChangeUsernameModal,
    });
    return await modal.present();
  }

  async emailModal() {
    const modal = await this.modalController.create({
      component: ChangeEmailModal,
    });
    return await modal.present();
  }

  async disableAccountModal() {
    const modal = await this.modalController.create({
      component: DisableAccountPage,
      cssClass: "full-modal",
    });
    return await modal.present();
  }

  async premiumModal() {
    const modal = await this.modalController.create({
      component: UnlimitedModal,
      cssClass: "vertical-modal",
    });
    return await modal.present();
  }

  async paymentsModal() {
    const modal = await this.modalController.create({
      component: PaymentsModal,
      cssClass: "vertical-modal",
    });
    return await modal.present();
  }

  async verificationModal() {
    const modal = await this.modalController.create({
      component: VerificationModal,
    });
    return await modal.present();
  }

  async onChangeCheck(property: keyof User, value: boolean) {
    (this.user as any)[property] = !value;

    try {
      this.user = await this.userSvc.updateUser(this.user);
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("error-saving-changes"),
        message: this.i18n.translate("try-again-in-a-few-minutes"),
        buttons: [this.i18n.translate("okay")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async premium() {
    const modal = await this.modalController.create({
      component: UnlimitedModal,
      cssClass: "vertical-modal",
      componentProps: { topic: "theme" },
    });
    await modal.present();
  }

  async toggleTheme(theme: Config["theme"]) {
    if (this.auth.isPremium() || theme === "dark" || theme === "light") {
      this.utils.toggleTheme(theme);
    } else {
      const alert = await this.alert.create({
        header: this.i18n.translate("exclusive-theme-for-unlimited-members"),
        message: this.i18n.translate(
          "join-unlimited-and-get-exclusive-advantages"
        ),
        buttons: [
          {
            text: this.i18n.translate("i-want-to-know-more"),
            handler: () => {
              this.premium();
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async changeLanguage(value: "es" | "en") {
    try {
      this.user.language = value;
      this.user = await this.userSvc.updateUser(this.user);
      this.i18n.setLanguage(value);
      this.cd.detectChanges();
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("error-saving-changes"),
        message: this.i18n.translate("try-again-in-a-few-minutes"),
        buttons: [this.i18n.translate("okay")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  back() {
    this.nav.back();
  }
}

import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";

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
import { UtilsService } from "../services/utils.service";
import { ConfigService, Config } from "../services/config.service";
import {
  AdMob,
  BannerAdPluginEvents,
  AdMobBannerSize,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
} from "@capacitor-community/admob";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  public user: User;

  public themesOpts = {
    slidesPerView: 3.5,
    breakpoints: {
      1024: {
        slidesPerView: 8.5,
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
    private router: Router,
    private utils: UtilsService,
    private config: ConfigService,
    private platform: Platform
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
    // this.banner();
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
      header: "Eliminado correctamente",
      message: "Datos de configuración local y cache eliminados.",
      buttons: [
        {
          text: "¡Ok!",
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
      component: DisableAccountModal,
      cssClass: "full-modal",
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
        header: "Error al guardar los cambios",
        message: "Vuelve a intentarlo transcurridos unos minutos.",
        buttons: ["¡Ok!"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  patreon() {
    this.router.navigate(["/patreon"]);
  }

  async toggleTheme(theme: Config["theme"]) {
    if (
      this.auth.isPremium() ||
      this.auth.isAdmin() ||
      theme === "dark" ||
      theme === "light"
    ) {
      const oldTheme = (await this.config.get("theme")) as Config["theme"];
      this.utils.toggleTheme(theme, oldTheme);
      await this.config.set("theme", theme);
    } else {
      const alert = await this.alert.create({
        header: "Tema exlusivo para miembros de Patreon",
        message:
          "Conviértete en embajador Patreon de FrikiRadar y accede a ventajas exclusivas.",
        buttons: [
          {
            text: "¡Quiero informarme!",
            handler: () => {
              this.patreon();
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async banner() {
    if (!this.auth.isPremium() && this.platform.is("capacitor")) {
      AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
        // Subscribe Banner Event Listener
      });

      AdMob.addListener(
        BannerAdPluginEvents.SizeChanged,
        (size: AdMobBannerSize) => {
          // Subscribe Change Banner Size
          const banner = document.getElementById("banner");
          banner.style.height = size.height.toString() + "px";
        }
      );

      const options: BannerAdOptions = {
        adId: "ca-app-pub-3470820326017899/2750737138",
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: this.auth.isAdmin() ? true : false,
      };
      AdMob.showBanner(options);
    }
  }

  back() {
    this.nav.back();
  }

  async ionViewWillLeave() {
    await AdMob.removeBanner();
  }
}

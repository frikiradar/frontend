import { Component } from "@angular/core";
import { Network } from "@capacitor/network";
import {
  AlertController,
  isPlatform,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { App, URLOpenListenerEvent } from "@capacitor/app";
import { InAppReview } from "@capacitor-community/in-app-review";
import {
  AppUpdate,
  AppUpdateAvailability,
} from "@capawesome/capacitor-app-update";
import { distinctUntilChanged, map } from "rxjs";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { ConfigService } from "./services/config.service";
import { UtilsService } from "./services/utils.service";
import { PushService } from "./services/push.service";
import { NavService } from "./services/navigation.service";
import { SwService } from "./services/sw.service";
import { AdService } from "./services/ad.service";

import { StoreService } from "./services/store.service";
import { GoogleAuthService } from "./services/google-auth.service";
import { I18nService } from "./services/i18n.service";
import { ChatService } from "./services/chat.service";
import { IntentService } from "./services/intent.service";
import { UrlService } from "./services/url.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  currentUser: User;
  alertNetwork: HTMLIonAlertElement;
  public internet = true;

  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private utils: UtilsService,
    private config: ConfigService,
    private push: PushService,
    private nav: NavService,
    private sw: SwService,
    private toast: ToastController,
    private adService: AdService,
    private store: StoreService,
    private googleAuth: GoogleAuthService,
    private i18n: I18nService,
    private chatSvc: ChatService,
    private intent: IntentService,
    private url: UrlService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    await this.i18n.init();
    this.initializeApp();
  }

  async initializeApp() {
    await this.utils.toggleTheme(undefined, true);

    App.addListener("appUrlOpen", async (data: URLOpenListenerEvent) => {
      if (data.url) {
        console.log("appUrlOpen", data.url);
        if (await this.modalCtrl.getTop()) {
          await this.modalCtrl.dismiss();
        }

        await this.url.openUrl(data.url);
      }
    });

    this.auth.currentUser
      .pipe(
        map((u) => u?.id), // Transforma el flujo para emitir solo el ID del usuario.
        distinctUntilChanged() // Filtra los cambios que no alteran el ID del usuario.
      )
      .subscribe(async (authUser) => {
        if (authUser) {
          const user = await this.auth.getAuthUser();
          this.auth.setAuthUser(user);
          // Init chat
          this.chatSvc.init();
          // Iniciar notificaciones
          this.initNotifications();
          // Contar veces abierto
          this.countOpenTimes();
          // Mostrar publicidad
          this.adService.init();
          // Init store
          this.store.init();
          // InitSendIntent
          this.intent.init();
        }
      });

    this.loadConfig();
    // this.networkStatus();
    this.googleAuth.init();
    this.nav.backButtonStatus();
  }

  async networkStatus() {
    const network = await Network.getStatus();
    if (!network.connected) {
      console.log(this.i18n.translate("no-internet-connection"));
      (
        await this.toast.create({
          message: this.i18n.translate("no-internet-connection"),
          duration: 5000,
          position: "bottom",
          color: "danger",
        })
      ).present();
      this.internet = false;
    }

    Network.addListener("networkStatusChange", async (status) => {
      if (status.connected) {
        if (!this.internet) {
          console.log(this.i18n.translate("internet-connection-restored"));
          (
            await this.toast.create({
              message: this.i18n.translate("internet-connection-restored"),
              duration: 2000,
              position: "bottom",
              color: "success",
            })
          ).present();
        }
        this.internet = true;
      } else {
        console.log(this.i18n.translate("internet-connection-lost"));
        (
          await this.toast.create({
            message: this.i18n.translate("internet-connection-lost"),
            duration: 5000,
            position: "bottom",
            color: "danger",
          })
        ).present();
        this.internet = false;
      }
    });
  }

  async countOpenTimes() {
    const config = await this.config.getConfig();
    this.config.setConfig(config);
    let openTimes: number;
    if (config) {
      openTimes = config.openTimes ? ++config.openTimes : 1;
    } else {
      openTimes = this.auth.currentUserValue.num_logins++;
    }
    this.config.set("openTimes", openTimes);

    if (openTimes == 7) {
      const alert = await this.alert.create({
        header: this.i18n.translate("recruit-and-win"),
        message: this.i18n.translate("recruit-friends-message"),
        buttons: [
          {
            text: this.i18n.translate("i-want-to-know"),
            handler: async () => {
              this.nav.navigateRoot("/recruit");
            },
          },
        ],
        cssClass: "round-alert",
      });

      await alert.present();
    } else if (openTimes >= 3 && !config.review && isPlatform("capacitor")) {
      const alert = await this.alert.create({
        header: this.i18n.translate("join-the-battle"),
        message: this.i18n.translate("rate-frikiradar-message"),
        backdropDismiss: false,
        buttons: [
          {
            text: this.i18n.translate("yes-count-on-me"),
            handler: () => {
              config.review = true;
              this.config.setConfig(config);
              InAppReview.requestReview();
            },
          },
          {
            text: this.i18n.translate("next-time-better"),
          },
          {
            text: this.i18n.translate("better-not"),
            handler: () => {
              config.review = true;
              this.config.setConfig(config);
            },
          },
        ],
        cssClass: "round-alert",
      });

      await alert.present();
    }
  }

  async betaAdvertisement() {
    const alert = await this.alert.create({
      header: this.i18n.translate("with-your-help-we-grow"),
      message: this.i18n.translate("frikiradar-start-journey-message"),
      buttons: [
        {
          text: this.i18n.translate("share"),
          handler: () => {
            this.utils.share();
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
  }

  async loadConfig() {
    const maintenanceAlert = await this.alert.create({
      header: this.i18n.translate("in-maintenance"),
      message: this.i18n.translate("maintenance-message"),
      backdropDismiss: false,
      buttons: [
        {
          text: this.i18n.translate("oki-doki"),
          handler: () => {
            if (isPlatform("capacitor")) {
              navigator["app"].exitApp();
            } else {
              window.open("", "_parent", "");
              window.close();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    try {
      const config = await this.config.getConfig(true);
      if (isPlatform("capacitor")) {
        const info = await App.getInfo();
        let version = +info.version.replace(".", "");
        // Debe tener 3 digitos, por eso mayor o igual a 100
        version = version >= 100 ? version : version * 10;
        console.info("Version: ", version);
        console.info("Min version: ", +config.min_version);

        if (version < +config.min_version) {
          const result = await AppUpdate.getAppUpdateInfo();
          if (
            result.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE
          ) {
            const versionAlert = await this.alert.create({
              header: this.i18n.translate("obsolete-version"),
              message: this.i18n.translate("obsolete-version-message"),
              backdropDismiss: false,
              buttons: [
                {
                  text: this.i18n.translate("update"),
                  handler: async () => {
                    if (isPlatform("android")) {
                      if (result.immediateUpdateAllowed) {
                        await AppUpdate.performImmediateUpdate();
                      }
                    }
                    if (isPlatform("ios")) {
                      await AppUpdate.openAppStore();
                    }
                  },
                },
              ],
              cssClass: "round-alert",
            });

            versionAlert.present();
          }
        } else {
          const oldVersion = await this.config.get("version");
          if (+version > (!Number.isNaN(oldVersion) ? +oldVersion : 0)) {
            this.config.set("version", version);
          }
        }
      } else if (config.maintenance) {
        maintenanceAlert.present();
      }
    } catch (e) {
      if (this.internet) {
        maintenanceAlert.present();
      }
    }
  }

  async initNotifications() {
    await this.push.init();
    if (!isPlatform("capacitor")) {
      this.sw.init();
    }
  }
}

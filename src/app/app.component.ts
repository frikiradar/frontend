import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Network } from "@capacitor/network";
import { AlertController, Platform, ToastController } from "@ionic/angular";
import { App } from "@capacitor/app";
import { RateApp } from "capacitor-rate-app";
import { environment } from "src/environments/environment";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { Config, ConfigService } from "./services/config.service";
import { UtilsService } from "./services/utils.service";
import { PushService } from "./services/push.service";
import { NavService } from "./services/navigation.service";
import { SwService } from "./services/sw.service";
import { Device } from "@capacitor/device";
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";
import {
  AppUpdate,
  AppUpdateAvailability,
} from "@capawesome/capacitor-app-update";
import { first } from "rxjs";
import { AdMob, AdmobConsentStatus } from "@capacitor-community/admob";

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
    private router: Router,
    private platform: Platform,
    private utils: UtilsService,
    private config: ConfigService,
    private push: PushService,
    private nav: NavService,
    private sw: SwService,
    private toast: ToastController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.loadConfig();
    this.networkStatus();
    this.nav.backButtonStatus();

    // Obtenemos tema en configuración local. Si no hay le mandamos el dark
    let theme = (await this.config.get("theme")) as Config["theme"];
    if (!theme) {
      theme = "dark";
    }
    this.utils.toggleTheme(theme, undefined, 1000);

    // Firebase Analytics
    const deviceInfo = Device.getInfo();
    if ((await deviceInfo).platform === "web") {
      await FirebaseAnalytics.initializeFirebase(environment.firebase);
    }

    FirebaseAnalytics.setUserProperty({
      name: "theme",
      value: theme,
    });

    this.auth.currentUser
      .pipe(first((u) => !!u?.id))
      .subscribe(async (authUser) => {
        if (authUser) {
          const user = await this.auth.getAuthUser();
          this.auth.setAuthUser(user);

          // Contar veces abierto
          this.countOpenTimes();

          // Iniciar notificaciones
          this.initNotifications();

          // Mostrar publicidad
          this.initAds();
        }
      });
  }

  async networkStatus() {
    const network = await Network.getStatus();
    if (!network.connected) {
      (
        await this.toast.create({
          message: "No tienes conexión a internet",
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
          (
            await this.toast.create({
              message: "¡Conexión a internet restablecida!",
              duration: 2000,
              position: "bottom",
              color: "success",
            })
          ).present();
        }
        this.internet = true;
      } else {
        (
          await this.toast.create({
            message: "¡Te has quedado sin internet!",
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

    if (openTimes >= 3 && !config.review && this.platform.is("capacitor")) {
      const alert = await this.alert.create({
        header: "¡Únete a la batalla!",
        message:
          "¿Qué te parece FrikiRadar? Déjanos tu valoración de 5 estrellas y una sugerencia para que cada vez más personas formen parte de esta gran comunidad.",
        backdropDismiss: false,
        buttons: [
          {
            text: "Sí, ¡cuenta conmigo! 🏹",
            handler: () => {
              config.review = true;
              this.config.setConfig(config);
              RateApp.requestReview();
            },
          },
          {
            text: "La próxima vez mejor 🙏",
          },
          {
            text: "Mmm, mejor no 🙈",
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
      header: "¡Con tu ayuda seguiremos creciendo!",
      message:
        "FrikiRadar acaba de comenzar su andadura y aún le queda un largo camino por delante. Por eso agradecemos tu ayuda dando a conocer FrikiRadar y compartiendo con tus amigos.",
      buttons: [
        {
          text: "¡Compartir!",
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
      header: "En mantenimiento",
      message:
        "😅 Ups... Estamos haciendo ajustes en nuestros servidores. Por favor, regresa en unos minutos. No te preocupes, todo continuará tal y como estaba.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Oki doki",
          handler: () => {
            if (this.platform.is("capacitor")) {
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
      if (this.platform.is("capacitor")) {
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
              header: "Versión obsoleta",
              message:
                "La versión de FrikiRadar que tienes instalada no soporta las últimas funcionalidades. Es necesario actualizar la app para seguir utilizándola.",
              backdropDismiss: false,
              buttons: [
                {
                  text: "ACTUALIZAR",
                  handler: async () => {
                    if (this.platform.is("android")) {
                      /*this.urlSvc.openUrl(
                        "market://details?id=com.frikiradar.app"
                      );*/
                      if (result.immediateUpdateAllowed) {
                        await AppUpdate.performImmediateUpdate();
                      }
                    }
                    if (this.platform.is("ios")) {
                      /*this.urlSvc.openUrl(
                        "https://apps.apple.com/es/app/frikiradar/id1477838835"
                      );*/
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
      maintenanceAlert.present();
    }
  }

  async initNotifications() {
    if (this.platform.is("capacitor")) {
      this.push.init();
    } else {
      if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
        this.push.init();
      }
      this.sw.init();
    }
  }

  async initAds() {
    if (!this.auth.isPremium() && this.platform.is("capacitor")) {
      await AdMob.initialize();

      const [trackingInfo, consentInfo] = await Promise.all([
        AdMob.trackingAuthorizationStatus(),
        AdMob.requestConsentInfo(),
      ]);

      if (trackingInfo.status === "notDetermined") {
        /**
         * If you want to explain TrackingAuthorization before showing the iOS dialog,
         * you can show the modal here.
         * ex)
         * const modal = await this.modalCtrl.create({
         *   component: RequestTrackingPage,
         * });
         * await modal.present();
         * await modal.onDidDismiss();  // Wait for close modal
         **/

        await AdMob.requestTrackingAuthorization();
      }

      const authorizationStatus = await AdMob.trackingAuthorizationStatus();
      if (
        authorizationStatus.status === "authorized" &&
        consentInfo.isConsentFormAvailable &&
        consentInfo.status === AdmobConsentStatus.REQUIRED
      ) {
        await AdMob.showConsentForm();
      }
    }
  }
}

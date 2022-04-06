import { environment } from "src/environments/environment";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Network } from "@capacitor/network";
import { AlertController, Platform, ToastController } from "@ionic/angular";
import { codePush } from "capacitor-codepush";
import { SyncOptions } from "capacitor-codepush/dist/esm/syncOptions";
import { InstallMode } from "capacitor-codepush/dist/esm/installMode";
import { App } from "@capacitor/app";
import { Device } from "@capacitor/device";
import { RateApp } from "capacitor-rate-app";
import {
  AppUpdate,
  AppUpdateAvailability,
} from "@robingenz/capacitor-app-update";
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { Config, ConfigService } from "./services/config.service";
import { UtilsService } from "./services/utils.service";
import { PushService } from "./services/push.service";
import { NavService } from "./services/navigation.service";
import { SwService } from "./services/sw.service";

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
    if (this.platform.is("capacitor")) {
      this.push.init();
      this.checkCodePush();
    } else {
      if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
        this.push.init();
      }
      this.sw.init();
    }

    this.loadConfig();
    this.networkStatus();
    this.nav.backButtonStatus();

    // Obtenemos tema en configuración local. Si no hay le mandamos el dark
    let theme = (await this.config.get("theme")) as Config["theme"];
    if (!theme) {
      theme = "dark";
    }
    this.utils.toggleTheme(theme);

    if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
      const user = await this.auth.getAuthUser();
      this.auth.setAuthUser(user);
      // Contar veces abierto
      this.countOpenTimes();
    } else {
      // this.betaAdvertisement();
    }

    // Firebase Analytics
    const deviceInfo = Device.getInfo();
    if ((await deviceInfo).platform === "web") {
      FirebaseAnalytics.initializeFirebase(environment.firebase);
    }
    FirebaseAnalytics.setUserId({
      userId: this.auth.currentUserValue.username,
    });
    FirebaseAnalytics.setUserProperty({ name: "theme", value: theme });
  }

  async networkStatus() {
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

  checkCodePush() {
    let syncOptions: SyncOptions;
    if (this.auth.isAdmin() || this.auth.isPatreon()) {
      let deploymentKey = "";
      if (this.platform.is("android")) {
        // Admin trabaja con canal Staging y Patreon con canal Beta
        deploymentKey = this.auth.isAdmin()
          ? "uwJhlLNJrqSaFkFEX7sKXEwgQBfigjlFa4lDP"
          : "ca2DLDgXrXj0zBDVv8Hehxe-vOcJZtjBRsYsH";
      } else if (this.platform.is("ios")) {
        deploymentKey = this.auth.isAdmin()
          ? "uwJhlLNJrqSaFkFEX7sKXEwgQBfigjlFa4lDP"
          : "qVXwTWOnTmOJJz5zj6s9G5GQPyJ9T_zqCfB1i";
      }

      syncOptions = {
        updateDialog: {
          updateTitle: "¡Nueva actualización!",
          optionalUpdateMessage:
            "Hay una actualización disponible. ¿Quieres actualizar?",
          mandatoryUpdateMessage:
            "Hay una actualización obligatoria disponible",
          descriptionPrefix: "",
          mandatoryContinueButtonLabel: "Instalar",
          optionalIgnoreButtonLabel: "Más tarde",
          optionalInstallButtonLabel: "Instalar",
          appendReleaseDescription: false,
        },
        deploymentKey: this.platform.is("android")
          ? "uwJhlLNJrqSaFkFEX7sKXEwgQBfigjlFa4lDP"
          : "FdlQxj1MHcOlgOU1nk1I93uR_32hoXJV9KZeX",
        installMode: InstallMode.IMMEDIATE,
      };
    } else {
      syncOptions = {
        updateDialog: false,
        installMode: InstallMode.ON_NEXT_RESTART,
      };
    }

    codePush.sync(syncOptions);
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

    if (openTimes === 7) {
      const alert = await this.alert.create({
        header: "¡Conviértete en embajador 🐲!",
        message:
          "Únete al Patreon de embajadores de FrikiRadar y conseguirás ventajas exclusivas. ¡Infórmate!",
        buttons: [
          {
            text: "¡Quiero informarme!",
            handler: async () => {
              this.router.navigate(["/ambassador"]);
            },
          },
        ],
        cssClass: "round-alert",
      });

      await alert.present();
    } else if (
      openTimes >= 3 &&
      !config.review &&
      this.platform.is("capacitor")
    ) {
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
}

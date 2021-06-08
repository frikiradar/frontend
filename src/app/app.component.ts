import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { AlertController, Platform, ToastController } from "@ionic/angular";
import {
  CodePush,
  InstallMode,
  SyncOptions
} from "@ionic-native/code-push/ngx";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { Config, ConfigService } from "./services/config.service";
import { UtilsService } from "./services/utils.service";
import { PushService } from "./services/push.service";
import { NavService } from "./services/navigation.service";
import { SwService } from "./services/sw.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;
  alertNetwork: HTMLIonAlertElement;
  public internet = true;

  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private router: Router,
    private network: Network,
    private splashScreen: SplashScreen,
    private platform: Platform,
    private utils: UtilsService,
    private config: ConfigService,
    private launchReview: LaunchReview,
    private appVersion: AppVersion,
    private push: PushService,
    private codePush: CodePush,
    private nav: NavService,
    private sw: SwService,
    private toast: ToastController,
    private toastUpdate: ToastController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      if (this.platform.is("cordova")) {
        this.push.init();
        this.splashScreen.hide();
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
    });
  }

  async networkStatus() {
    this.network.onConnect().subscribe(async () => {
      if (!this.internet) {
        (
          await this.toast.create({
            message: "¡Conexión a internet restablecida!",
            duration: 2000,
            position: "bottom",
            color: "success"
          })
        ).present();
        this.internet = true;
      }
    });

    this.network.onDisconnect().subscribe(async () => {
      (
        await this.toast.create({
          message: "¡Te has quedado sin internet!",
          duration: 5000,
          position: "bottom",
          color: "danger"
        })
      ).present();
      this.internet = false;
    });
  }

  checkCodePush() {
    let syncOptions: SyncOptions = {
      updateDialog: false /*{
        updateTitle: "¡Nueva actualización!",
        optionalUpdateMessage:
          "Hay una actualización disponible. ¿Quieres actualizar?",
        mandatoryUpdateMessage: "Hay una actualización obligatoria disponible",
        descriptionPrefix: "",
        mandatoryContinueButtonLabel: "Instalar",
        optionalIgnoreButtonLabel: "Más tarde",
        optionalInstallButtonLabel: "Instalar",
        appendReleaseDescription: false
      }*/,
      installMode: InstallMode.ON_NEXT_RESTART
    };

    this.codePush.sync(syncOptions).subscribe(
      async data => {
        /*if (data === 1) {
          const toast = await this.toastUpdate.create({
            message: "¡Nueva actualización disponible!",
            buttons: [
              {
                text: "Instalar",
                handler: () => {
                  window.location.reload();
                }
              }
            ],
            position: "bottom"
          });

          await toast.present();
        }*/
        console.log("CODE PUSH SUCCESSFUL: " + data);
      },
      err => {
        console.log("CODE PUSH ERROR: " + err);
      }
    );
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
            }
          }
        ],
        cssClass: "round-alert"
      });

      await alert.present();
    } else if (
      openTimes >= 3 &&
      !config.review &&
      this.platform.is("cordova")
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
              if (this.launchReview.isRatingSupported()) {
                this.launchReview
                  .rating()
                  .toPromise()
                  .then();
              } else {
                this.launchReview.launch();
              }
            }
          },
          {
            text: "La próxima vez mejor 🙏"
          },
          {
            text: "Mmm, mejor no 🙈",
            handler: () => {
              config.review = true;
              this.config.setConfig(config);
            }
          }
        ],
        cssClass: "round-alert"
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
          }
        }
      ],
      cssClass: "round-alert"
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
            if (this.platform.is("cordova")) {
              navigator["app"].exitApp();
            } else {
              window.open("", "_parent", "");
              window.close();
            }
          }
        }
      ],
      cssClass: "round-alert"
    });

    try {
      const config = await this.config.getConfig(true);
      if (this.platform.is("cordova")) {
        let version = +(await this.appVersion.getVersionNumber()).replace(
          ".",
          ""
        );
        // Debe tener 3 digitos, por eso mayor o igual a 100
        version = version >= 100 ? version : version * 10;

        if (version < +config.min_version) {
          const versionAlert = await this.alert.create({
            header: "Versión obsoleta",
            message:
              "La versión de FrikiRadar que tienes instalada no soporta las últimas funcionalidades. Es necesario actualizar la app para seguir utilizándola.",
            backdropDismiss: false,
            buttons: [
              {
                text: "ACTUALIZAR",
                handler: () => {
                  this.launchReview.launch().then();
                }
              }
            ],
            cssClass: "round-alert"
          });

          versionAlert.present();
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

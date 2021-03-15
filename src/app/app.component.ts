import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import {
  AlertController,
  ModalController,
  Platform,
  ToastController
} from "@ionic/angular";
import { firebase } from "@firebase/app";

import { AmbassadorModal } from "./ambassador/ambassador.modal";
import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { ConfigService } from "./services/config.service";
import { UtilsService } from "./services/utils.service";
import { PushService } from "./services/push.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;
  backButtonCount = 0;
  alertNetwork: HTMLIonAlertElement;
  public internet = true;

  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private router: Router,
    private statusBar: StatusBar,
    private network: Network,
    private splashScreen: SplashScreen,
    private platform: Platform,
    private utils: UtilsService,
    private config: ConfigService,
    private launchReview: LaunchReview,
    private appVersion: AppVersion,
    private toastController: ToastController,
    private modal: ModalController,
    private push: PushService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      if (this.platform.is("cordova")) {
        this.push.init();
        this.statusBar.backgroundColorByHexString("#1a1a1a");
        this.splashScreen.hide();
      } else {
        if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
          this.push.init();
        }
      }

      this.loadConfig();
      this.networkStatus();
      this.backButtonStatus();

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
          await this.toastController.create({
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
        await this.toastController.create({
          message: "¡Te has quedado sin internet!",
          duration: 5000,
          position: "bottom",
          color: "danger"
        })
      ).present();
      this.internet = false;
    });
  }

  async backButtonStatus() {
    this.platform.backButton.subscribe(async () => {
      if (this.router.url.includes("/tabs/")) {
        this.backButtonCount++;

        switch (this.backButtonCount) {
          case 1:
            (
              await this.toastController.create({
                message: "Pulsa de nuevo para salir de la aplicación",
                duration: 2000,
                position: "bottom"
              })
            ).present();
            break;

          default:
            navigator["app"].exitApp();
        }
      } else {
        // this.nav.back();
        this.backButtonCount = 0;
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

    if (openTimes === 7) {
      const alert = await this.alert.create({
        header: "¡Conviértete en embajador 🐲!",
        message:
          "Únete al Patreon de embajadores de FrikiRadar y conseguirás ventajas exclusivas. ¡Infórmate!",
        buttons: [
          {
            text: "¡Quiero informarme!",
            handler: async () => {
              const modal = await this.modal.create({
                component: AmbassadorModal
              });
              return await modal.present();
            }
          }
        ]
      });

      await alert.present();
    } else if (openTimes >= 3 && !config.review) {
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
        ]
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
      ]
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
      ]
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
            ]
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

import { Component } from "@angular/core";
import { Event, Router } from "@angular/router";
import { AnalyticsFirebase } from "@ionic-native/analytics-firebase/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, NavController, Platform } from "@ionic/angular";

import { User } from "./models/user";
import { AdmobService } from "./services/admob.service";
import { AuthService } from "./services/auth.service";
import { ConfigService } from "./services/config.service";
import { PushService } from "./services/push.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;
  backButtonCount = 0;

  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private router: Router,
    private nav: NavController,
    private statusBar: StatusBar,
    private toast: Toast,
    private network: Network,
    private splashScreen: SplashScreen,
    private platform: Platform,
    private push: PushService,
    private config: ConfigService,
    private launchReview: LaunchReview,
    private appVersion: AppVersion,
    private admob: AdmobService,
    private analyticsFirebase: AnalyticsFirebase
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      this.loadConfig();
      this.networkStatus();
      this.backButtonStatus();

      this.auth.setAuthUser(await this.auth.getAuthUser());
      this.auth.currentUser.subscribe(async authUser => {
        this.currentUser = authUser;

        if (this.platform.is("cordova")) {
          this.push.init();
        }
      });

      if (this.platform.is("cordova")) {
        this.statusBar.backgroundColorByHexString("#1a1a1a");
        this.splashScreen.hide();

        const eventParams = {};
        eventParams[this.analyticsFirebase.DEFAULT_PARAMS.COUPON] = "folagor";
        this.analyticsFirebase
          .logEvent(
            this.analyticsFirebase.DEFAULT_EVENTS.CAMPAIGN_DETAILS,
            eventParams
          )
          .then(log => console.log("Event successfully tracked", log))
          .catch(err => console.log("Error tracking event:", err));

        this.analyticsFirebase
          .logEvent(this.analyticsFirebase.DEFAULT_EVENTS.CAMPAIGN_DETAILS)
          .then(log => console.log("Event successfully tracked", log))
          .catch(err => console.log("Error tracking event:", err));

        this.router.events.subscribe(async (event: Event) => {
          switch (this.router.url) {
            case "/settings":
            case "/search":
              this.admob.BannerAd();
              break;

            default:
              this.admob.BannerAdRemove();
          }
        });
      }

      // Veces abierto
      if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
        this.countOpenTimes();
      } else {
        this.betaAdvertisement();
      }
    });
  }

  async networkStatus() {
    const alertNetwork = await this.alert.create({
      header: "Sin conexión a internet",
      message:
        "No tienes conexión a internet en estos momentos. Podrás seguir utilizando la aplicación en cuanto vuelvas a tener red.",
      backdropDismiss: false
    });

    this.network.onConnect().subscribe(async () => {
      await alertNetwork.dismiss();
    });

    this.network.onDisconnect().subscribe(async () => {
      await alertNetwork.present();
    });
  }

  async backButtonStatus() {
    this.platform.backButton.subscribe(() => {
      if (this.router.url.includes("/tabs/")) {
        this.backButtonCount++;

        switch (this.backButtonCount) {
          case 1:
            this.toast
              .show(
                "Pulsa de nuevo para salir de la aplicación",
                "short",
                "bottom"
              )
              .subscribe();
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
    let config = JSON.parse(localStorage.getItem("config"));
    let openTimes: number;
    if (config) {
      openTimes = config.openTimes ? ++config.openTimes : 1;
      config.openTimes = openTimes;
    } else {
      openTimes = this.auth.currentUserValue.num_logins++;
      config = { openTimes };
    }
    localStorage.setItem("config", JSON.stringify(config));

    if (openTimes >= 2 && !config.review) {
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
              localStorage.setItem("config", JSON.stringify(config));
              if (this.launchReview.isRatingSupported()) {
                this.launchReview.rating().then();
              } else {
                this.launchReview.launch().then();
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
              localStorage.setItem("config", JSON.stringify(config));
            }
          }
        ]
      });

      await alert.present();
    }
  }

  async betaAdvertisement() {
    const alert = await this.alert.create({
      header: "En desarrollo",
      message:
        "Ayúdanos en nuestro reto para ser la aplicación de citas para frikis nº1. Cuéntale a tus amigos y envíanos errores o sugerencias a hola@frikiradar.com ¡Te obsequiaremos con una cuenta premium gratuita! 😁",
      buttons: [
        {
          text: "¡Comenzar la aventura!"
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
            navigator["app"].exitApp();
          }
        }
      ]
    });

    try {
      const config: {
        maintenance: boolean;
        min_version: string;
        chat: boolean;
      } = (await this.config.getConfig()) as any;
      if (
        this.platform.is("cordova") &&
        (await this.appVersion.getVersionCode()) < +config.min_version
      ) {
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
      } else if (config.maintenance) {
        maintenanceAlert.present();
      }
    } catch (e) {
      maintenanceAlert.present();
    }
  }
}

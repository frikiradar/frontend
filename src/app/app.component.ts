import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, NavController, Platform } from "@ionic/angular";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
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
    private launchReview: LaunchReview
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString("#1a1a1a");
      this.networkStatus();
      this.backButtonStatus();
      this.auth.currentUser.subscribe(async authUser => {
        this.currentUser = authUser;

        if (this.platform.is("android") || this.platform.is("ios")) {
          this.push.init();
        }
      });

      // Veces abierto
      if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
        this.countOpenTimes();
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
        this.nav.back();
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
}

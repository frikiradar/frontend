import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, NavController, Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";

LogRocket.init("hlejka/frikiradar");

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;
  backButtonCount = 0;

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private alert: AlertController,
    private router: Router,
    private nav: NavController,
    private statusBar: StatusBar,
    private toast: Toast,
    private network: Network,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if (!this.platform.is("desktop") && !this.platform!.is("mobileweb")) {
        this.splashScreen.hide();
        this.statusBar.backgroundColorByHexString("#1a1a1a");
        this.networkStatus();
        this.backButtonStatus();
      }
      LogRocket.init("hlejka/frikiradar");
      this.auth.currentUser.subscribe(async authUser => {
        this.currentUser = authUser;

        if (authUser && authUser.id) {
          if (!authUser.roles.includes("ROLE_ADMIN")) {
            LogRocket.identify(`${authUser.id}`, {
              name: authUser.username,
              email: authUser.email
            });
          }
        }
      });
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
    if (!this.platform.is("desktop") && !this.platform!.is("mobileweb")) {
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
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController, NavController, Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
const { StatusBar, SplashScreen, Device, Network, App, Toast } = Plugins;
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
    private nav: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if ((await Device.getInfo()).platform !== "web") {
        SplashScreen.hide();
        StatusBar.setBackgroundColor({ color: "#1a1a1a" });
        this.networkStatus();
        this.backButtonStatus();
      }
    });

    this.auth.currentUser.subscribe(async authUser => {
      this.currentUser = authUser;

      if (authUser && authUser.id) {
        if (!authUser.roles.includes("ROLE_ADMIN")) {
          LogRocket.init("hlejka/frikiradar");
          LogRocket.identify(`${authUser.id}`, {
            name: authUser.username,
            email: authUser.email
          });
        }
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

    if (!(await Network.getStatus()).connected) {
      await alertNetwork.present();
    }

    Network.addListener("networkStatusChange", async status => {
      if (!status.connected) {
        await alertNetwork.present();
      } else {
        await alertNetwork.dismiss();
      }
    });
  }

  async backButtonStatus() {
    if ((await Device.getInfo()).platform !== "web") {
      App.addListener("backButton", async () => {
        if (this.router.url.includes("/tabs/")) {
          this.backButtonCount++;

          switch (this.backButtonCount) {
            case 1:
              Toast.show({
                text: "Pulsa de nuevo para salir de la aplicación."
              });
              break;

            default:
              App.exitApp();
          }
        } else {
          this.nav.back();
          this.backButtonCount = 0;
        }
      });
    }
  }
}

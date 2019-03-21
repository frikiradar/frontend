import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { AlertController, Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { PushService } from "./services/push.service";
import { UserService } from "./services/user.service";

const { StatusBar, SplashScreen, Device, Geolocation, Network } = Plugins;
LogRocket.init("hlejka/frikiradar");

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private push: PushService,
    private userSvc: UserService,
    private alert: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if ((await Device.getInfo()).platform !== "web") {
        StatusBar.setBackgroundColor({ color: "#1a1a1a" });
        SplashScreen.hide();
        this.push.init();

        const alertNetwork = await this.alert.create({
          header: "Sin conexión a internet",
          message:
            "No tienes conexión a internet en estos momentos. Podrás seguir utilizando la aplicación en cuanto vuelvas a tener red.",
          backdropDismiss: false
        });

        Network.addListener("networkStatusChange", async status => {
          if (!status.connected) {
            await alertNetwork.present();
          } else {
            await alertNetwork.dismiss();
          }
        });
      }

      LogRocket.init("hlejka/frikiradar");

      this.auth.currentUser.subscribe(async authUser => {
        this.currentUser = authUser;

        if (authUser && authUser.id && !authUser.roles.includes("ROLE_ADMIN")) {
          LogRocket.identify(`${authUser.id}`, {
            name: authUser.username,
            email: authUser.email
          });

          try {
            const coordinates = await Geolocation.getCurrentPosition();
            const longitude = coordinates.coords.longitude;
            const latitude = coordinates.coords.latitude;
            this.userSvc.setCoordinates(longitude, latitude);
          } catch (e) {
            this.userSvc.setCoordinates(0, 0);
          }
        }
      });
    });
  }
}

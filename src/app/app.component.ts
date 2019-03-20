import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { PushService } from "./services/push.service";

const { StatusBar, SplashScreen, Device } = Plugins;
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
    private push: PushService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if ((await Device.getInfo()).platform !== "web") {
        StatusBar.setBackgroundColor({ color: "#1a1a1a" });
        SplashScreen.hide();
        this.push.init();
      }

      LogRocket.init("hlejka/frikiradar");

      this.auth.currentUser.subscribe(authUser => {
        this.currentUser = authUser;

        if (authUser && authUser.id) {
          LogRocket.identify(`${authUser.id}`, {
            name: authUser.username,
            email: authUser.email
          });
        }
      });
    });
  }
}

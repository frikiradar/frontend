import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";

const { StatusBar, SplashScreen } = Plugins;
LogRocket.init("hlejka/frikiradar");

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private platform: Platform,
    private auth: AuthService
  ) {
    this.initializeApp();
    this.auth.currentUser.subscribe(authUser => {
      this.currentUser = authUser;

      if (!authUser.id) {
        return;
      }
      LogRocket.identify(`${authUser.id}`, {
        name: authUser.username,
        email: authUser.email

        // Add your own custom user variables here, ie:
        // subscriptionType: 'pro'
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: "#1a1a1a" });
      SplashScreen.hide();
    });
  }
}

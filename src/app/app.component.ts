import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";

import { User } from "./models/user";
import { AuthService } from "./services/auth.service";

const { StatusBar, SplashScreen } = Plugins;

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
    this.auth.currentUser.subscribe(x => (this.currentUser = x));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: "#1a1a1a" });
      SplashScreen.hide();
    });
  }
}

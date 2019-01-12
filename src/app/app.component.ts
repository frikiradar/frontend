import { Component } from "@angular/core";

import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";

const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: "#1a1a1a" });
      SplashScreen.hide();
    });
  }
}

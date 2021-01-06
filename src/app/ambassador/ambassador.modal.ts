import { Component, OnInit } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "ambassador-modal",
  templateUrl: "./ambassador.modal.html",
  styleUrls: ["./ambassador.modal.scss"]
})
export class AmbassadorModal implements OnInit {
  public user: User;
  constructor(
    private modal: ModalController,
    private auth: AuthService,
    private browserTab: BrowserTab,
    private iab: InAppBrowser,
    private platform: Platform
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  public goToPatreon() {
    const url = "https://patreon.com/frikiradar";
    if (this.platform.is("cordova")) {
      this.browserTab.isAvailable().then(isAvailable => {
        if (isAvailable) {
          this.browserTab.openUrl(url);
        } else {
          const browser = this.iab.create(url);
          browser.show();
        }
      });
    } else {
      const browser = this.iab.create(url);
      browser.show();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

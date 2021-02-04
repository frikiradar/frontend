import { Injectable } from "@angular/core";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";
import { Platform } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  constructor(
    private browserTab: BrowserTab,
    private iab: InAppBrowser,
    private platform: Platform
  ) {}

  async openUrl(url: string) {
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
}

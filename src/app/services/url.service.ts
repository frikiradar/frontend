import { Injectable } from "@angular/core";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";
import { Platform } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Router } from "@angular/router";
import { RoomService } from "./room.service";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  constructor(
    private browserTab: BrowserTab,
    private iab: InAppBrowser,
    private platform: Platform,
    private router: Router,
    private roomSvc: RoomService
  ) {}

  async openUrl(event: string | any) {
    let url = "";

    if (typeof event !== "string") {
      event.preventDefault();
    }
    if (
      event?.srcElement?.href &&
      event?.target?.className.includes("linkified")
    ) {
      url = event.srcElement.href;
    } else if (typeof event === "string") {
      url = event;
    }

    if (url) {
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
      return;
    }

    if (event.srcElement.href && event.target.className.includes("mention")) {
      const id = event.target.innerHTML.replace("@", "");
      if (id !== 1) {
        this.router.navigate(["/profile", id]);
      }
      return;
    }

    if (event.srcElement.href && event.target.className.includes("hashtag")) {
      let slug = event.target.innerHTML.replace("#", "");
      slug = slug === "frikiradar" ? "frikiradar-room" : slug;
      const room = await this.roomSvc.getRoom(slug);
      if (room.page) {
        this.router.navigate(["/page", slug]);
      } else {
        this.router.navigate(["/room", slug]);
      }
      return;
    }
  }
}

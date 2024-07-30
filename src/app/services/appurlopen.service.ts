import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { App, URLOpenListenerEvent } from "@capacitor/app";
import { UrlService } from "./url.service";
import { FirebaseMessaging } from "@capacitor-firebase/messaging";

@Injectable({ providedIn: "root" })
export class AppUrlOpenService {
  constructor(private url: UrlService) {}

  async getInitialUrl(): Promise<boolean> {
    const launchUrl = await App.getLaunchUrl();
    if (launchUrl && launchUrl.url) {
      await this.url.openUrl(launchUrl.url);
      return true;
    }

    return false;
  }
}

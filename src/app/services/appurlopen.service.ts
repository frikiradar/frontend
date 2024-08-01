import { Injectable } from "@angular/core";
import { App } from "@capacitor/app";
import { UrlService } from "./url.service";

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

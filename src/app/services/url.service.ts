import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Browser } from "@capacitor/browser";

@Injectable({
  providedIn: "root",
})
export class UrlService {
  constructor(private router: Router) {}

  async openUrl(event: string | any) {
    let url = "";
    if (typeof event !== "string" && event?.srcElement?.href) {
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
      url = this.convertUrl(url);
      if (url.charAt(0) == "/") {
        this.router.navigate([url]);
      } else {
        Browser.open({ url });
        return;
      }
    }

    if (event.srcElement?.href && event.target.className.includes("mention")) {
      const id = event.target.innerHTML.replace("@", "");
      if (id !== 1) {
        this.router.navigate(["/profile", id]);
      }
      return;
    }

    if (event.srcElement?.href && event.target.className.includes("hashtag")) {
      let slug = event.target.innerHTML.replace("#", "");

      this.router.navigate(["/page", slug]);
      return;
    }
  }

  private convertUrl(url: string): string {
    // si estoy en app y recibo https://frikiradar.app/albertoi -> convierto a /albertoi
    if (url.includes("https://frikiradar.app/")) {
      url = url.replace("https://frikiradar.app/", "/");
    }

    return url;
  }
}

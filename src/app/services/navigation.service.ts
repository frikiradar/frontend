import { Injectable } from "@angular/core";
import { Router, NavigationEnd, UrlTree } from "@angular/router";
import { NavController, Platform, isPlatform } from "@ionic/angular";
import { NavigationOptions } from "@ionic/angular/common/providers/nav-controller";

@Injectable({ providedIn: "root" })
export class NavService {
  private history: string[] = [];

  constructor(
    private router: Router,
    private nav: NavController,
    private platform: Platform
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.history[this.history.length - 1] !== event.urlAfterRedirects) {
          this.history.push(event.urlAfterRedirects);
        }
      }
    });
  }

  back(): void {
    const currentUrl = this.history[this.history.length - 1];
    if (currentUrl == "/edit-profile") {
      this.nav.navigateRoot("/profile");
    } else if (
      currentUrl.startsWith("/tabs/radar") ||
      currentUrl.startsWith("/login") ||
      currentUrl == "/"
    ) {
      if (isPlatform("capacitor")) {
        navigator["app"].exitApp();
      } else {
        window.close();
      }
    } else if (this.history.length > 1) {
      this.history.pop();
      this.nav.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  navigateRoot(url: string | any[] | UrlTree, options?: NavigationOptions) {
    this.nav.navigateRoot(url, options);
  }

  async backButtonStatus() {
    this.platform.backButton.subscribeWithPriority(1, async () => {
      this.back();
    });
  }
}

import { Injectable } from "@angular/core";
import { Router, NavigationEnd, UrlTree } from "@angular/router";
import { NavController, Platform } from "@ionic/angular";
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
    if (
      currentUrl.startsWith("/tabs/radar") ||
      currentUrl.startsWith("/login")
    ) {
      navigator["app"].exitApp();
    } else if (this.history.length > 1) {
      this.history.pop();
      this.nav.back();
    } else {
      navigator["app"].exitApp();
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

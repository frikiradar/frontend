import { Injectable } from "@angular/core";
import { Router, NavigationEnd, UrlTree } from "@angular/router";
import {
  ModalController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { NavigationOptions } from "@ionic/angular/providers/nav-controller";

@Injectable({ providedIn: "root" })
export class NavService {
  private history: string[] = [];
  private backButtonCount = 0;

  constructor(
    private router: Router,
    private nav: NavController,
    private platform: Platform,
    private toast: ToastController,
    private modalController: ModalController
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
        this.backButtonCount = 0;
      }
    });
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
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
      if (
        this.router.url.includes("chat") &&
        (await this.modalController.getTop())
      ) {
        this.modalController.dismiss();
      } else if (
        this.router.url.includes("/tabs/") ||
        this.router.url === "/"
      ) {
        this.backButtonCount++;

        if (this.backButtonCount === 1) {
          (
            await this.toast.create({
              message: "Pulsa de nuevo para salir de la aplicación",
              duration: 2000,
              position: "bottom",
            })
          ).present();
        } else if (this.backButtonCount >= 2) {
          navigator["app"].exitApp();
        }
      } else {
        this.back();
        this.backButtonCount = 0;
      }
    });
  }
}

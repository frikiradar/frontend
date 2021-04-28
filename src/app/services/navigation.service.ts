import { Injectable } from "@angular/core";
import { Router, NavigationEnd, UrlTree } from "@angular/router";
import { NavController } from "@ionic/angular";
import { NavigationOptions } from "@ionic/angular/providers/nav-controller";

@Injectable({ providedIn: "root" })
export class NavService {
  private history: string[] = [];

  constructor(private router: Router, private nav: NavController) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
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
}

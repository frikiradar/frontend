import { Injectable, NgZone } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from "@angular/router";
import { NavController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class TabGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private nav: NavController,
    private ngZone: NgZone
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.auth.currentUserValue &&
      !this.auth?.isAdult() &&
      (state.url === "/" || state.url === "/tabs/radar")
    ) {
      this.ngZone.run(() => this.nav.navigateRoot(["/tabs/community"])).then();

      return false;
    } else {
      return true;
    }
  }
}

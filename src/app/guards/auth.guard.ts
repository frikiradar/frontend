import { Injectable, NgZone } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { NavController } from "@ionic/angular";

import { AuthService } from "./../services/auth.service";
import { GoogleAuthService } from "../services/google-auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(
    private auth: AuthService,
    private googleAuth: GoogleAuthService,
    private nav: NavController,
    private ngZone: NgZone
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
      if (currentUser.google_token) {
        return await this.googleAuth.checkGoogleLogin();
      }
      // logged in so return true
      if (!currentUser.active) {
        // El usuario no está activo
        this.ngZone
          .run(() => this.nav.navigateRoot(["/login/activate-account"]))
          .then();

        return false;
      } else if (currentUser.banned) {
        // El usuario está baneado
        this.ngZone
          .run(() => this.nav.navigateRoot(["/login/banned-account"]))
          .then();

        return false;
      } else {
        return true;
      }
    } else if (
      state.url.includes("/profile") ||
      state.url.includes("/page") ||
      state.url.includes("/unsubscribe")
    ) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.nav.navigateRoot(["/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}

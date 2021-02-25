import { Injectable, NgZone } from "@angular/core";
import { CanActivate } from "@angular/router";
import { NavController } from "@ionic/angular";

import { AuthService } from "./../services/auth.service";

@Injectable({ providedIn: "root" })
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private nav: NavController,
    private ngZone: NgZone
  ) {}

  async canActivate() {
    // logged in so return true
    if (!this.auth.isAdmin() && !this.auth.isMaster()) {
      // El usuario no está activo
      await this.auth.logout();

      return false;
    } else {
      return true;
    }
  }
}

import { Injectable, NgZone } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from "@angular/router";
import { NavController } from "@ionic/angular";

import { DeviceService } from "../services/device.service";
import { AuthService } from "./../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private device: DeviceService,
    private nav: NavController,
    private ngZone: NgZone
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
      // logged in so return true
      if (!currentUser.active) {
        // El usuario no está activo
        this.ngZone
          .run(() => this.nav.navigateRoot(["/login/activate-account"]))
          .then();

        return false;
      } else {
        // El dispositivo utilizado es desconocido
        const device = await this.device.getCurrentDevice();
        const devices = await this.device.getDevices();
        if (device === undefined) {
          return true;
        }

        if (
          devices.length &&
          !devices.some(d => d.device_name === device.device_name)
        ) {
          // dispositivo desconocido, enviar email avisando
          await this.device.unknownDevice(device).toPromise();
        }
        this.device.setDevice();

        return true;
      }
    }

    // not logged in so redirect to login page with the return url
    this.nav.navigateRoot(["/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}

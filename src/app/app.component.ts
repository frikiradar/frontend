import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import {
  AlertController,
  ModalController,
  NavController,
  Platform
} from "@ionic/angular";
import * as LogRocket from "logrocket";

import { ActivateAccountModal } from "./login/activate-account/activate-account.modal";
import { UnknownDeviceModal } from "./login/unknown-device/unknown-device.modal";
import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { DeviceService } from "./services/device.service";

const { StatusBar, SplashScreen, Device, Network, App, Toast } = Plugins;
LogRocket.init("hlejka/frikiradar");

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: User;
  backButtonCount = 0;

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private device: DeviceService,
    private alert: AlertController,
    private modal: ModalController,
    private router: Router,
    private nav: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if ((await Device.getInfo()).platform !== "web") {
        SplashScreen.hide();
        StatusBar.setBackgroundColor({ color: "#1a1a1a" });
        this.networkStatus();
        this.backButtonStatus();
      }
    });

    this.auth.currentUser.subscribe(async authUser => {
      this.currentUser = authUser;

      if (authUser && authUser.id) {
        if (!authUser.roles.includes("ROLE_ADMIN")) {
          LogRocket.init("hlejka/frikiradar");
          LogRocket.identify(`${authUser.id}`, {
            name: authUser.username,
            email: authUser.email
          });
        }

        if (!authUser.active) {
          // El usuario no está activo
          const modal = await this.modal.create({
            component: ActivateAccountModal,
            backdropDismiss: false
          });
          return await modal.present();
        } else {
          // El dispositivo utilizado es desconocido
          const device = await this.device.getCurrentDevice();
          const devices = await this.device.getDevices();
          if (
            devices.length &&
            !devices.some(d => d.device_id === device.device_id)
          ) {
            const modal = await this.modal.create({
              component: UnknownDeviceModal,
              backdropDismiss: false
            });
            return await modal.present();
          }
        }
      }
    });
  }

  async networkStatus() {
    const alertNetwork = await this.alert.create({
      header: "Sin conexión a internet",
      message:
        "No tienes conexión a internet en estos momentos. Podrás seguir utilizando la aplicación en cuanto vuelvas a tener red.",
      backdropDismiss: false
    });

    if (!(await Network.getStatus()).connected) {
      await alertNetwork.present();
    }

    Network.addListener("networkStatusChange", async status => {
      if (!status.connected) {
        await alertNetwork.present();
      } else {
        await alertNetwork.dismiss();
      }
    });
  }

  async backButtonStatus() {
    if ((await Device.getInfo()).platform !== "web") {
      App.addListener("backButton", async () => {
        if (this.router.url.includes("/tabs/")) {
          this.backButtonCount++;

          switch (this.backButtonCount) {
            case 1:
              Toast.show({
                text: "Pulsa de nuevo para salir de la aplicación."
              });
              break;

            default:
              App.exitApp();
          }
        } else {
          this.nav.back();
          this.backButtonCount = 0;
        }
      });
    }
  }
}

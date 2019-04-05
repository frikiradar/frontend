import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import * as LogRocket from "logrocket";

import { ActivateAccountModal } from "./login/activate-account/activate-account.modal";
import { UnknownDeviceModal } from "./login/unknown-device/unknown-device.modal";
import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { DeviceService } from "./services/device.service";
import { PushService } from "./services/push.service";
import { UserService } from "./services/user.service";

const {
  StatusBar,
  SplashScreen,
  Device,
  Geolocation,
  Network,
  App,
  Toast
} = Plugins;
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
    private push: PushService,
    private device: DeviceService,
    private userSvc: UserService,
    private alert: AlertController,
    private modal: ModalController,
    private router: Router,
    private location: Location
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if ((await Device.getInfo()).platform !== "web") {
        StatusBar.setBackgroundColor({ color: "#1a1a1a" });
        SplashScreen.hide();
        this.networkStatus();
        this.backButtonStatus();
      }

      this.auth.currentUser.subscribe(async authUser => {
        this.currentUser = authUser;

        if (authUser && authUser.id) {
          if (!authUser.roles.includes("ROLE_ADMIN")) {
            LogRocket.init("hlejka/frikiradar");
            LogRocket.identify(`${authUser.id}`, {
              name: authUser.username,
              email: authUser.email
            });

            try {
              const coordinates = await Geolocation.getCurrentPosition();
              const longitude = coordinates.coords.longitude;
              const latitude = coordinates.coords.latitude;
              this.userSvc.setCoordinates(longitude, latitude);
            } catch (e) {
              this.userSvc.setCoordinates(0, 0);
            }
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
            } else if (!devices.length) {
              this.device.setDevice();
            }
          }

          if ((await Device.getInfo()).platform !== "web") {
            this.push.init();
          }
        }
      });
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
        if (this.router.url === "/tabs/radar") {
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
          if (this.router.url.includes("/chat/")) {
            this.location.back();
          }
          this.backButtonCount = 0;
        }
      });
    }
  }
}

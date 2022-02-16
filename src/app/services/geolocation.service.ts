import { Injectable } from "@angular/core";
import { Geolocation } from "@capacitor/geolocation";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { ModalController, Platform, ToastController } from "@ionic/angular";

import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  notifications: any = [];

  constructor(
    private modal: ModalController,
    private config: ConfigService,
    private locationAccuracy: LocationAccuracy,
    private platform: Platform,
    private toastController: ToastController
  ) {}

  async requestPermission() {
    const modal = await this.modal.create({
      component: RequestGeolocationModal,
      backdropDismiss: false,
    });
    await modal.present();
    return await modal.onDidDismiss();
  }

  async forcePermission() {
    const modal = await this.modal.create({
      component: RequestGeolocationModal,
      componentProps: { view: "force" },
      backdropDismiss: false,
    });
    await modal.present();
    return await modal.onDidDismiss();
  }

  async getGeolocation(): Promise<{ longitude: number; latitude: number }> {
    const geoconfig = await this.config.get("geolocation");
    if (geoconfig === true) {
      return await this.getCoordinates();
    } else {
      await this.requestPermission();
      return await this.getCoordinates();
    }
  }

  async getCoordinates() {
    try {
      (
        await this.toastController.create({
          message: "Obteniendo tu ubicación",
          position: "middle",
          color: "secondary",
        })
      ).present();

      if (this.platform.is("cordova")) {
        await this.locationAccuracy.request(
          this.locationAccuracy.REQUEST_PRIORITY_LOW_POWER
        );
      }

      const coordinates = await Geolocation.getCurrentPosition();
      const longitude = coordinates.coords.longitude;
      const latitude = coordinates.coords.latitude;
      this.config.set("geolocation", true);
      this.toastController.dismiss();
      return { longitude, latitude };
    } catch (e) {
      // this.config.set("geolocation", false);
      this.config.set("geolocation", true);
      this.toastController.dismiss();
      // await this.forcePermission();
      // return await this.getCoordinates();
      return { longitude: 0, latitude: 0 };
    }
  }
}

import { Injectable } from "@angular/core";
import { Geolocation } from "@capacitor/geolocation";
import { ModalController, ToastController } from "@ionic/angular";

import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  notifications: any = [];

  constructor(
    private modalController: ModalController,
    private config: ConfigService,
    private toastController: ToastController
  ) {}

  async requestPermission() {
    const modal = await this.modalController.create({
      component: RequestGeolocationModal,
      backdropDismiss: false,
    });
    await modal.present();
    return await modal.onDidDismiss();
  }

  async forcePermission() {
    const modal = await this.modalController.create({
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

      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 15000,
      });
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

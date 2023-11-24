import { Injectable } from "@angular/core";
import { Geolocation } from "@capacitor/geolocation";
import { ModalController, ToastController } from "@ionic/angular";

import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ConfigService } from "./config.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  notifications: any = [];

  constructor(
    private modalController: ModalController,
    private config: ConfigService,
    private toastController: ToastController,
    private auth: AuthService
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

  async getGeolocation(): Promise<{
    longitude?: number;
    latitude?: number;
    city?: string;
    country?: string;
  }> {
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
      let data: { city?: string; country?: string } = {};
      const geoconfig = await this.config.get("geolocation");
      // falla la geolocalización pero tiene activada la manual, entonces se usa la manual
      const user = this.auth.currentUserValue;
      if (geoconfig === true && user.city && user.country) {
        const user = this.auth.currentUserValue;
        return {
          city: user.city,
          country: user.country,
        };
      } else {
        this.config.set("geolocation", false);
        this.toastController.dismiss();
        const res = await this.forcePermission();
        data = res.data;
        if (data.city && data.country) {
          this.config.set("geolocation", true);
          this.toastController.dismiss();
          return data;
        }
      }
      return await this.getCoordinates();
    }
  }
}

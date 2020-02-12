import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController, ModalController } from "@ionic/angular";

import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root"
})
export class GeolocationService {
  notifications: any = [];

  constructor(
    private modal: ModalController,
    private geolocation: Geolocation,
    private config: ConfigService,
    private loading: LoadingController
  ) {}

  async requestPermission() {
    const modal = await this.modal.create({
      component: RequestGeolocationModal,
      backdropDismiss: false
    });
    await modal.present();
    const data = await modal.onDidDismiss();

    this.config.set("geolocation", true);
    return data.data;
  }

  async forcePermission() {
    this.config.set("geolocation", false);
    const modal = await this.modal.create({
      component: RequestGeolocationModal,
      componentProps: { view: "force" },
      backdropDismiss: false
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    return data.data;
  }

  async getGeolocation(): Promise<{ longitude: number; latitude: number }> {
    const geoconfig = await this.config.get("geolocation");
    if (geoconfig === true) {
      return await this.getCoordinates();
    } else {
      return await this.requestPermission();
    }
  }

  async getCoordinates() {
    try {
      const loading = await this.loading.create({
        translucent: true,
        message: "Cargando"
      });
      await loading.present();

      const coordinates = await this.geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
      });
      const longitude = coordinates.coords.longitude;
      const latitude = coordinates.coords.latitude;
      this.config.set("geolocation", true);
      this.loading.dismiss();

      return { longitude, latitude };
    } catch (e) {
      this.loading.dismiss();
      return await this.requestPermission();
    }
  }
}

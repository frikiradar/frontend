import { Component } from "@angular/core";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ModalController, Platform } from "@ionic/angular";

@Component({
  selector: "request-geolocation-modal",
  templateUrl: "./request-geolocation.modal.html",
  styleUrls: ["./request-geolocation.modal.scss"]
})
export class RequestGeolocationModal {
  public view: "request" | "force" = "request";

  constructor(
    private modal: ModalController,
    private geolocation: Geolocation,
    public platform: Platform,
    private diagnostic: Diagnostic
  ) {}

  async getCoordinates() {
    try {
      const coordinates = await this.geolocation.getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 10000
      });
      const longitude = coordinates.coords.longitude;
      const latitude = coordinates.coords.latitude;

      this.close({ longitude, latitude });
    } catch (e) {
      this.view = "force";
    }
  }

  async openSettings() {
    await this.diagnostic.switchToSettings();
    this.view = "request";
  }

  close(data: { longitude: number; latitude: number }) {
    this.modal.dismiss(data);
  }
}

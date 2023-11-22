import { Geolocation } from "@capacitor/geolocation";
import { Component } from "@angular/core";
import { ModalController, isPlatform } from "@ionic/angular";
import {
  NativeSettings,
  AndroidSettings,
  IOSSettings,
} from "capacitor-native-settings";

@Component({
  selector: "request-geolocation-modal",
  templateUrl: "./request-geolocation.modal.html",
  styleUrls: ["./request-geolocation.modal.scss"],
})
export class RequestGeolocationModal {
  public view: "request" | "force" = "request";
  public isPlatform = isPlatform;

  constructor(private modalController: ModalController) {}

  async changeSettings() {
    const result = await Geolocation.checkPermissions();
    if (result.location === "prompt") {
      this.view = "request";
    } else {
      const settings = await NativeSettings.open({
        optionAndroid: AndroidSettings.ApplicationDetails,
        optionIOS: IOSSettings.App,
      });

      if (settings.status) {
        this.view = "request";
      } else {
        this.view = "force";
      }
    }
  }

  close(data: boolean) {
    this.modalController.dismiss(data);
  }
}

import { Component } from "@angular/core";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
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
    public platform: Platform,
    private diagnostic: Diagnostic,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy
  ) {}

  async changeSettings() {
    if (this.platform.is("android")) {
      const check = await this.androidPermissions.checkPermission(
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
      );
      if (check.hasPermission) {
        await this.locationAccuracy.request(
          this.locationAccuracy.REQUEST_PRIORITY_LOW_POWER
        );
      } else {
        await this.diagnostic.switchToSettings();
      }
    } else {
      await this.diagnostic.switchToSettings();
    }
    this.view = "request";
  }

  close(data: boolean) {
    this.modal.dismiss(data);
  }
}

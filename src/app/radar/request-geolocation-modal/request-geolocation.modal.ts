import { Geolocation } from "@capacitor/geolocation";
import { Component } from "@angular/core";
import { ModalController, isPlatform } from "@ionic/angular";
import {
  NativeSettings,
  AndroidSettings,
  IOSSettings,
} from "capacitor-native-settings";
import { UtilsService } from "src/app/services/utils.service";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user";

@Component({
    selector: "request-geolocation-modal",
    templateUrl: "./request-geolocation.modal.html",
    styleUrls: ["./request-geolocation.modal.scss"],
    standalone: false
})
export class RequestGeolocationModal {
  public view: "request" | "force" = "request";
  public isPlatform = isPlatform;
  public manualGeolocationModal = false;
  public countries: string[] = [];
  private user: User;

  constructor(
    private modalController: ModalController,
    private utils: UtilsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

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

  changePreferences(property: string, value: string) {
    if (property === "country") {
      this.user.country = value;
    }

    if (property === "city") {
      this.user.city = value;
    }
  }

  showManualGeolocation() {
    this.countries = this.utils.getCountries();
    this.manualGeolocationModal = true;
  }

  async savePreferences() {
    this.manualGeolocationModal = false;

    if (this.user.country && this.user.city) {
      const data = {
        country: this.user.country,
        city: this.user.city,
      };
      await this.modalController.dismiss();
      this.close(data);
    }
  }

  close(data: boolean | { country: string; city: string }) {
    this.modalController.dismiss(data);
  }
}

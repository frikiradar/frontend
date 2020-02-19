import { Component } from "@angular/core";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
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
    private diagnostic: Diagnostic
  ) {}

  async openSettings() {
    await this.diagnostic.switchToSettings();
    this.view = "request";
  }

  close(data: boolean) {
    this.modal.dismiss(data);
  }
}

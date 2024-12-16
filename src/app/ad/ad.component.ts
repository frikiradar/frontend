import { Component, Input } from "@angular/core";

import { Ad } from "../models/ad";
import { UrlService } from "../services/url.service";
import { AdService } from "../services/ad.service";
import { ModalController } from "@ionic/angular";
import { UnlimitedModal } from "../unlimited/unlimited.modal";

@Component({
    selector: "app-ad",
    templateUrl: "./ad.component.html",
    styleUrls: ["./ad.component.scss"],
    standalone: false
})
export class AdComponent {
  @Input() ad: Ad;
  public adViewed = true;
  public counter = 10;

  constructor(
    private urlSvc: UrlService,
    private adSvc: AdService,
    private modalController: ModalController,
    private subModal: ModalController
  ) {}

  ionViewDidEnter() {
    this.startTimer();
  }

  async startTimer() {
    const modal = await this.modalController.getTop();
    if (modal) {
      this.adViewed = false;
      const intervalId = setInterval(() => {
        if (this.counter > 1) {
          this.counter--;
        } else {
          clearInterval(intervalId);
          this.adViewed = true;
        }
      }, 1000); // 1 segundo
    }
  }

  async openUrl() {
    this.urlSvc.openUrl(this.ad.url);
    this.adSvc.clickAd(this.ad);
    return false;
  }

  async close() {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss(this.adViewed);
    } else {
      const modal = await this.subModal.create({
        component: UnlimitedModal,
        cssClass: "vertical-modal",
        componentProps: { topic: "ad" },
      });
      return await modal.present();
    }
  }
}

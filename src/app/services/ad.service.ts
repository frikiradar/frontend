import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { ModalController, isPlatform } from "@ionic/angular";
import { AdMob, AdmobConsentStatus } from "@capacitor-community/admob";

import { RestService } from "./rest.service";
import { Ad } from "../models/ad";
import { AdComponent } from "../ad/ad.component";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AdService {
  private ads = new BehaviorSubject<any[]>([]);
  private shownAds: Ad["id"][] = [];

  constructor(
    private rest: RestService,
    private modalCtrl: ModalController,
    private auth: AuthService
  ) {}

  async init() {
    if (!this.auth.isPremium()) {
      if (isPlatform("capacitor")) {
        await AdMob.initialize();

        const [trackingInfo, consentInfo] = await Promise.all([
          AdMob.trackingAuthorizationStatus(),
          AdMob.requestConsentInfo(),
        ]);

        if (trackingInfo.status === "notDetermined") {
          /**
           * If you want to explain TrackingAuthorization before showing the iOS dialog,
           * you can show the modal here.
           * ex)
           * const modal = await this.modalCtrl.create({
           *   component: RequestTrackingPage,
           * });
           * await modal.present();
           * await modal.onDidDismiss();  // Wait for close modal
           **/

          await AdMob.requestTrackingAuthorization();
        }

        const authorizationStatus = await AdMob.trackingAuthorizationStatus();
        if (
          authorizationStatus.status === "authorized" &&
          consentInfo.isConsentFormAvailable &&
          consentInfo.status === AdmobConsentStatus.REQUIRED
        ) {
          await AdMob.showConsentForm();
        }
      }

      // Cargamos los anuncios de patrocinadores
      this.getActiveAds();
    }
  }

  setAds(ads: Ad[]) {
    this.ads.next(ads);
  }

  getAds(): Ad[] {
    return this.ads.value;
  }

  async getActiveAds(): Promise<Ad[]> {
    if (!this.auth.isPremium()) {
      const ads = (await this.rest.get("ads")) as Ad[];
      this.setAds(ads);
      return ads;
    } else {
      return [];
    }
  }

  async getAd(id: number, force = false): Promise<Ad> {
    const ads = this.getAds();
    const ad = ads.find((ad) => ad.id === id);
    if (ad && !force) {
      return ad;
    } else {
      return (await this.rest.get(`ads/${id}`)) as Ad;
    }
  }

  getRandomAd(): Ad | null {
    const ads = this.getAds().filter((ad) => !this.shownAds.includes(ad.id));
    const random = Math.floor(Math.random() * 3);
    if (random === 0 && ads.length > 0) {
      const randomAdIndex = Math.floor(Math.random() * ads.length);
      const ad = ads[randomAdIndex];
      this.shownAds.push(ad.id);
      return ad;
    } else {
      return null;
    }
  }
  async showRandomAd() {
    const ad = this.getRandomAd();
    if (ad !== null) {
      const modal = await this.modalCtrl.create({
        component: AdComponent,
        componentProps: {
          ad,
        },
        cssClass: "vertical-modal",
      });

      await modal.present();
    }
  }

  async viewAd(ad: Ad) {
    if (!this.auth.isMaster() && this.auth.currentUserValue.id !== ad.user.id) {
      await this.rest.post(`ads/${ad.id}/view`);
    }
  }

  async clickAd(ad: Ad) {
    if (!this.auth.isMaster() && this.auth.currentUserValue.id !== ad.user.id) {
      await this.rest.post(`ads/${ad.id}/click`);
    }
  }
}

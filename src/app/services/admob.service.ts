import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from "@ionic-native/admob-free/ngx";
import { Platform } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class AdmobService {
  private adViewedSubject: BehaviorSubject<boolean>;
  public adViewed: Observable<boolean>;

  // Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    // isTesting: true,
    autoShow: false,
    id: this.platform.is("android")
      ? "ca-app-pub-8367506635932865/9149948783"
      : "ca-app-pub-8367506635932865/9057092208"
  };

  // Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    // isTesting: true, // Remove in production
    autoShow: false,
    id: this.platform.is("android")
      ? "ca-app-pub-8367506635932865/5790990999"
      : "ca-app-pub-8367506635932865/7217504726"
  };

  constructor(
    private admobFree: AdMobFree,
    public platform: Platform,
    private auth: AuthService
  ) {
    platform.ready().then(() => {
      this.adViewedSubject = new BehaviorSubject<boolean>(false);
      this.adViewed = this.adViewedSubject.asObservable();

      if (this.platform.is("cordova")) {
        // Handle interstitial's close event to Prepare Ad again
        this.admobFree.on("admob.interstitial.events.CLOSE").subscribe(() => {
          this.admobFree.interstitial
            .prepare()
            .then(() => {
              console.error("Interstitial CLOSE");
            })
            .catch(e => console.error(e));
        });
        // Handle Reward's close event to Prepare Ad again
        this.admobFree.on("admob.rewardvideo.events.CLOSE").subscribe(() => {
          this.admobFree.rewardVideo
            .prepare()
            .then(() => {
              console.error("Reward Video CLOSE");
              this.adViewedSubject.next(false);
            })
            .catch(e => console.error(e));
        });

        // Recompensa adquirida
        this.admobFree.on("admob.rewardvideo.events.REWARD").subscribe(() => {
          console.log("Recompensa adquirida");
          this.adViewedSubject.next(true);
        });

        this.admobFree
          .on("admob.rewardvideo.events.LOAD_FAIL")
          .subscribe(error => {
            console.log("Carga fallida", error);
            if (error.error === 3) {
              this.adViewedSubject.next(true);
            }
          });

        this.admobFree.on("admob.rewardvideo.events.LOAD").subscribe(() => {
          console.log("Cargado");
        });
      }
    });
  }

  public get adsViewedValue(): boolean {
    return this.adViewedSubject.value;
  }

  init() {
    if (this.auth.currentUserValue && !this.auth.currentUserValue.is_premium) {
      // Load ad configuration
    }
  }

  BannerAd() {
    if (this.auth.currentUserValue && !this.auth.currentUserValue.is_premium) {
      const bannerConfig: AdMobFreeBannerConfig = {
        // isTesting: true, // Remove in production
        autoShow: true,
        id: this.platform.is("android")
          ? "ca-app-pub-8367506635932865/5482166517"
          : "ca-app-pub-8367506635932865/1749555622"
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner
        .prepare()
        .then(() => {
          // success
        })
        .catch(e => console.error(e));
    }
  }

  BannerAdRemove() {
    if (this.auth.currentUserValue && !this.auth.currentUserValue.is_premium) {
      this.admobFree.banner
        .remove()
        .then(() => {
          // success
        })
        .catch(e => console.error(e));
    }
  }

  InterstitialAd() {
    if (this.auth.currentUserValue && !this.auth.currentUserValue.is_premium) {
      this.admobFree.interstitial.config(this.interstitialConfig);
      // Prepare Ad to Show
      this.admobFree.interstitial
        .prepare()
        .then(() => {
          // Check if Ad is loaded
          this.admobFree.interstitial
            .isReady()
            .then(() => {
              // Will show prepared Ad
              this.admobFree.interstitial
                .show()
                .then(e => {
                  console.log(`InterstitialAd cargado ${e}`);
                })
                .catch(e => console.error(`show ${e}`));
            })
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e));
    }
  }

  RewardVideoAd() {
    if (this.auth.currentUserValue && !this.auth.currentUserValue.is_premium) {
      // Load ad configuration
      this.admobFree.rewardVideo.config(this.RewardVideoConfig);
      // Prepare Ad to Show
      this.admobFree.rewardVideo
        .prepare()
        .then(() => {
          // Check if Ad is loaded
          this.admobFree.rewardVideo
            .isReady()
            .then(() => {
              // Will show prepared Ad
              this.admobFree.rewardVideo
                .show()
                .then(e => {
                  console.log(`RewardVideoAd cargado ${e}`);
                })
                .catch(e => console.error(`show ${e}`));
            })
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e));
    }
  }
}

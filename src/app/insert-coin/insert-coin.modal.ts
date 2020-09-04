import { Component } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";

import { User } from "../models/user";
import { AdmobService } from "./../services/admob.service";
import { AuthService } from "./../services/auth.service";
import { PremiumModal } from "./premium/premium.modal";

@Component({
  selector: "insert-coin-modal",
  templateUrl: "./insert-coin.modal.html",
  styleUrls: ["./insert-coin.modal.scss"]
})
export class InsertCoinModal {
  public user: User;

  constructor(
    private modal: ModalController,
    private newModal: ModalController,
    private admobSvc: AdmobService,
    public auth: AuthService,
    public platform: Platform
  ) {
    this.user = this.auth.currentUserValue;
  }

  async showPremium() {
    const modal = await this.newModal.create({
      component: PremiumModal
    });
    return await modal.present();
  }

  async showPromo() {
    // Método para NO esperar a que vean el video completo
    this.admobSvc.RewardVideoAd();
    this.close(true);

    // Método para esperar a que vean el video completo
    /*this.admobSvc.adViewed.subscribe(adViewed => {
      if (adViewed) {
        this.close(true);
      }
    });*/
  }

  close(data?: any) {
    this.modal.dismiss(data);
  }
}

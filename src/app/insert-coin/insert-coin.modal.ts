import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { AdmobService } from "./../services/admob.service";
import { AuthService } from "./../services/auth.service";
import { CreditsModal } from "./credits/credits.modal";
import { PremiumModal } from "./premium/premium.modal";

@Component({
  selector: "insert-coin-modal",
  templateUrl: "./insert-coin.modal.html",
  styleUrls: ["./insert-coin.modal.scss"]
})
export class InsertCoinModal implements OnInit {
  constructor(
    private modal: ModalController,
    private newModal: ModalController,
    private admobSvc: AdmobService,
    public auth: AuthService
  ) {}

  async ngOnInit() {}

  async showCredits() {
    if (this.auth.currentUserValue.credits) {
      // gastamos creditos y accedemos
      return true;
    } else {
      const modal = await this.newModal.create({
        component: CreditsModal
      });
      return await modal.present();
    }
  }
  async showPremium() {
    const modal = await this.newModal.create({
      component: PremiumModal
    });
    return await modal.present();
  }

  async showPromo() {
    this.admobSvc.RewardVideoAd();
    this.close(true);
  }

  close(data: any) {
    this.modal.dismiss(data);
  }
}

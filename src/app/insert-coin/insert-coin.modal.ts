import { Component } from "@angular/core";
import {
  AlertController,
  ModalController,
  Platform,
  ToastController
} from "@ionic/angular";

import { User } from "../models/user";
import { AdmobService } from "./../services/admob.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";
import { CreditsModal } from "./credits/credits.modal";
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
    private userSvc: UserService,
    private alert: AlertController,
    private toast: ToastController,
    public platform: Platform
  ) {
    this.user = this.auth.currentUserValue;
  }

  async showCredits() {
    if (this.auth.currentUserValue.credits) {
      try {
        const user = await this.userSvc.insertCoin(1);
        this.auth.setAuthUser(user);
        // gastamos creditos y accedemos
        (
          await this.toast.create({
            message: `Clic! Has introducido la moneda`,
            duration: 500,
            position: "bottom"
          })
        ).present();
        setTimeout(async () => {
          this.close(true);
          (
            await this.toast.create({
              message: `Accediendo...`,
              duration: 2000,
              position: "bottom"
            })
          ).present();
        }, 1500);
      } catch (e) {
        const alert = await this.alert.create({
          header: "Error al insertar los créditos",
          message: "Ten cuidado que no se te caigan las monedas al suelo.",
          buttons: ["Ok, tendré cuidado"]
        });

        alert.present();
      }
    } else {
      const modal = await this.newModal.create({
        component: CreditsModal
      });
      await modal.present();
      const res = await modal.onDidDismiss();
      if (res.data) {
        this.user = this.auth.currentUserValue;
      }
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

    this.admobSvc.adViewed.subscribe(adViewed => {
      if (adViewed) {
        this.close(true);
      }
    });
  }

  close(data?: any) {
    this.modal.dismiss(data);
  }
}

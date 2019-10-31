import { ChangeDetectorRef, Component } from "@angular/core";
import {
  LoadingController,
  ModalController,
  ToastController
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { Product } from "src/app/services/product.service";
import { StoreService } from "src/app/services/store.service";
import { PremiumModal } from "../premium/premium.modal";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "credits-modal",
  templateUrl: "./credits.modal.html",
  styleUrls: ["./credits.modal.scss"]
})
export class CreditsModal {
  public products: Product[] = [];
  public user: User;

  constructor(
    private modal: ModalController,
    private newModal: ModalController,
    public auth: AuthService,
    public storeSvc: StoreService,
    public loading: LoadingController,
    public detectorRef: ChangeDetectorRef,
    private toast: ToastController
  ) {
    this.user = this.auth.currentUserValue;
  }

  async ionViewDidEnter() {
    const loading = await this.loading.create({
      translucent: true,
      message: "Cargando"
    });
    await loading.present();

    if (!this.storeSvc.products) {
      return;
    }

    this.storeSvc.products.subscribe(async products => {
      this.products = products;
      this.detectorRef.detectChanges();

      if (this.products.some(p => p.data.valid)) {
        this.loading
          .getTop()
          .then(v => (v ? this.loading.dismiss() : undefined));
      }

      const product = this.products.filter(
        p => p.data && p.data.state === "finished"
      )[0];
      if (product) {
        // Acabamos de comprar uno de los productos
        (await this.toast.create({
          message: `¡Has añadido correctamente ${product.value} créditos a tu cuenta!`,
          duration: 2000,
          position: "middle"
        })).present();

        this.close(true);
      }
    });

    this.auth.currentUser.subscribe(authUser => this.user);
  }

  async buyCredits(product: Product) {
    this.storeSvc.order(product);
  }

  async showPremium() {
    this.modal.dismiss();
    const modal = await this.newModal.create({
      component: PremiumModal
    });
    return await modal.present();
  }

  close(data?: any) {
    this.modal.dismiss(data);
  }
}

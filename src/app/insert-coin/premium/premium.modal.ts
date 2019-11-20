import { ChangeDetectorRef, Component } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ModalController
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { Product } from "src/app/services/product.service";
import { StoreService } from "src/app/services/store.service";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "premium-modal",
  templateUrl: "./premium.modal.html",
  styleUrls: ["./premium.modal.scss"]
})
export class PremiumModal {
  public products: Product[];
  public user: User;

  constructor(
    private modal: ModalController,
    public auth: AuthService,
    public loading: LoadingController,
    public storeSvc: StoreService,
    private alert: AlertController,
    public detectorRef: ChangeDetectorRef
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
      this.products = products.filter(
        p => p.type === "subscription" && p.data.valid
      );
      this.detectorRef.detectChanges();

      const product = this.products.filter(
        p => p.data && p.data.state === "finished"
      )[0];
      if (product && product.type === "subscription") {
        // Acabamos de suscribirnos

        const alert = await this.alert.create({
          header: "¡Enhorabuena!",
          message: `Has activado FrikiRadar ILIMITADO por ${product.name}. Muchas gracias por confiar en FrikiRadar, esperamos que disfrutes de todas los beneficios obtenidos.`,
          buttons: [
            {
              text: "¡Muchas gracias!",
              handler: () => {
                this.close(true);
                location.reload();
              }
            }
          ]
        });

        alert.present();
      }

      this.loading.getTop().then(v => (v ? this.loading.dismiss() : undefined));
    });
  }

  async subscribePremium(product: Product) {
    this.storeSvc.order(product);
  }

  close(data?: any) {
    this.modal.dismiss(data);
  }
}

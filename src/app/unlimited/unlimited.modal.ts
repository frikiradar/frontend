import { ChangeDetectorRef, Component, Input } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ModalController,
  isPlatform,
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { StoreService } from "src/app/services/store.service";
import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";
import { Product } from "../models/product";
import { RevenuecatService } from "../services/revenuecat.service";
import { PaymentService } from "../services/payment.service";
import { Payment } from "../models/payment";

@Component({
  selector: "unlimited-modal",
  templateUrl: "./unlimited.modal.html",
  styleUrls: ["./unlimited.modal.scss"],
})
export class UnlimitedModal {
  @Input() topic: "ad" | "location" | "radar" | "filter" | "theme" | "default" =
    "default";
  public user: User;
  public isPlatform = isPlatform;
  public products: Product[] = [];
  public selectedCardIndex: number = 0;
  public product: Product;
  public lastMethod: Payment["method"] = undefined;

  constructor(
    private modalController: ModalController,
    public auth: AuthService,
    public loading: LoadingController,
    public storeSvc: StoreService,
    private revenuecat: RevenuecatService,
    private paymentSvc: PaymentService,
    public detectorRef: ChangeDetectorRef,
    private nav: NavService,
    private alert: AlertController
  ) {
    this.user = this.auth.currentUserValue;
  }

  async ionViewDidEnter() {
    const loading = await this.loading.create({
      translucent: true,
      message: "Cargando",
    });

    await loading.present();

    const lastPayment = await this.paymentSvc.getLastPayment();
    if (lastPayment) {
      this.lastMethod = lastPayment["method"];
    }

    if (isPlatform("capacitor")) {
      this.products = await this.storeSvc.getProducts();
      this.product = this.products[0];
      await loading.dismiss();
      this.revenuecat.getCustomerInfo();
    } else {
      if (!this.auth.isPremium()) {
        this.products = await this.storeSvc.getProducts();
        this.product = this.products[0];
      }
      await loading.dismiss();
    }
  }

  selectProduct(product: Product) {
    this.product = product;
    // console.log("product", product);
  }

  async purchaseProduct() {
    try {
      await this.storeSvc.purchaseProduct(this.product);
      const alert = await this.alert.create({
        header: "¡Enhorabuena!",
        message: `Has activado tu suscripción a frikiradar UNLIMITED. Muchas gracias por confiar en frikiradar, esperamos que disfrutes de todas los beneficios obtenidos.`,
        buttons: [
          {
            text: "¡Muchas gracias!",
            handler: () => {
              this.close(true);
              window.location.reload();
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    } catch (error) {}
  }

  async cancelSubscription() {
    await this.storeSvc.cancelSubscription();
  }

  async close(data?: any) {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss(data);
    } else {
      this.nav.back();
    }
  }
}

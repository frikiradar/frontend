import { ChangeDetectorRef, Component, Input } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ModalController,
  isPlatform,
} from "@ionic/angular";
import { PurchasesStoreProduct } from "@revenuecat/purchases-capacitor";

import { User } from "src/app/models/user";
import { StoreService } from "src/app/services/store.service";
import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";
import { Product } from "../models/product";

@Component({
  selector: "unlimited-modal",
  templateUrl: "./unlimited.modal.html",
  styleUrls: ["./unlimited.modal.scss"],
})
export class UnlimitedModal {
  @Input() topic: "ad" | "location" | "radar" | "filter" | "default" =
    "default";
  public user: User;
  public isPlatform = isPlatform;
  public products: Product[] = [];
  public selectedCardIndex: number = 0;
  private product: Product;

  constructor(
    private modalController: ModalController,
    public auth: AuthService,
    public loading: LoadingController,
    public storeSvc: StoreService,
    public detectorRef: ChangeDetectorRef,
    private nav: NavService,
    private alert: AlertController
  ) {
    this.user = this.auth.currentUserValue;
  }

  async ionViewDidEnter() {
    if (isPlatform("capacitor")) {
      const loading = await this.loading.create({
        translucent: true,
        message: "Cargando",
      });

      await loading.present();
      this.products = await this.storeSvc.getProducts();
      this.product = this.products[0];

      await loading.dismiss();
      this.storeSvc.getCustomerInfo();
      /*} else if (this.auth.isAdmin()) {
      let basePricePerMonth = 6; // El precio base por mes del primer producto

      this.products = [
        {
          product: null,
          price: "6,00 €",
          period: { quantity: 1, unit: "mes" },
          price_per_month: "6.00 EUR",
          discount: 0,
        },
        {
          product: null,
          price: "15,00 €",
          period: { quantity: 3, unit: "meses" },
          price_per_month: "5.00 EUR",
          discount: Math.round(
            ((basePricePerMonth - 5) / basePricePerMonth) * 100
          ),
        },
        {
          product: null,
          price: "24,00 €",
          period: { quantity: 6, unit: "meses" },
          price_per_month: "4.00 EUR",
          discount: Math.round(
            ((basePricePerMonth - 4) / basePricePerMonth) * 100
          ),
        },
      ];*/
    }
  }

  selectProduct(product: Product) {
    this.product = product;
  }

  async purchaseProduct() {
    try {
      await this.storeSvc.purchaseProduct(this.product.product);
      const alert = await this.alert.create({
        header: "¡Enhorabuena!",
        message: `Has activado tu suscripción a frikiradar UNLIMITED. Muchas gracias por confiar en frikiradar, esperamos que disfrutes de todas los beneficios obtenidos.`,
        buttons: [
          {
            text: "¡Muchas gracias!",
            handler: () => {
              this.close(true);
              location.reload();
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    } catch (error) {}
  }

  async close(data?: any) {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss(data);
    } else {
      this.nav.back();
    }
  }
}

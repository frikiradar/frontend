import { Injectable } from "@angular/core";
import { AlertController, LoadingController, isPlatform } from "@ionic/angular";
import {
  LOG_LEVEL,
  PURCHASES_ERROR_CODE,
  Purchases,
  PurchasesStoreProduct,
} from "@revenuecat/purchases-capacitor";

import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { UtilsService } from "./utils.service";
import { Product } from "../models/product";
import { environment } from "src/environments/environment";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  private active: string;

  constructor(
    private auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController,
    private utils: UtilsService,
    private loading: LoadingController,
    private url: UrlService
  ) {}

  async init() {
    // await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG }); // Enable to get debug logs
    if (isPlatform("capacitor")) {
      if (isPlatform("android")) {
        await Purchases.configure({
          apiKey: environment.revenueCat.apiKey,
          appUserID: `${this.auth.currentUserValue.id}`,
        });
      }

      Purchases.setAttributes({
        email: this.auth.currentUserValue.email,
        displayName: this.auth.currentUserValue.username,
      });

      const customer = (await this.getCustomerInfo()).customerInfo;
      // console.log("customer", customer);

      const active =
        customer.entitlements.active &&
        customer.entitlements.active["frikiradar unlimited"] &&
        customer.entitlements.active["frikiradar unlimited"].isActive;

      if (active && customer.activeSubscriptions.length > 0) {
        this.active = customer.activeSubscriptions[0];
      }

      if (
        customer.activeSubscriptions.length > 0 &&
        active &&
        customer.latestExpirationDate &&
        new Date(this.auth.currentUserValue.premium_expiration) <
          new Date(customer.latestExpirationDate)
      ) {
        const user = await this.userSvc.subscribePremium(
          customer.latestExpirationDate
        );
        this.auth.setAuthUser(user);
      }
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const offerings = await Purchases.getOfferings();
      if (
        offerings.current !== null &&
        offerings.current.availablePackages.length !== 0
      ) {
        const packages = offerings.current.availablePackages;
        // console.log("packages", packages);
        const storeProducts = packages.map((p) => {
          return p.product;
        });
        // console.log("products", products);

        let basePricePerMonth = Number(storeProducts[0].price);

        const products = storeProducts.map((product) => {
          let totalMonths = this.utils.convertISO8601ToMonths(
            product.subscriptionPeriod
          );
          let pricePerMonth = product.price / totalMonths;
          let discount = Math.round(
            (1 - pricePerMonth / basePricePerMonth) * 100
          );

          return {
            product: product,
            price: product.priceString,
            period: this.utils.convertISO8601ToSpanish(
              product.subscriptionPeriod
            ),
            price_per_month: `${pricePerMonth.toFixed(2)}${
              product.currencyCode
            }`,
            discount,
            active: this.active === product.identifier,
          };
        });
        // console.log("products", products);

        return products;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async purchaseProduct(product: PurchasesStoreProduct): Promise<boolean> {
    const alert = await this.alert.create({
      header: "Error con la transacción",
      message:
        "Ha habido un problema con la compra. Revisa que esté todo bien y vuelve a intentarlo transcurridos unos minutos.",
      buttons: [
        {
          text: "¡Muchas gracias!",
          handler: () => {
            location.reload();
          },
        },
      ],
      cssClass: "round-alert",
    });

    const loading = await this.loading.create({
      translucent: true,
      message: "Cargando",
    });

    try {
      await loading.present();
      const purchaseResult = await Purchases.purchaseStoreProduct({
        product,
      });
      await loading.dismiss();
      // console.log("purchaseResult", purchaseResult);
      if (
        typeof purchaseResult.customerInfo.entitlements.active[
          "frikiradar unlimited"
        ] !== "undefined"
      ) {
        await this.userSvc.subscribePremium(
          purchaseResult.customerInfo.latestExpirationDate
        );
        await this.init();

        return true;
      } else {
        await alert.present();
        throw new Error(
          "Ha habido un problema con la compra. Vuelve a intentarlo transcurridos unos minutos."
        );
      }
    } catch (error) {
      await loading.dismiss();
      if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
        // Purchase cancelled
      } else if (
        error.code === PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR
      ) {
        // Product already purchased
      } else {
        console.error(error);
        await alert.present();
      }
      throw new Error("Compra cancelada");
    }
  }

  async cancelSubscription() {
    const loading = await this.loading.create({
      translucent: true,
      message: "Cargando",
    });
    await loading.present();
    try {
      const customerInfo = (await Purchases.getCustomerInfo()).customerInfo;
      const activeSubscriptions = customerInfo.activeSubscriptions;
      if (activeSubscriptions.length > 0) {
        const url = customerInfo.managementURL;
        await this.url.openUrl(url);
      }
    } catch (error) {
      console.error(error);
    }
    await loading.dismiss();
  }

  async getCustomerInfo() {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo;
  }
}

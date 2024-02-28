import { Injectable } from "@angular/core";
import { AlertController, LoadingController, isPlatform } from "@ionic/angular";
import {
  PURCHASES_ERROR_CODE,
  Purchases,
  PurchasesStoreProduct,
} from "@revenuecat/purchases-capacitor";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { UtilsService } from "./utils.service";
import { UrlService } from "./url.service";
import { I18nService } from "./i18n.service";

@Injectable({
  providedIn: "root",
})
export class RevenuecatService {
  private active: string;

  constructor(
    private url: UrlService,
    private auth: AuthService,
    private userSvc: UserService,
    private utils: UtilsService,
    private alert: AlertController,
    private loading: LoadingController,
    private i18n: I18nService
  ) {}

  async init() {
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

  async getCustomerInfo() {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo;
  }

  async getProducts() {
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
            price_per_month: `${pricePerMonth.toFixed(
              2
            )}${this.utils.currencyToSymbol(product.currencyCode)}`,
            discount,
            active: this.active === product.identifier,
            currency: product.currencyCode,
          };
        });

        return products;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async purchaseProduct(product: PurchasesStoreProduct) {
    const alert = await this.alert.create({
      header: this.i18n.translate("transaction-error"),
      message: this.i18n.translate("purchase-problem"),
      buttons: [
        {
          text: this.i18n.translate("thank-you"),
          handler: () => {
            location.reload();
          },
        },
      ],
      cssClass: "round-alert",
    });

    const loading = await this.loading.create({
      translucent: true,
      message: this.i18n.translate("continue-payment-process"),
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
      console.error(error);
      await loading.dismiss();
      if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
        // Purchase cancelled
      } else if (
        error.code === PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR
      ) {
        // Product already purchased
      } else {
        await alert.present();
      }
      throw new Error("Compra cancelada");
    }
  }

  async cancelSubscription() {
    const loading = await this.loading.create({
      translucent: true,
      message: this.i18n.translate("loading"),
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
}

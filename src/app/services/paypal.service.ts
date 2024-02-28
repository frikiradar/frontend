import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";
import { Product } from "../models/product";
import { UtilsService } from "./utils.service";
import { PaymentService } from "./payment.service";
import { Payment } from "../models/payment";
import { UrlService } from "./url.service";
import { LoadingController } from "@ionic/angular";
import { UserService } from "./user.service";
import { I18nService } from "./i18n.service";

@Injectable({
  providedIn: "root",
})
export class PaypalService {
  private accessToken: string;

  constructor(
    private url: UrlService,
    private http: HttpClient,
    private utils: UtilsService,
    private payment: PaymentService,
    private loading: LoadingController,
    private userSvc: UserService,
    private i18n: I18nService
  ) {}

  async init() {
    const auth = await firstValueFrom(
      this.http.post(
        `${environment.paypal.url}/v1/oauth2/token`,
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              `${environment.paypal.clientId}:${environment.paypal.clientSecret}`
            )}`,
          },
        }
      )
    );

    this.accessToken = auth["access_token"];
  }

  async listPlans() {
    const plans = (
      await firstValueFrom(
        this.http.get(
          `${environment.paypal.url}/v1/billing/plans?sort_by=create_time&sort_order=desc`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
              return: "representation",
            },
          }
        )
      )
    )["plans"].filter((p: any) => p.status === "ACTIVE");

    // recorremos los planes y le añadimos su precio
    for (const plan of plans) {
      const planDetail = await firstValueFrom(
        this.http.get(`${environment.paypal.url}/v1/billing/plans/${plan.id}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
      );

      plan["pricing_scheme"] =
        planDetail["billing_cycles"][0]["pricing_scheme"];
      plan["frequency"] = planDetail["billing_cycles"][0]["frequency"];
    }

    // console.log("plans", plans);

    let products: Product[] = plans.map((plan: any) => {
      return {
        id: plan.id,
        name: plan.name,
        price: `${parseFloat(plan.pricing_scheme.fixed_price.value).toFixed(
          2
        )}${this.utils.currencyToSymbol(
          plan.pricing_scheme.fixed_price.currency_code
        )}`,
        period: {
          quantity: plan.frequency.interval_count,
          unit: plan.frequency.interval_unit,
        },
        price_per_month: `${(
          parseFloat(plan.pricing_scheme.fixed_price.value) /
          plan.frequency.interval_count
        ).toFixed(2)}${this.utils.currencyToSymbol(
          plan.pricing_scheme.fixed_price.currency_code
        )}`,
        currency: plan.pricing_scheme.fixed_price.currency_code,
      };
    });

    // console.log("products", products);
    return products;
  }

  async purchaseProduct(product: Product) {
    const loading = await this.loading.create({
      translucent: true,
      message: this.i18n.translate("continue-payment-process"),
    });

    try {
      await loading.present();
      const subscription = await firstValueFrom(
        this.http.post(
          `${environment.paypal.url}/v1/billing/subscriptions`,
          {
            plan_id: product.id,
            application_context: {
              brand_name: "frikiradar",
              locale: "es-ES",
              shipping_preference: "NO_SHIPPING",
              user_action: "SUBSCRIBE_NOW",
              payment_method: {
                payer_selected: "PAYPAL",
                payee_preferred: "IMMEDIATE_PAYMENT_REQUIRED",
              },
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.accessToken}`,
            },
          }
        )
      );

      const link = subscription["links"].find(
        (link: { href: string; rel: string; method: string }) =>
          link.rel === "approve"
      );
      // Calcula las dimensiones y la posición de la nueva ventana
      const width = 400;
      const height = 600;
      const y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
      const x = window.top.outerWidth / 2 + window.top.screenX - width / 2;

      // Ahora redirigimos al usuario a la url de aprobación
      // Abre la nueva pestaña
      const newWindow = window.open(
        link.href,
        "_blank",
        `width=${width},height=${height},top=${y},left=${x}`
      );

      const paymentData: Payment = {
        paypal_id: subscription["id"],
        method: "PAYPAL",
        payment_date: subscription["create_time"],
        status: "pending",
      };

      const payment = await this.payment.setPayment(paymentData);

      const isPurchaseActive: Promise<boolean> = new Promise((resolve) => {
        // Inicia el sondeo
        const checkInterval = setInterval(async () => {
          if (newWindow.closed) {
            clearInterval(checkInterval);

            // comprobamos si la compra se ha realizado
            try {
              const purchase: any = await firstValueFrom(
                this.http.get(
                  `${environment.paypal.url}/v1/billing/subscriptions/${subscription["id"]}`,
                  {
                    headers: {
                      Authorization: `Bearer ${this.accessToken}`,
                    },
                  }
                )
              );

              if (purchase.status === "ACTIVE") {
                await this.userSvc.subscribePremium(
                  purchase["billing_info"]["next_billing_time"]
                );

                resolve(true);
              } else {
                // eliminamos el pago pendiente
                console.log("payment", payment);
                await this.payment.deletePayment(payment["id"]);
                resolve(false);
              }
            } catch (error) {
              // eliminamos el pago pendiente
              console.error("payment", error);
              await this.payment.deletePayment(payment["id"]);
              resolve(false);
            }
          }
        }, 500); // Verifica si la pestaña se ha cerrado cada medio segundo
      });

      if (await isPurchaseActive) {
        await loading.dismiss();
        return true;
      } else {
        await loading.dismiss();
        throw new Error("Compra cancelada.");
      }
    } catch (error) {
      // console.error(error);
      await loading.dismiss();
      throw new Error(
        "Ha habido un problema con la compra. Vuelve a intentarlo transcurridos unos minutos."
      );
    }
  }

  async cancelSubscription() {
    const paypalId = (await this.payment.getLastPayment())["paypal_id"];
    const url = "https://paypal.com/myaccount/autopay/connect/" + paypalId;
    await this.url.openUrl(url);
  }
}

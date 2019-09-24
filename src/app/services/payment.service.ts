import { Injectable } from "@angular/core";

import { Payment } from "../models/payment";
import { RestService } from "./rest.service";

@Injectable({ providedIn: "root" })
export class PaymentService {
  constructor(private rest: RestService) {}

  async setPayment(
    title: string,
    description: string,
    orderId: string,
    token: string,
    signature: string,
    type: string
  ) {
    try {
      return await this.rest
        .post("payment", {
          title,
          description,
          orderId,
          token,
          signature,
          type
        })
        .toPromise();
    } catch (e) {
      throw new Error("Error al guardar el pago en la base de datos");
    }
  }

  async getPayments() {
    try {
      return (await this.rest.get("payments").toPromise()) as Payment[];
    } catch (e) {
      throw new Error("Error al obtener el historial de pagos");
    }
  }
}

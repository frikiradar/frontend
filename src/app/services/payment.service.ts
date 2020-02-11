import { Injectable } from "@angular/core";

import { Payment } from "../models/payment";
import { RestService } from "./rest.service";

@Injectable({ providedIn: "root" })
export class PaymentService {
  constructor(private rest: RestService) {}

  async setPayment(
    title: string,
    description: string,
    order_id: string,
    token: string,
    signature: string,
    type: string,
    amount: number,
    currency: string,
    json: string
  ) {
    try {
      return await this.rest
        .post("payment", {
          title,
          description,
          order_id,
          token,
          signature,
          type,
          amount,
          currency,
          json
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

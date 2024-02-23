import { Injectable } from "@angular/core";

import { Payment } from "../models/payment";
import { RestService } from "./rest.service";

@Injectable({ providedIn: "root" })
export class PaymentService {
  constructor(private rest: RestService) {}

  // Para revenuecat no se usa este método
  async setPayment(payment: Payment): Promise<Payment> {
    try {
      return await this.rest.post("payment", payment);
    } catch (e) {
      throw new Error("Error al guardar el pago en la base de datos");
    }
  }

  async getLastPayment(): Promise<Payment> {
    try {
      return (await this.rest.get("payment")) as Payment;
    } catch (e) {
      throw new Error("Error al obtener el último pago");
    }
  }

  async getPayments() {
    try {
      return (await this.rest.get("payments")) as Payment[];
    } catch (e) {
      throw new Error("Error al obtener el historial de pagos");
    }
  }

  async deletePayment(id: string) {
    try {
      return await this.rest.delete(`payment/${id}`);
    } catch (e) {
      throw new Error("Error al eliminar el pago");
    }
  }
}

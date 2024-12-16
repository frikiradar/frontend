import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Payment } from "src/app/models/payment";

import { PaymentService } from "src/app/services/payment.service";

@Component({
    selector: "payments-modal",
    templateUrl: "./payments.modal.html",
    styleUrls: ["./payments.modal.scss"],
    standalone: false
})
export class PaymentsModal implements OnInit {
  payments: Payment[];

  constructor(
    private modalController: ModalController,
    private payment: PaymentService
  ) {}

  async ngOnInit() {
    this.payments = (await this.payment.getPayments()).reverse();
  }

  close() {
    this.modalController.dismiss();
  }
}

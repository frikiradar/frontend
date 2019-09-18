import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { IAPProduct } from "@ionic-native/in-app-purchase-2/ngx";
import { ModalController } from "@ionic/angular";

import { StoreService } from "src/app/services/store.service";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "credits-modal",
  templateUrl: "./credits.modal.html",
  styleUrls: ["./credits.modal.scss"]
})
export class CreditsModal implements OnInit {
  public one_credit: IAPProduct;
  public five_credits: IAPProduct;
  public ten_credits: IAPProduct;

  constructor(
    private modal: ModalController,
    public auth: AuthService,
    public storeSvc: StoreService,
    public detectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.one_credit = this.storeSvc.get("1_credit");
    this.five_credits = this.storeSvc.get("5_credits");
    this.ten_credits = this.storeSvc.get("10_credits");
    this.detectorRef.detectChanges();
  }

  async buyCredits(product: IAPProduct) {
    this.storeSvc.order(product);
  }

  close() {
    this.modal.dismiss();
  }
}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { NiceDatePipe } from "../nice-date.pipe";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { CreditsModal } from "./../insert-coin/credits/credits.modal";
import { InsertCoinModal } from "./../insert-coin/insert-coin.modal";
import { PremiumModal } from "./../insert-coin/premium/premium.modal";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    InsertCoinModal,
    PremiumModal,
    CreditsModal
  ],
  entryComponents: [InsertCoinModal, PremiumModal, CreditsModal],
  imports: [IonicModule.forRoot(), CommonModule],
  exports: [ImagePreloadDirective, NiceDatePipe]
})
export class SharedModule {}

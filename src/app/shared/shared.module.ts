import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
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
    CreditsModal,
    AmbassadorModal,
    RequestGeolocationModal
  ],
  entryComponents: [
    InsertCoinModal,
    PremiumModal,
    CreditsModal,
    AmbassadorModal,
    RequestGeolocationModal
  ],
  imports: [IonicModule, CommonModule],
  exports: [ImagePreloadDirective, NiceDatePipe]
})
export class SharedModule {}

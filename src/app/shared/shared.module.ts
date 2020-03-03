import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { PremiumModal } from "./../insert-coin/premium/premium.modal";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    PremiumModal,
    AmbassadorModal,
    RequestGeolocationModal
  ],
  entryComponents: [PremiumModal, AmbassadorModal, RequestGeolocationModal],
  imports: [IonicModule, CommonModule],
  exports: [ImagePreloadDirective, NiceDatePipe]
})
export class SharedModule {}

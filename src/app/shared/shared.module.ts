import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal
  ],
  entryComponents: [AmbassadorModal, CreditsModal, RequestGeolocationModal],
  imports: [IonicModule, CommonModule],
  exports: [ImagePreloadDirective, NiceDatePipe]
})
export class SharedModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Crop } from "@ionic-native/crop/ngx";
import { Camera } from "@ionic-native/camera/ngx";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal
  ],
  entryComponents: [AmbassadorModal, CreditsModal, RequestGeolocationModal],
  imports: [IonicModule, CommonModule, NgxIonicImageViewerModule],
  exports: [ImagePreloadDirective, NiceDatePipe],
  providers: [Crop, Camera]
})
export class SharedModule {}

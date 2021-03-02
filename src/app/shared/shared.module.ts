import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";
import { CropperModal } from "../cropper/cropper.modal";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { ImageCropperModule } from "ngx-image-cropper";
import { WebcamModal } from "../webcam/webcam.modal";
import { WebcamModule } from "ngx-webcam";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal
  ],
  entryComponents: [
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal
  ],
  imports: [
    IonicModule,
    CommonModule,
    NgxIonicImageViewerModule,
    ImageCropperModule,
    WebcamModule
  ],
  exports: [ImagePreloadDirective, NiceDatePipe],
  providers: [Camera]
})
export class SharedModule {}

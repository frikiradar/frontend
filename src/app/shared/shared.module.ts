import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageCropperModule } from "ngx-image-cropper";
import { WebcamModal } from "../webcam/webcam.modal";
import { WebcamModule } from "ngx-webcam";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

import { CropperModal } from "../cropper/cropper.modal";
import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { ChatInputComponent } from "../chat/chat-input/chat-input.component";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal,
    ChatInputComponent
  ],
  entryComponents: [
    AmbassadorModal,
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal,
    ChatInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    NgxIonicImageViewerModule,
    ImageCropperModule,
    WebcamModule,
    PickerModule
  ],
  exports: [ImagePreloadDirective, NiceDatePipe, ChatInputComponent],
  providers: [Camera]
})
export class SharedModule {}

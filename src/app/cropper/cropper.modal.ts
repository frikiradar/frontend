import { Component, Input, OnInit } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  ImageTransform,
} from "ngx-image-cropper";
import { SharedModule } from "../shared/shared.module";

@Component({
  selector: "cropper-modal",
  templateUrl: "./cropper.modal.html",
  styleUrls: ["./cropper.modal.scss"],
  imports: [ImageCropperComponent, SharedModule, IonicModule],
  standalone: true,
})
export class CropperModal implements OnInit {
  @Input() src: string;
  @Input() event: any;
  @Input() square: boolean;
  @Input() aspectRatio: number = 1 / 1;
  public imageChangedEvent: any = "";
  public croppedImage: any = "";
  public transform: ImageTransform = {};
  public maintainAspectRatio: any = true;

  constructor(public modalController: ModalController) {}

  async ngOnInit() {
    this.imageChangedEvent = this.event;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.objectUrl;
  }

  async imageLoaded() {
    // imagen cargada
  }

  loadImageFailed() {
    // show message
  }

  rotateRight() {
    this.transform = {
      ...this.transform,
      rotate: this.transform.rotate ? this.transform.rotate + 90 : 90,
    };
  }

  flipH() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH,
    };
  }

  flipV() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV,
    };
  }

  zoomIn() {
    this.transform = {
      ...this.transform,
      scale: this.transform.scale ? this.transform.scale + 0.1 : 1.1,
    };
  }

  zoomOut() {
    this.transform = {
      ...this.transform,
      scale: this.transform.scale ? this.transform.scale - 0.1 : 0.99,
    };
  }

  toggleAspect() {
    this.maintainAspectRatio = !this.maintainAspectRatio;
  }

  ok() {
    this.modalController.dismiss(this.croppedImage);
  }

  cancel() {
    this.modalController.dismiss();
  }
}

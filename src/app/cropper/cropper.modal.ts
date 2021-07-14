import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ImageCroppedEvent, ImageTransform } from "ngx-image-cropper";

@Component({
  selector: "cropper-modal",
  templateUrl: "./cropper.modal.html",
  styleUrls: ["./cropper.modal.scss"]
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

  constructor(public modal: ModalController) {}

  async ngOnInit() {
    this.imageChangedEvent = this.event;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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
      rotate: this.transform.rotate ? this.transform.rotate + 90 : 90
    };
  }

  flipH() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipV() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  zoomIn() {
    this.transform = {
      ...this.transform,
      scale: this.transform.scale ? this.transform.scale + 0.1 : 1.1
    };
  }

  zoomOut() {
    this.transform = {
      ...this.transform,
      scale: this.transform.scale ? this.transform.scale - 0.1 : 0.99
    };
  }

  toggleAspect() {
    this.maintainAspectRatio = !this.maintainAspectRatio;
  }

  ok() {
    this.modal.dismiss(this.croppedImage);
  }

  cancel() {
    this.modal.dismiss();
  }
}

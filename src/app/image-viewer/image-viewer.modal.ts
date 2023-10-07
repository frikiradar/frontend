import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import SwiperCore, { Keyboard, SwiperOptions, Mousewheel, Zoom } from "swiper";

SwiperCore.use([Keyboard, Mousewheel, Zoom]);

@Component({
  selector: "image-viewer-modal",
  templateUrl: "./image-viewer.modal.html",
  styleUrls: ["./image-viewer.modal.scss"],
})
export class ImageViewerModal {
  @Input() params: {
    src: string;
    date?: string;
    title?: string;
    description?: string;
  };

  public slides: SwiperCore;

  public slideOpts: SwiperOptions = {
    grabCursor: true,
    lazy: true,
    keyboard: true,
    zoom: {
      maxRatio: 5,
      minRatio: 1,
    },
    centeredSlides: true,
    autoHeight: true,
  };

  constructor(public modalController: ModalController) {}

  back() {
    this.modalController.dismiss();
  }
}

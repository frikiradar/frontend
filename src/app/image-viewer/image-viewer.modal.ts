import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import SwiperCore, {
  Keyboard,
  SwiperOptions,
  Mousewheel,
  Zoom,
  Swiper,
} from "swiper";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

import { UtilsService } from "../services/utils.service";
import { Config, ConfigService } from "../services/config.service";

SwiperCore.use([Keyboard, Mousewheel, Zoom]);

@Component({
  selector: "image-viewer-modal",
  templateUrl: "./image-viewer.modal.html",
  styleUrls: ["./image-viewer.modal.scss"],
  animations: [
    trigger("slideUp", [
      state(
        "hide",
        style({
          transform: "translateY(-100%)",
        })
      ),
      state(
        "show",
        style({
          transform: "translateY(0)",
        })
      ),
      transition("show <=> hide", animate("0.25s ease-in-out")),
    ]),
    trigger("slideDown", [
      state(
        "hide",
        style({
          transform: "translateY(100%)",
        })
      ),
      state(
        "show",
        style({
          transform: "translateY(0)",
        })
      ),
      transition("show <=> hide", animate("0.25s ease-in-out")),
    ]),
  ],
})
export class ImageViewerModal {
  @Input() params: {
    src: string;
    date?: string;
    title?: string;
    description?: string;
  };

  public slides: SwiperCore;
  public isHidden = false;

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

  constructor(
    public modalController: ModalController,
    private utils: UtilsService,
    private config: ConfigService
  ) {}

  async ngOnInit() {
    await this.utils.toggleTheme("transparent");
  }

  setSwiperInstance(swiper: SwiperCore) {
    this.slides = swiper;
  }

  toggleVisibility(event: any) {
    if (event instanceof PointerEvent) {
      this.isHidden = !this.isHidden;
      if (this.isHidden) {
        this.utils.transparentStatusBar(true);
        this.utils.transparentNavigationBar(true);
      } else {
        this.utils.transparentStatusBar(false);
        this.utils.transparentNavigationBar(false);
      }
    }
  }

  back() {
    this.modalController.dismiss();
  }

  async ngOnDestroy() {
    const theme = (await this.config.get("theme")) as Config["theme"];
    this.utils.toggleTheme(theme);
  }
}

import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { IonTextarea, ModalController } from "@ionic/angular";
import SwiperCore, {
  Keyboard as SwiperKeyboard,
  SwiperOptions,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";

import { Story } from "src/app/models/story";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { StoryService } from "../../services/story.service";
import { StoryModal } from "../story-modal/story.modal";
import { Haptics } from "@capacitor/haptics";
import { UtilsService } from "src/app/services/utils.service";
import { NavService } from "src/app/services/navigation.service";

SwiperCore.use([SwiperKeyboard, Pagination, Autoplay, Mousewheel]);

@Component({
    selector: "story-slider-modal",
    templateUrl: "./story-slider.modal.html",
    styleUrls: ["./story-slider.modal.scss"],
    standalone: false
})
export class StorySliderModal implements OnInit {
  @Input() stories: Story[];
  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;
  public slides: SwiperCore;
  public activeStory: Story;
  public showComments = false;
  public showOptions = false;
  private delay = 5000;

  public slideOpts: SwiperOptions = {
    speed: 500,
    autoplay: {
      delay: this.delay,
    },
    grabCursor: true,
    lazy: true,
    keyboard: true,
    pagination: {
      type: "progressbar",
    },
    mousewheel: true,
  };

  constructor(
    public thisModal: ModalController,
    private modalCtrl: ModalController,
    private storySvc: StoryService,
    public userSvc: UserService,
    private router: Router,
    public auth: AuthService,
    private cd: ChangeDetectorRef,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.activeStory = this.stories[0];
    this.viewStory(this.stories[0]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides?.autoplay.start();
    }, 100);
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    this.slides.update();
    this.slides.on("slideChange", async (event) => {
      this.slide(event.activeIndex);
      await Haptics.vibrate({ duration: 10 });
    });
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.close();
      this.router.navigate(["/profile", id]);
    }
  }

  slide(index: number) {
    this.activeStory = this.stories[index];
    this.showComments = false;
    this.showOptions = false;
    this.cd.detectChanges();
    this.viewStory(this.stories[index]);
  }

  touchStart() {
    this.slides.autoplay.stop();
  }

  touchEnd() {
    this.slides.autoplay.start();
  }

  async tap(event: any) {
    if (event instanceof PointerEvent) {
      const modal = await this.thisModal.getTop();
      const centerStart = modal.offsetWidth / 2; // 50px para el centro
      const centerEnd = modal.offsetWidth / 2; // 50px para el centro

      if (event.clientX > centerEnd) {
        this.slides.slideNext();
      } else if (event.clientX < centerStart) {
        this.slides.slidePrev();
      }
      // Si el evento está en el centro, no hagas nada
    }
    this.slides.autoplay.start();
  }

  commentFocus(event?: CustomEvent) {
    event?.stopPropagation();
    if (event) {
      const textarea = event.target as unknown as IonTextarea;
      textarea.getInputElement().then((a) => a.blur());
    }
    this.showComments = true;
  }

  async viewStory(story: Story) {
    if (
      this.auth.currentUserValue.id !== story.user.id &&
      !story.viewStories.some(
        (v) => v.user.id === this.auth.currentUserValue.id
      )
    ) {
      this.storySvc.viewStory(story.id);
      story.viewStories = [
        ...story.viewStories,
        {
          date: new Date().toISOString(),
          user: this.auth.currentUserValue,
        },
      ];
      this.stories = this.stories.map((s) => (s.id === story.id ? story : s));
    }
  }

  async addStory() {
    this.slides.autoplay.stop();

    const modal = await this.modalCtrl.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();

    this.slides.autoplay.start();
  }

  async removeStory(event: Event) {
    this.modalCtrl.dismiss();
  }

  viewOptions() {
    this.showOptions = true;
  }

  async close() {
    if (await this.modalCtrl.getTop()) {
      await this.modalCtrl.dismiss();
    } else if (this.nav.canGoBack()) {
      this.nav.back();
    } else {
      this.router.navigate(["/"]);
    }
  }
}

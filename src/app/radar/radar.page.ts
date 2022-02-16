import {
  Component,
  ViewChild,
  HostListener,
  ChangeDetectorRef
} from "@angular/core";
import { NavigationStart, Router, Event } from "@angular/router";
import {
  IonSlides,
  MenuController,
  Platform,
  AlertController,
  IonRange,
  IonContent,
  ToastController,
  ModalController
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { takeWhile } from "rxjs/operators";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import * as deepEqual from "deep-equal";

import { User } from "../models/user";
import { GeolocationService } from "../services/geolocation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { DeviceService } from "../services/device.service";
import { UtilsService } from "../services/utils.service";
import { Config, ConfigService } from "../services/config.service";
import { PushService } from "../services/push.service";
import {
  NotificationService,
  NotificationCounters
} from "../services/notification.service";
import { StoryService } from "../services/story.service";
import { Story } from "../models/story";
import { StoryModal } from "../story/story-modal/story.modal";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage {
  @ViewChild("slides", { static: false })
  slides: IonSlides;
  @ViewChild("range", { static: false })
  range: IonRange;
  @ViewChild("radarlist", { static: true })
  radarlist: IonContent;

  public counters: NotificationCounters;

  public slideOpts = {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        centeredSlides: true
      }
    },
    grabCursor: true,
    lazy: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "left" : "top"
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length)
              $shadowBeforeEl[0].style.opacity =
                offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length)
              $shadowAfterEl[0].style.opacity =
                -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
      }
    }
  };

  public storiesOpts = {
    preloadImages: false,
    lazy: true,
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 14.5
      }
    },
    grabCursor: true
  };
  public stories: Story[];
  public groupedStories: Story[] = [];

  public hide = false;
  page = 0;
  public ratio = -1;
  public automatic = true;
  public rangeValue = 1;
  authUser: User;
  users: User[] = undefined;
  public user: User;
  public view: "cards" | "list";
  coordinates: User["coordinates"];
  public showBackdrop = false;
  public loading = true;
  public pane: CupertinoPane;
  public extended = true;
  public searchOptions = {
    identity: true,
    range: false,
    connection: false
  };
  private searchOptionsChanged = false;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    breaks: {
      middle: { enabled: true, height: 500, bounce: true },
      bottom: { enabled: true, height: 300, bounce: true }
    },
    initialBreak: "middle",

    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
      if (this.searchOptionsChanged) {
        this.searchOptionsChanged = false;
        this.loading = true;
        this.page = 0;
        this.users = undefined;
        this.radarlist?.scrollToTop(0);
        this.getRadarUsers();
      }
    }
  };

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.users?.length && this.router.url === "/tabs/radar") {
      switch (event.key) {
        case "ArrowRight":
          this.slides.slideNext();
          break;
        case "ArrowLeft":
          this.slides.slidePrev();
          break;
        case "Enter":
          this.showProfile(this.user.id);
          break;
      }
    }
  }

  constructor(
    public userSvc: UserService,
    public menu: MenuController,
    public auth: AuthService,
    public router: Router,
    private geolocationSvc: GeolocationService,
    private deviceSvc: DeviceService,
    private platform: Platform,
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController,
    private config: ConfigService,
    private firebase: FirebaseX,
    private push: PushService,
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private storySvc: StoryService,
    private modal: ModalController
  ) {
    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
    });

    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/tabs/radar") {
          this.getStories();
        }
      }
    });
  }

  async ngAfterViewInit() {
    this.users = (await this.config.get("radar")) as Config["radar"];
  }

  async ngOnInit() {
    this.authUser = this.auth.currentUserValue;

    // Una vez logueado iniciamos notificaciones si no están
    const device = await this.deviceSvc.getCurrentDevice();
    if (!device?.token) {
      this.push.init();
    }
    // Y despues iniciamos la geolocalización
    if (!this.authUser.roles?.includes("ROLE_DEMO")) {
      try {
        this.showBackdrop = true;
        this.coordinates = await this.geolocationSvc.getGeolocation();
        this.showBackdrop = false;
        const oldCoordinates = this.authUser.coordinates;
        if (
          oldCoordinates === undefined ||
          oldCoordinates.latitude === undefined ||
          this.coordinates.latitude.toFixed(3) !==
            oldCoordinates?.latitude.toFixed(3) ||
          this.coordinates.longitude.toFixed(3) !==
            oldCoordinates?.longitude.toFixed(3)
        ) {
          const coordinates = await this.userSvc.setCoordinates(
            this.coordinates.longitude,
            this.coordinates.latitude
          );
          this.authUser.coordinates = coordinates;
          this.auth.setAuthUser(this.authUser);
        }
      } catch (e) {
        console.error(e);
        // tienes que aprobar permisos
      }

      this.authUser = this.auth.currentUserValue;
    }

    if (this.platform.is("cordova")) {
      this.firebase
        .setUserId("" + this.authUser.id)
        .then(() => console.log("User id successfully set"))
        .catch(err => console.log("Error setting user id:", err));

      this.firebase
        .setUserProperty("username", this.authUser.username)
        .then(() => console.log("Username successfully set"))
        .catch(err => console.log("Error setting username:", err));

      this.firebase
        .setScreenName("radar")
        .then(() => console.log("View successfully tracked"))
        .catch(err => console.log("Error tracking view:", err));
    }

    const radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];
    if (radar_config?.extended !== undefined) {
      this.extended = radar_config.extended;
    }
    if (radar_config?.options !== undefined) {
      this.searchOptions = radar_config.options;
    }
    if (radar_config?.view === "list") {
      this.view = "list";
      const range = radar_config?.range;
      if (range !== undefined) {
        this.rangeValue = range;
        this.ratio = this.getRatio(range);
      } else {
        this.ratio = 50;
      }
    } else {
      this.view = "cards";
      this.ratio = -1;
      await this.utils.delay(500);
      await this.slides?.slideTo(0);
    }
    this.getRadarUsers();
    this.getStories();
  }

  async ionViewWillEnter() {
    if (!this.users?.length) {
      if (this.authUser && this.authUser.id) {
        this.auth.currentUser
          .pipe(takeWhile(u => !!u?.id))
          .subscribe(async authUser => {
            if (this.users?.length) {
              this.authUser = authUser;
              this.page = 0;

              const radar_config = (await this.config.get(
                "radar_config"
              )) as Config["radar_config"];

              if (radar_config?.view === "list") {
                this.view = "list";
                const range = radar_config?.range;
                if (range) {
                  this.range.value = range;
                } else {
                  this.ratio = 50;
                }
              } else {
                await this.slides?.slideTo(0);
              }
              this.getRadarUsers();
            }
          });
      }
    }
  }

  async getRadarUsers(event?: any) {
    try {
      this.page++;
      let resUsers = [];
      if (!this.extended) {
        resUsers = await this.userSvc.getRadarUsers(this.page, this.ratio);
      } else {
        resUsers = await this.userSvc.getRadarUsers(
          this.page,
          this.ratio,
          this.searchOptions
        );
      }
      this.loading = false;
      if (this.page === 1) {
        this.config.set("radar", resUsers);
      }

      let users = resUsers;

      this.users =
        this.page === 1 ? (this.users = users) : [...this.users, ...users];
      if (this.users?.length > 0) {
        if (this.ratio === -1) {
          if (resUsers?.length > 0 && !this.users?.length) {
            this.users = [...this.users, ...resUsers];
          }

          if (this.users[0]?.id) {
            this.user = this.users[0];
            this.userSvc.view(this.user.id);
          }
        } else {
          if (event) {
            event.target.complete();

            if (users.length < 15) {
              event.target.disabled = true;
            }
          }
        }
      } else if (
        this.range.value > -1 &&
        this.range.value < 5 &&
        this.automatic
      ) {
        let value = this.range.value as number;
        value++;
        this.range.value = value;
      }

      if (await this.toast.getTop()) {
        this.toast.dismiss();
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getStories() {
    let stories = await this.storySvc.getAllStories();
    stories = this.storySvc.orderStories(stories);
    if (!deepEqual(this.stories, stories)) {
      this.stories = stories;
      const groupedStories = this.storySvc.groupStories(stories);
      this.groupedStories = groupedStories;
    }
  }

  async newStory() {
    const modal = await this.modal.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter(s => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter(s => s.user.id !== id)
    ];
    await this.showStoriesModal(stories);
    await this.getStories();
  }

  async showStory(story: Story) {
    const stories = [story];
    await this.showStoriesModal(stories);
    await this.getStories();
  }

  async showStoriesModal(stories: Story[]) {
    const modal = await this.modal.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async showAllStories() {
    this.router.navigate(["/story"]);
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  search() {
    this.router.navigate(["/search"]);
  }

  notifications() {
    this.router.navigate(["/notification"]);
  }

  async changeView() {
    this.page = 0;
    this.users = undefined;
    let radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];

    if (this.view === "cards") {
      this.view = "list";
      this.ratio = 50;
      if (radar_config) {
        radar_config.view = this.view;
        radar_config.range = this.rangeValue;
      } else {
        radar_config = { view: this.view, range: this.rangeValue };
      }
    } else {
      this.view = "cards";
      this.ratio = -1;

      radar_config.view = this.view;
      radar_config.range = -1;
    }
    this.config.set("radar_config", radar_config);

    this.getRadarUsers();
  }

  async changeRatio(value: number) {
    if (value !== this.range.value) {
      this.range.value = value;
    } else {
      if (this.users?.length < 15) {
        this.radarAdv();
      }
      this.loading = true;
      this.ratio = this.getRatio(value);

      let radar_config = (await this.config.get(
        "radar_config"
      )) as Config["radar_config"];
      radar_config.view = this.view;
      radar_config.range = value;
      this.config.set("radar_config", radar_config);

      (
        await this.toast.create({
          message:
            this.ratio < 25000
              ? "Buscando personas a " + this.ratio + "km"
              : "Buscando personas mundialmente",
          position: "middle",
          color: "secondary"
        })
      ).present();

      this.page = 0;
      this.users = undefined;
      this.radarlist?.scrollToTop(0);
      this.getRadarUsers();
    }
  }

  async hideProfile(id: User["id"]) {
    const nextIndex = this.users.findIndex(u => u.id === id) + 1;
    this.user = this.users[nextIndex];
    const users = this.users;
    this.users = this.users.filter(u => u.id !== id);

    const toast = await this.toast.create({
      message: "Has ocultado el usuario",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.users = users;
          }
        }
      ]
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      this.userSvc.hide(id);
    }
  }

  async onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.deltaY) {
      this.hide =
        !($event.detail.deltaY < 0) &&
        this.users?.length > 10 &&
        $event.detail.scrollTop > 200;
    }
  }

  async slide() {
    this.slides.getActiveIndex().then(index => {
      this.user = this.users[index];
      if (this.user?.id) {
        this.userSvc.view(this.user?.id);
      }
      if (index >= this.users?.length - 10) {
        this.getRadarUsers();
      }
      if (
        this.view === "cards" &&
        this.page === 0 &&
        this.user.distance >= 100
      ) {
        this.radarAdv();
      }
    });
  }

  async dragItem(event: any, id: number) {
    if (event.detail.ratio > 1.8) {
      this.hideProfile(id);
    } else if (event.detail.ratio < -1.8) {
      await event.target.close();
      this.showProfile(id);
    }
  }

  getRatio(value: number) {
    switch (value) {
      case 0:
        return 10;
      case 1:
        return 50;
      case 2:
        return 100;
      case 3:
        return 500;
      case 4:
        return 1000;
      case 5:
        return 25000;
    }
  }

  async radarAdv() {
    const radarAdv = this.config.get("radarAdv");

    if (!radarAdv) {
      const alert = await this.alert.create({
        header: "¿Pocas personas cerca tuya?",
        message:
          "No llores, acabamos de lanzar la aplicación y aún no hemos llegado a todas partes. ¡Ayúdanos a crecer y conviértete en embajador de FrikiRadar compartiendo con tus amigas y amigos!",
        buttons: [
          {
            text: "¡Compartir!",
            handler: () => {
              this.utils.share();
            }
          }
        ],
        cssClass: "round-alert"
      });
      this.config.set("radarAdv", true);
      await alert.present();
    }
  }

  async filter() {
    this.pane = new CupertinoPane(".radar-pane", this.paneSettings);
    const radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];
    if (radar_config) {
      if (radar_config?.options) {
        this.searchOptions = radar_config.options;
      }
      if (radar_config?.extended) {
        this.extended = radar_config.extended;
      }
    }

    if (this.extended) {
      this.pane.present({ animate: true });
    } else {
      this.pane.present({ animate: true });
      await this.utils.delay(100);
      this.pane.moveToBreak("bottom");
    }
  }

  async radarSearchChange(extended: boolean) {
    this.searchOptionsChanged = true;
    this.extended = extended;
    let radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];
    if (radar_config) {
      radar_config.extended = extended;
    } else {
      radar_config = { extended };
    }

    this.config.set("radar_config", radar_config);
    if (extended) {
      this.pane.moveToBreak("middle");
    } else {
      this.pane.moveToBreak("bottom");
    }
  }

  async radarSearchOptions(
    property: keyof Config["radar_config"]["options"],
    value: boolean
  ) {
    this.searchOptionsChanged = true;
    let radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];

    if (radar_config?.options) {
      radar_config.options = this.searchOptions;
    } else {
      radar_config = { options: this.searchOptions };
    }

    radar_config.options[property] = value;
    this.config.set("radar_config", radar_config);
    this.searchOptions = radar_config.options;
  }
}

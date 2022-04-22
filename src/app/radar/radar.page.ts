import {
  Component,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
} from "@angular/core";
import {
  NavigationStart,
  Router,
  Event,
  ActivatedRoute,
} from "@angular/router";
import {
  AlertController,
  IonRange,
  IonContent,
  ToastController,
  ModalController,
  IonRouterOutlet,
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import { takeWhile } from "rxjs/operators";
import * as deepEqual from "deep-equal";
import SwiperCore, {
  Keyboard,
  SwiperOptions,
  EffectCoverflow,
  Mousewheel,
} from "swiper";
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";
import { Device } from "@capacitor/device";

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
  NotificationCounters,
} from "../services/notification.service";
import { StoryService } from "../services/story.service";
import { Story } from "../models/story";
import { StoryModal } from "../story/story-modal/story.modal";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { environment } from "src/environments/environment";

SwiperCore.use([Keyboard, EffectCoverflow, Mousewheel]);

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"],
})
export class RadarPage {
  @ViewChild("range", { static: false })
  range: IonRange;
  @ViewChild("radarlist", { static: true })
  radarlist: IonContent;

  public counters: NotificationCounters;
  private slides: SwiperCore;

  public slideOpts: SwiperOptions = {
    keyboard: true,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
    grabCursor: true,
    lazy: true,
    effect: "coverflow",
    mousewheel: true,
  };

  public storiesOpts: SwiperOptions = {
    preloadImages: false,
    lazy: true,
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 14.5,
      },
    },
    grabCursor: true,
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
  public extended = true;
  public searchOptions = {
    identity: true,
    range: false,
    connection: false,
  };
  private searchOptionsChanged = false;

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      this.users?.length &&
      this.router.url === "/tabs/radar" &&
      event.key === "Enter"
    ) {
      this.showProfile(this.user.id);
    }
  }

  constructor(
    public userSvc: UserService,
    public auth: AuthService,
    public router: Router,
    private geolocationSvc: GeolocationService,
    private deviceSvc: DeviceService,
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController,
    private config: ConfigService,
    private push: PushService,
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private storySvc: StoryService,
    private modal: ModalController,
    public routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute
  ) {
    this.notificationSvc.notification.subscribe((notification) => {
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

  setSwiperInstance(swiper: SwiperCore) {
    this.slides = swiper;
  }

  async ngAfterViewInit() {
    this.users = (await this.config.get("radar")) as Config["radar"];
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      try {
        const story = await this.storySvc.getStory(+id);
        this.showStory(story);
      } catch (e) {
        console.error("Historia no encontrada");
      }
    }

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

    FirebaseAnalytics.setUserId({
      userId: "" + this.authUser.id,
    });

    FirebaseAnalytics.setUserProperty({
      name: "username",
      value: this.authUser.username,
    });

    // --------------------------------------------------

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
          .pipe(takeWhile((u) => !!u?.id))
          .subscribe(async (authUser) => {
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
      cssClass: "full-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter((s) => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter((s) => s.user.id !== id),
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
    this.slides.disable();
    const modal = await this.modal.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
      presentingElement: this.routerOutlet.nativeEl,
    });

    await modal.present();
    await modal.onDidDismiss();
    this.slides.enable();
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
          color: "secondary",
        })
      ).present();

      this.page = 0;
      this.users = undefined;
      this.radarlist?.scrollToTop(0);
      this.getRadarUsers();
    }
  }

  async hideProfile(id: User["id"]) {
    const nextIndex = this.users.findIndex((u) => u.id === id) + 1;
    this.user = this.users[nextIndex];
    const users = this.users;
    this.users = this.users.filter((u) => u.id !== id);

    const toast = await this.toast.create({
      message: "Has ocultado el usuario",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.users = users;
          },
        },
      ],
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
    const index = this.slides.activeIndex;
    this.user = this.users[index];
    if (this.user?.id) {
      this.userSvc.view(this.user?.id);
    }
    if (index >= this.users?.length - 10) {
      this.getRadarUsers();
    }
    if (this.view === "cards" && this.page === 0 && this.user.distance >= 100) {
      this.radarAdv();
    }
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
            },
          },
        ],
        cssClass: "round-alert",
      });
      this.config.set("radarAdv", true);
      await alert.present();
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

  dismissFilterOptions() {
    if (this.searchOptionsChanged) {
      this.searchOptionsChanged = false;
      this.loading = true;
      this.page = 0;
      this.users = undefined;
      this.radarlist?.scrollToTop(0);
      this.getRadarUsers();
    }
  }
}

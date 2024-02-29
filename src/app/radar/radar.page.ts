import { Component, ViewChild, ChangeDetectorRef, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  IonRange,
  IonContent,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import { first } from "rxjs";
import { SwiperOptions } from "swiper-new/types";
import { Swiper } from "swiper-new";
import { EffectCoverflow } from "swiper-new/modules";
import { SwiperContainer } from "swiper-new/element";
import { Haptics } from "@capacitor/haptics";

import { User } from "../models/user";
import { GeolocationService } from "../services/geolocation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { Config, ConfigService } from "../services/config.service";
import {
  NotificationService,
  NotificationCounters,
} from "../services/notification.service";
import { NavService } from "../services/navigation.service";
import { AdService } from "../services/ad.service";
import { Ad } from "../models/ad";
import { UnlimitedModal } from "../unlimited/unlimited.modal";
import { I18nService } from "../services/i18n.service";

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
  public slides: Swiper;
  public allUsersLoaded = false;
  public filterOptions = false;
  public language = this.i18n.currentLanguage;

  public slideOpts: SwiperOptions = {
    modules: [EffectCoverflow],
    slidesPerView: 1,
    breakpoints: {
      1920: {
        slidesPerView: 4,
        centeredSlides: true,
      },
      1280: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      780: {
        slidesPerView: 2,
        centeredSlides: true,
      },
    },
    grabCursor: true,
    effect: "coverflow",
  };

  public hide = false;
  public page = 0;
  public ratio = -1;
  public automatic = true;
  public rangeValue = 0;
  public previousRangeValue = 0;
  public tutorial = true;
  authUser: User;
  users: (User | Ad)[] = [];
  public user: User;
  public view: "cards" | "list";
  public showBackdrop = false;
  public loading = true;
  public extended = true;
  public searchOptions = {
    identity: true,
    range: false,
    connection: false,
    online: false,
    worldwide: this.auth.isPremium() ? true : false,
    fake_location: false,
  };

  public location = {
    country: "",
    city: "",
  };

  private searchOptionsChanged = false;
  public countries: string[] = [];

  constructor(
    public userSvc: UserService,
    public auth: AuthService,
    public router: Router,
    private geolocationSvc: GeolocationService,
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController,
    private config: ConfigService,
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private nav: NavService,
    private ngZone: NgZone,
    private adService: AdService,
    private modalController: ModalController,
    private i18n: I18nService
  ) {
    this.notificationSvc.notification.subscribe((notification) => {
      this.counters = notification;
    });
  }

  async tap(event: any, user: User) {
    if (
      event.target.parentElement.parentElement.parentElement.tagName ==
      "SWIPER-CONTAINER"
    ) {
      const swiperContainer = event.target.parentElement.parentElement
        .parentElement as SwiperContainer;
      const swiper = swiperContainer.swiper;
      const imageElement = event.target;
      const imageRect = imageElement.getBoundingClientRect();

      const centerStart = imageRect.left + imageRect.width / 2;
      const centerEnd = imageRect.left + imageRect.width / 2;

      let currentX = swiper.touches.currentX;

      if (user.images?.length > 0 && currentX !== undefined) {
        if (currentX > centerEnd) {
          if (!swiper.isEnd) {
            swiper.slideNext();
            await Haptics.vibrate({ duration: 10 });
          }
        } else if (currentX < centerStart) {
          if (!swiper.isBeginning) {
            swiper.slidePrev();
            await Haptics.vibrate({ duration: 10 });
          }
        }
      } else {
        this.showProfile(user.id);
      }
    } else {
      this.showProfile(user.id);
    }
  }

  async tapTutorial(event: any) {
    if (
      event.target.parentElement.parentElement.parentElement.tagName ==
      "SWIPER-CONTAINER"
    ) {
      const swiperContainer = event.target.parentElement.parentElement
        .parentElement as SwiperContainer;
      const swiper = swiperContainer.swiper;
      const imageElement = event.target;
      const imageRect = imageElement.getBoundingClientRect();

      let currentX = swiper.touches.currentX;
      let currentY = swiper.touches.currentY;
      let centerStart = imageRect.left + imageRect.width / 3;
      let centerEnd = imageRect.left + (imageRect.width / 3) * 2;

      if (currentY < screen.height / 2) {
        if (currentX > centerEnd) {
          if (!swiper.isEnd) {
            swiper.slideNext();
            await Haptics.vibrate({ duration: 10 });
          }
        } else if (currentX < centerStart) {
          if (!swiper.isBeginning) {
            swiper.slidePrev();
            await Haptics.vibrate({ duration: 10 });
          }
        }
      } else {
        this.alert
          .create({
            header: this.i18n.translate("well-done"),
            message: this.i18n.translate("how-to-enter-profile"),
            buttons: [this.i18n.translate("lets-go")],
            cssClass: "round-alert",
          })
          .then((alert) => alert.present());
      }
    }
  }

  async ngAfterViewInit() {
    this.users = (await this.config.get("radar")) as Config["radar"];
  }

  async ngOnInit() {
    this.auth.currentUser
      .pipe(first((user) => !!user && user.active))
      .subscribe(async (user) => {
        this.authUser = user;
        await this.initGeolocation();
        this.initSwiper();
      });
  }

  async initGeolocation() {
    if (!this.auth.isDemo()) {
      try {
        this.showBackdrop = true;
        const geolocation = await this.geolocationSvc.getGeolocation();
        this.showBackdrop = false;
        const oldCoordinates = this.authUser.coordinates;
        const oldCountry = this.authUser.country;
        const oldCity = this.authUser.city;

        if (geolocation.longitude && geolocation.latitude) {
          // Geolocalización disponible
          if (
            oldCoordinates === undefined ||
            oldCoordinates.latitude === undefined ||
            geolocation.latitude.toFixed(3) !==
              oldCoordinates?.latitude.toFixed(3) ||
            geolocation.longitude.toFixed(3) !==
              oldCoordinates?.longitude.toFixed(3)
          ) {
            const coordinates = await this.userSvc.setCoordinates(
              geolocation.longitude,
              geolocation.latitude
            );
            const user = this.auth.currentUserValue;
            user.coordinates = coordinates;
            this.auth.setAuthUser(this.auth.currentUserValue);
          }
        } else {
          // Geolocalización no disponible, la hacemos manual
          if (
            oldCountry === undefined ||
            oldCity === undefined ||
            oldCountry !== geolocation.country ||
            oldCity !== geolocation.city
          ) {
            const coordinates = await this.userSvc.setManualGeolocation(
              geolocation.country,
              geolocation.city
            );

            const user = this.auth.currentUserValue;
            user.coordinates = coordinates;
            user.country = geolocation.country;
            user.city = geolocation.city;
            this.auth.setAuthUser(this.auth.currentUserValue);
          }
        }
      } catch (e) {
        console.error(e);
        // tienes que aprobar permisos
      }

      this.authUser = this.auth.currentUserValue;
    }
    // --------------------------------------------------

    const radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];
    if (radar_config?.extended !== undefined) {
      this.extended = radar_config.extended;
    }
    if (radar_config?.options !== undefined) {
      this.searchOptions = radar_config.options;
      if (!this.auth.isPremium()) {
        radar_config.options.online = false;
        radar_config.options.fake_location = false;
        radar_config.options.worldwide = false;
        if (radar_config.range === 4) {
          radar_config.range = 2;
        }
      } else if (radar_config.options.worldwide === undefined) {
        radar_config.options.worldwide = true;
      }
      this.config.set("radar_config", radar_config);
      this.searchOptions = radar_config.options;
    }
    if (radar_config?.location !== undefined) {
      this.location = radar_config.location;
    }
    this.countries = this.utils.getCountries();

    if (radar_config?.view === "list") {
      this.view = "list";
      const range = radar_config?.range;
      if (range !== undefined) {
        this.rangeValue = range;
        this.previousRangeValue = range;
        this.ratio = this.getRatio(range);
      } else {
        this.ratio = 50;
      }
    } else {
      this.view = "cards";
      this.tutorial = this.auth.currentUserValue?.config.tutorial ?? true;
      this.ratio = -1;
      await this.utils.delay(500);
      this.slides?.slideTo(0);
    }
    await this.getRadarUsers();
  }

  async initSwiper() {
    const swiperContainer: SwiperContainer =
      document.querySelector("#radar-slide");
    Object.assign(swiperContainer, this.slideOpts);
    swiperContainer.initialize();
    this.slides = swiperContainer.swiper;

    this.slides.on("slideNextTransitionEnd", async () => {
      await this.slide();
    });
  }

  async getRadarUsers(event?: any) {
    try {
      this.loading = true;
      this.detectorRef.detectChanges();
      this.page++;
      let resUsers = [];
      if (!this.extended) {
        resUsers = await this.userSvc.getRadarUsers(this.page, this.ratio);
      } else {
        resUsers = await this.userSvc.getRadarUsers(
          this.page,
          this.ratio,
          this.searchOptions,
          this.location
        );
      }
      this.loading = false;
      this.detectorRef.detectChanges();
      if (this.page === 1) {
        this.config.set("radar", resUsers);
      }

      if (resUsers.length > 0) {
        let users = resUsers;
        if (this.view === "cards") {
          // TODO: que tambien se vea en la vista de lista
          let mixedList = [];
          let adCounter = 0;
          for (let i = 0; i < users.length; i++) {
            mixedList.push(users[i]);
            adCounter++;
            if (adCounter === 5) {
              const ad = this.adService.getRandomAd();
              if (ad) {
                mixedList.push(ad);
                break;
              }
              adCounter = 0;
            }
          }

          this.users =
            this.page === 1
              ? (this.users = mixedList)
              : [...this.users, ...mixedList];
        } else {
          this.users =
            this.page === 1 ? (this.users = users) : [...this.users, ...users];
        }
        this.detectorRef.detectChanges();

        if (this.ratio === -1) {
          if (resUsers?.length > 0 && !this.users?.length) {
            this.users = [...this.users, ...resUsers];
          }

          if ("username" in this.users[0]) {
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
        this.range &&
        (this.range.value as number) > -1 &&
        (this.range.value as number) < 3 &&
        this.automatic &&
        this.view === "list"
      ) {
        let value = this.range.value as number;
        value++;
        this.range.value = value;
        this.changeRatio(value);
      } else {
        this.automatic = false;
        this.loading = false;
        this.allUsersLoaded = true;
      }

      if (await this.toast.getTop()) {
        this.toast.dismiss();
      }
    } catch (e) {
      console.error(e);
    }

    this.slides?.update();
  }

  async showProfile(id: User["id"]) {
    this.ngZone.run(() => {
      this.router.navigate(["/profile", id]);
    });
  }

  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }

  notifications() {
    this.router.navigate(["/notification"]);
  }

  async changeView() {
    this.page = 0;
    this.users = [];
    this.allUsersLoaded = false;
    let radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];

    if (this.view === "cards") {
      this.automatic = true;
      this.view = "list";
      this.ratio = this.getRatio(this.rangeValue);
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

      await this.utils.delay(500);
      this.initSwiper();
    }
    this.config.set("radar_config", radar_config);

    await this.getRadarUsers();
  }

  async changeRatio(value: number) {
    if (value === 4 && !this.auth.isPremium()) {
      this.showPremium("radar");
      this.rangeValue = this.previousRangeValue;
      this.range.value = this.previousRangeValue;
      this.ratio = this.getRatio(this.previousRangeValue);
    } else {
      if (value === 4) {
        this.searchOptions.worldwide = true;
      }
      if (this.users?.length < 15) {
        this.radarAdv();
      }
      this.loading = true;
      this.detectorRef.detectChanges();
      this.ratio = this.getRatio(value);

      let radar_config = (await this.config.get(
        "radar_config"
      )) as Config["radar_config"];
      radar_config.view = this.view;
      radar_config.range = value;
      this.rangeValue = value;
      this.previousRangeValue = value;
      this.config.set("radar_config", radar_config);

      let message = "";
      if (this.ratio === 50) {
        message = this.i18n.translate("searching-people-nearby");
      } else if (this.ratio === 25000) {
        message = this.i18n.translate("searching-people-worldwide");
      } else {
        message =
          this.i18n.translate("searching-people-at") +
          this.ratio +
          this.i18n.translate("km");
      }

      (
        await this.toast.create({
          message,
          position: "middle",
          color: "secondary",
        })
      ).present();

      this.page = 0;
      this.users = [];
      this.allUsersLoaded = false;
      this.radarlist?.scrollToTop(0);
      await this.getRadarUsers();
    }
  }

  async hideProfile(id: User["id"]) {
    const nextIndex = this.users.findIndex((u) => u.id === id) + 1;
    const user = this.users[nextIndex];
    if (user && "username" in user) {
      this.user = user;
      const users = this.users;
      this.users = this.users.filter((u) => u.id !== id);

      const toast = await this.toast.create({
        message: this.i18n.translate("user-hidden"),
        duration: 3000,
        position: "bottom",
        buttons: [
          {
            text: this.i18n.translate("undo"),
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
    await new Promise((resolve) => setTimeout(resolve, 100)); // Agrega un pequeño retraso
    let index = this.slides.activeIndex;

    if (this.tutorial) {
      index = index - 2;
    }

    const user = this.users[index] ?? this.users[index];
    if (user && "username" in user && this.tutorial) {
      this.detectorRef.detectChanges();
      this.userSvc.setTutorialConfig(false);
    }

    if (user && "username" in user) {
      this.user = user;
      if (this.user?.id) {
        this.userSvc.view(this.user?.id);
      }
      if (
        index >= this.users?.length - 10 &&
        !this.loading &&
        !this.allUsersLoaded
      ) {
        await this.getRadarUsers();
      }
      if (
        this.view === "cards" &&
        this.page === 0 &&
        this.user.distance >= 100
      ) {
        this.radarAdv();
      }
    } else if (user) {
      const ad = user as Ad;
      this.adService.viewAd(ad);
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
        return 50;
      case 1:
        return 100;
      case 2:
        return 500;
      case 3:
        return 1000;
      case 4:
        return 25000;
    }
  }

  async radarAdv() {
    const radarAdv = await this.config.get("radarAdv");

    if (!radarAdv) {
      const alert = await this.alert.create({
        header: this.i18n.translate("few-people-nearby"),
        message: this.i18n.translate("help-us-grow"),
        buttons: [
          {
            text: this.i18n.translate("i-want-to-know-more"),
            handler: async () => {
              this.nav.navigateRoot("/recruit");
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

  async dismissFilterOptions() {
    this.filterOptions = false;
    if (this.searchOptionsChanged) {
      this.searchOptionsChanged = false;
      this.loading = true;
      this.page = 0;
      this.users = [];
      this.allUsersLoaded = false;
      if (this.view === "list") {
        this.radarlist?.scrollToTop(0);
        this.automatic = true;
      } else {
        this.slides.activeIndex = 0;
      }
      await this.getRadarUsers();
    }
  }

  async changeLocation(property: string, value: string) {
    this.searchOptionsChanged = true;
    let radar_config = (await this.config.get(
      "radar_config"
    )) as Config["radar_config"];

    if (radar_config?.location) {
      radar_config.location = this.location;
    } else {
      radar_config = { location: this.location };
    }

    radar_config.location[property] = value;
    this.config.set("radar_config", radar_config);
    this.location = radar_config.location;
  }

  async showPremium(
    topic: "ad" | "location" | "radar" | "filter" | "default" = "default"
  ) {
    const modal = await this.modalController.create({
      component: UnlimitedModal,
      cssClass: "vertical-modal",
      componentProps: { topic },
    });
    await modal.present();
  }
}

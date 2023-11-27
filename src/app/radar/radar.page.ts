import {
  Component,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
  NgZone,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  IonRange,
  IonContent,
  ToastController,
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import SwiperCore, {
  Keyboard,
  SwiperOptions,
  EffectCoverflow,
  Mousewheel,
  Scrollbar,
  Swiper,
} from "swiper";
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";

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
import { Haptics } from "@capacitor/haptics";

SwiperCore.use([Keyboard, EffectCoverflow, Mousewheel, Scrollbar]);

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
    preloadImages: false,
    effect: "coverflow",
    mousewheel: true,
  };

  public slideImagesOpts: SwiperOptions = {
    slidesPerView: 1,
    grabCursor: false,
    lazy: true,
    preloadImages: false,
    watchSlidesProgress: true,
    scrollbar: true,
    allowTouchMove: false,
  };

  public hide = false;
  page = 0;
  public ratio = -1;
  public automatic = true;
  public rangeValue = 0;
  authUser: User;
  users: User[] = undefined;
  public user: User;
  public view: "cards" | "list";
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
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController,
    private config: ConfigService,
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private nav: NavService,
    private ngZone: NgZone
  ) {
    this.notificationSvc.notification.subscribe((notification) => {
      this.counters = notification;
    });
  }

  setSwiperInstance(swiper: SwiperCore) {
    this.slides = swiper;
  }

  async tap(event: any, user: User) {
    if (event[0] instanceof Swiper) {
      const slide = event[0];
      const centerStart = screen.width / 2 - 50; // 50px para el centro
      const centerEnd = screen.width / 2 + 50; // 50px para el centro
      let currentX: number;

      if (event[1] instanceof TouchEvent) {
        currentX = slide.touches.currentX;
      } else if (event[1] instanceof PointerEvent) {
        currentX = event[1].clientX;
      }

      if (user.images?.length > 0 && currentX !== undefined) {
        if (currentX > centerEnd) {
          if (!slide.isEnd) {
            slide.slideNext();
            await Haptics.vibrate({ duration: 10 });
          }
        } else if (currentX < centerStart) {
          if (!slide.isBeginning) {
            slide.slidePrev();
            await Haptics.vibrate({ duration: 10 });
          }
        } else if (event[1] instanceof TouchEvent) {
          this.showProfile(user.id);
        }
      } else if (event[1] instanceof TouchEvent) {
        this.showProfile(user.id);
      }
    }
  }

  async ngAfterViewInit() {
    this.users = (await this.config.get("radar")) as Config["radar"];
  }

  async ngOnInit() {
    this.authUser = this.auth.currentUserValue;

    // Y despues iniciamos la geolocalización
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
          // comparamos si ha cambiado la latitud o la longitud
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
            this.authUser.coordinates = coordinates;
            this.auth.setAuthUser(this.authUser);
          } else {
            // Si no ha cambiado la geolocalización, no hacemos nada
          }
        } else {
          // Geolocalización no disponible, la hacemos manual
          // comparamos si ha cambiado el país o la ciudad
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
            this.authUser.coordinates = coordinates;
            this.authUser.country = geolocation.country;
            this.authUser.city = geolocation.city;
            this.auth.setAuthUser(this.authUser);
          } else {
            // Si no ha cambiado la geolocalización, no hacemos nada
          }
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
          this.searchOptions
        );
      }
      this.loading = false;
      this.detectorRef.detectChanges();
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
        (this.range.value as number) > -1 &&
        (this.range.value as number) < 5 &&
        this.automatic
      ) {
        let value = this.range.value as number;
        value++;
        this.range.value = value;
        this.changeRatio(value);
      }

      if (await this.toast.getTop()) {
        this.toast.dismiss();
      }
    } catch (e) {
      console.error(e);
    }
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
      this.detectorRef.detectChanges();
      this.ratio = this.getRatio(value);

      let radar_config = (await this.config.get(
        "radar_config"
      )) as Config["radar_config"];
      radar_config.view = this.view;
      radar_config.range = value;
      this.config.set("radar_config", radar_config);

      let message = "";
      if (this.ratio === 50) {
        message = "Buscando personas cercanas";
      } else if (this.ratio === 25000) {
        message = "Buscando personas mundialmente";
      } else {
        message = "Buscando personas a " + this.ratio + "km";
      }

      (
        await this.toast.create({
          message,
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
    if (index >= this.users?.length - 10 && !this.loading) {
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
    const radarAdv = this.config.get("radarAdv");

    if (!radarAdv) {
      const alert = await this.alert.create({
        header: "¿Pocas personas cerca tuya?",
        message:
          "No llores, acabamos de lanzar la aplicación y aún no hemos llegado a todas partes. ¡Ayúdanos a crecer y conviértete en embajador de frikiradar compartiendo con tus amigas y amigos!",
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
      this.detectorRef.detectChanges();
      this.page = 0;
      this.users = undefined;
      this.radarlist?.scrollToTop(0);
      this.getRadarUsers();
    }
  }
}

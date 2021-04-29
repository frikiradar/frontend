import { Component, ViewChild, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import {
  IonSlides,
  MenuController,
  Platform,
  AlertController,
  IonRange,
  IonContent,
  ToastController
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { User } from "../models/user";
import { GeolocationService } from "../services/geolocation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { DeviceService } from "../services/device.service";
import { UtilsService } from "../services/utils.service";
import { Config, ConfigService } from "../services/config.service";
import { PushService } from "../services/push.service";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage {
  @ViewChild("slides", { static: false })
  slides: IonSlides;
  @ViewChild("range", { static: true })
  range: IonRange;
  @ViewChild("radarlist", { static: true })
  radarlist: IonContent;

  public slideOpts = {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        centeredSlides: true
      }
    }
  };

  public hide = false;
  page = 0;
  ratio = -1;
  authUser: User;
  users: User[] = undefined;
  public user: User;
  public view: "cards" | "list" = "cards";
  coordinates: User["coordinates"];
  public showBackdrop = false;
  public loading = true;

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
    private auth: AuthService,
    public router: Router,
    private geolocationSvc: GeolocationService,
    private deviceSvc: DeviceService,
    private platform: Platform,
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController,
    private config: ConfigService,
    private firebase: FirebaseX,
    private push: PushService
  ) {}

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

    if ((await this.config.get("radarView")) === "list") {
      this.view = "list";
      this.ratio = 50;
    } else {
      await this.slides.slideTo(0);
    }
    this.getRadarUsers();
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
              if ((await this.config.get("radarView")) === "list") {
                this.view = "list";
                this.ratio = 50;
              } else {
                await this.slides.slideTo(0);
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

      const resUsers = await this.userSvc.getRadarUsers(this.page, this.ratio);
      this.loading = false;
      if (this.page === 1) {
        this.config.set("radar", resUsers);
      }

      let users = resUsers;

      this.users =
        this.page === 1 ? (this.users = users) : [...this.users, ...users];
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
    } catch (e) {
      console.error(e);
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  search() {
    this.router.navigate(["/search"]);
  }

  async changeView() {
    this.page = 0;
    this.users = undefined;
    if (this.view === "cards") {
      this.view = "list";
      this.ratio = 50;
    } else {
      this.view = "cards";
      this.ratio = -1;
    }

    this.config.set("radarView", this.view);
    this.getRadarUsers();
  }

  async changeRatio(value: number) {
    if (this.users.length < 15) {
      this.radarAdv();
    }

    switch (value) {
      case 0:
        this.ratio = 10;
        break;
      case 1:
        this.ratio = 50;
        break;
      case 2:
        this.ratio = 100;
        break;
      case 3:
        this.ratio = 500;
        break;
      case 4:
        this.ratio = 1000;
        break;
      case 5:
        this.ratio = 25000;
        break;
    }
    this.page = 0;
    this.users = undefined;
    this.radarlist?.scrollToTop(0);
    this.getRadarUsers();
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
        this.users.length > 10 &&
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
}

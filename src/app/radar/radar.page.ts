import { Component, OnInit, ViewChild } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  AlertController,
  IonContent,
  IonSlides,
  MenuController,
  ToastController
} from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage implements OnInit {
  @ViewChild("slides", { static: true })
  slides: IonSlides;

  radarlist: IonContent;
  // tslint:disable
  public slideOpts = {
    autoHeight: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 90,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: true
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
  // tslint:enable

  public showSkeleton = true;
  public hide = false;
  scroll = 0;
  ratio = 50;
  page = 0;
  authUser: User;
  users: User[] = [];
  public user: User;

  constructor(
    public userSvc: UserService,
    public menu: MenuController,
    private auth: AuthService,
    public router: Router,
    private geolocation: Geolocation,
    private alert: AlertController,
    private utils: UtilsService,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    this.authUser = this.auth.currentUserValue;
    if (this.authUser && this.authUser.id) {
      if (!this.authUser.roles.includes("ROLE_DEMO")) {
        try {
          const coordinates = await this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000
          });
          const longitude = coordinates.coords.longitude;
          const latitude = coordinates.coords.latitude;
          const authUser = await this.userSvc.setCoordinates(
            longitude,
            latitude
          );
          this.auth.setAuthUser(authUser);
        } catch (e) {
          const authUser = await this.userSvc.setCoordinates(0, 0);
          this.auth.setAuthUser(authUser);
        }

        this.authUser = this.auth.currentUserValue;
      }

      this.auth.currentUser.subscribe(async authUser => {
        this.authUser = authUser;
        this.ratio = 50;
        this.page = 0;
        this.scroll = 0;
        this.showSkeleton = true;
        this.getRadarUsers();
      });
    }
  }

  async getRadarUsers() {
    try {
      this.page++;
      let users = await this.userSvc.getRadarUsers(this.page);
      users = users.filter(u => !u.hide && u.match && u.match > 0);

      this.showSkeleton = false;
      this.users =
        this.page === 1 ? (this.users = users) : [...this.users, ...users];

      if (this.page === 1) {
        this.user = this.users[0];
      }
    } catch (e) {
      console.error(e);
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  async hideProfile(id: User["id"]) {
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

  search() {
    this.router.navigate(["/search"]);
  }

  slide() {
    this.slides.getActiveIndex().then(index => {
      this.user = this.users[index];
      if (index >= this.users.length - 5) {
        this.getRadarUsers();
      }
    });
  }
}

import { Component, ViewChild, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import {
  IonSlides,
  MenuController,
  ToastController,
  Platform
} from "@ionic/angular";
import * as LogRocket from "logrocket";

import { User } from "../models/user";
import { GeolocationService } from "../services/geolocation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { DeviceService } from "../services/device.service";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage {
  @ViewChild("slides", { static: true })
  slides: IonSlides;

  public slideOpts = {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        centeredSlides: true
      }
    }
  };

  public showSkeleton = true;
  page = 0;
  authUser: User;
  users: User[] = [];
  public user: User;

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.users?.length) {
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
        case "h":
          this.hideProfile(this.user.id);
          break;
      }
    }
  }

  constructor(
    public userSvc: UserService,
    public menu: MenuController,
    private auth: AuthService,
    public router: Router,
    private toast: ToastController,
    private geolocationSvc: GeolocationService,
    private deviceSvc: DeviceService,
    private platform: Platform
  ) {}

  async ionViewWillEnter() {
    if (!this.users?.length) {
      this.authUser = this.auth.currentUserValue;
      if (this.authUser && this.authUser.id) {
        if (this.platform.is("cordova")) {
          LogRocket.identify("" + this.authUser.id, {
            name: this.authUser.username,
            email: this.authUser.email,
            premium: this.authUser.is_premium,
            device: (await this.deviceSvc.getCurrentDevice()).device_name
          });
        }

        if (!this.authUser.roles.includes("ROLE_DEMO")) {
          try {
            const coordinates = await this.geolocationSvc.getGeolocation();
            const authUser = await this.userSvc.setCoordinates(
              coordinates.longitude,
              coordinates.latitude
            );
            this.auth.setAuthUser(authUser);
          } catch (e) {
            console.error(e);
            // tienes que aprobar permisos
          }

          this.authUser = this.auth.currentUserValue;
        }

        this.auth.currentUser.subscribe(async authUser => {
          if (authUser?.id) {
            this.showSkeleton = true;
            this.authUser = authUser;
            this.page = 0;
            await this.slides.slideTo(0);
            this.getRadarUsers();
          }
        });
      }
    }
  }

  async getRadarUsers() {
    try {
      this.page++;
      const resUsers = await this.userSvc.getRadarUsers(this.page);
      let users = [];
      if (
        this.auth.currentUserValue?.tags?.length > 0 &&
        resUsers.some(u => u.match > 0)
      ) {
        users = resUsers.filter(u => !u.hide && u.match && u.match > 0);
      } else {
        users = resUsers.filter(u => !u.hide);
      }
      this.users =
        this.page === 1 ? (this.users = users) : [...this.users, ...users];

      if (resUsers?.length > 0 && !this.users?.length) {
        this.getRadarUsers();
      }

      if (this.users[0]?.id) {
        this.user = this.users[0];
      }

      this.showSkeleton = false;
    } catch (e) {
      console.error(e);
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
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

  search() {
    this.router.navigate(["/search"]);
  }

  async slide() {
    this.slides.getActiveIndex().then(index => {
      this.user = this.users[index];
      if (index >= this.users?.length - 5) {
        this.getRadarUsers();
      }
    });
  }
}

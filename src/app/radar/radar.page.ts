import { Component, OnInit, ViewChild } from "@angular/core";
import { Event, Router } from "@angular/router";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  AlertController,
  IonContent,
  IonRange,
  MenuController
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";

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
  @ViewChild("range", { static: true })
  range: IonRange;
  @ViewChild("radarlist", { static: true })
  radarlist: IonContent;

  public showSkeleton = true;
  public hideRange = false;
  scroll: number;
  ratio = 50;
  page = 0;
  user: User;
  users: User[] = [];

  constructor(
    public userSvc: UserService,
    public menu: MenuController,
    private auth: AuthService,
    public router: Router,
    private geolocation: Geolocation,
    private alert: AlertController,
    private utils: UtilsService
  ) {}

  async ngOnInit() {
    this.range.value = 1;
    this.user = await this.auth.currentUserValue;
    if (this.user && this.user.id) {
      if (!this.user.roles.includes("ROLE_ADMIN")) {
        try {
          const coordinates = await this.geolocation.getCurrentPosition(/*{
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000
          }*/);
          const longitude = coordinates.coords.longitude;
          const latitude = coordinates.coords.latitude;
          this.user = await this.userSvc.setCoordinates(longitude, latitude);
        } catch (e) {
          this.user = await this.userSvc.setCoordinates(0, 0);
        }
        this.auth.setAuthUser(this.user);
      }

      this.getRadarUsers();
    }
  }

  async getRadarUsers(event?: any) {
    try {
      this.page++;
      const users = await this.userSvc.getRadarUsers(this.ratio, this.page);

      this.showSkeleton = false;
      this.users = [...this.users, ...users];

      if (event) {
        event.target.complete();

        if (users.length < 15) {
          event.target.disabled = true;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  async changeRatio(value: number) {
    if (this.users.length < 15) {
      let config = JSON.parse(localStorage.getItem("config"));
      const radarAdv = config && config.radarAdv ? config.radarAdv : false;

      if (!radarAdv) {
        const alert = await this.alert.create({
          header: "¿Falta gente en tu zona?",
          message:
            "No llores, acabamos de lanzar la aplicación y aún no hemos llegado a todas partes. ¡Ayúdanos a crecer y conviértete en embajador de FrikiRadar compartiendo con tus amigas y amigos!",
          buttons: [
            {
              text: "¡Compartir!",
              handler: () => {
                this.utils.share();
              }
            }
          ]
        });
        if (!config) {
          config = { radarAdv: true };
        } else {
          config.radarAdv = true;
        }
        localStorage.setItem("config", JSON.stringify(config));
        await alert.present();
      }
    }

    this.showSkeleton = true;
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
        this.ratio = 100000;
        break;
    }
    this.page = 0;
    this.users = [];
    this.radarlist.scrollToTop(0);
    this.getRadarUsers();
  }

  search() {
    this.router.navigate(["/search"]);
  }

  async onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      this.hideRange = !(
        $event.detail.scrollTop < this.scroll || this.users.length < 15
      );
      this.scroll = $event.detail.scrollTop;
    }
  }
}

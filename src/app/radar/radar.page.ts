import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { IonRange, MenuController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";

const { Device, App, Toast } = Plugins;

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage implements OnInit {
  @ViewChild("range")
  range: IonRange;

  public showSkeleton = true;
  ratio = 25;
  user: User;
  users: User[];
  backButtonCount = 0;

  constructor(
    public userSvc: UserService,
    public menu: MenuController,
    private auth: AuthService,
    public router: Router
  ) {}

  async ngOnInit() {
    this.range.value = 1;
    this.user = this.auth.currentUserValue;

    this.user.avatar =
      this.user && this.user.avatar
        ? this.user.avatar
        : "../../assets/img/users/default.jpg";

    this.getRadarUsers();
    if ((await Device.getInfo()).platform !== "web") {
      App.addListener("backButton", () => {
        if (this.router.url === "/tabs/radar") {
          this.backButtonCount++;

          switch (this.backButtonCount) {
            case 1:
              Toast.show({
                text: "Pulsa de nuevo para salir de la aplicación."
              });
              break;

            default:
              App.exitApp();
          }
        } else {
          this.backButtonCount = 0;
        }
      });
    }
  }

  async getRadarUsers() {
    try {
      const users = await this.userSvc.getRadarUsers(this.ratio).toPromise();
      users.map(async user => {
        user.avatar = user.avatar
          ? user.avatar
          : "../../assets/img/users/default.jpg";
      });

      setTimeout(() => {
        this.showSkeleton = false;
        this.users = users;
      }, 250);
    } catch (e) {
      console.log(e);
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  async changeRatio(value: number) {
    this.showSkeleton = true;
    switch (value) {
      case 0:
        this.ratio = 5;
        break;
      case 1:
        this.ratio = 25;
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

    this.getRadarUsers();
  }
}

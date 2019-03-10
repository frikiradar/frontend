import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { IonRange, ModalController, PopoverController } from "@ionic/angular";

import { User } from "../models/user";
import { EditProfileModal } from "./../profile/edit-profile/edit-profile.modal";
import { ProfileModal } from "./../profile/profile.modal";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

const { Geolocation } = Plugins;

@Component({
  selector: "app-popover",
  template: `
    <ion-list>
      <ion-item button (click)="editProfileModal()"
        ><ion-label>Mi perfil</ion-label></ion-item
      >
      <ion-item lines="none" button (click)="logout()"
        ><ion-label>Cerrar sesión</ion-label></ion-item
      >
    </ion-list>
  `
})
export class PopoverComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private popover: PopoverController,
    private modal: ModalController
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
    this.popover.dismiss();
  }

  async editProfileModal() {
    this.popover.dismiss();
    const modal = await this.modal.create({
      component: EditProfileModal
    });
    modal.present();
  }
}

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

  constructor(
    public userSvc: UserService,
    public popover: PopoverController,
    private modal: ModalController,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    this.range.value = 1;
    this.user = this.auth.currentUserValue;
    this.user.avatar = this.user.avatar
      ? this.user.avatar
      : "../../assets/img/users/default.jpg";

    this.getRadarUsers();
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const longitude = coordinates.coords.longitude;
      const latitude = coordinates.coords.latitude;
      this.userSvc.setCoordinates(longitude, latitude);
    } catch (e) {
      this.userSvc.setCoordinates(0, 0);
    }
  }

  async getRadarUsers() {
    this.userSvc.getRadarUsers(this.ratio).subscribe(users => {
      users.map(async user => {
        user.avatar = user.avatar
          ? user.avatar
          : "../../assets/img/users/default.jpg";
      });

      setTimeout(() => {
        this.showSkeleton = false;
        this.users = users;
      }, 250);
    });
  }

  async showPopover(ev: Event) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    popover.onDidDismiss().then(() => {
      this.getRadarUsers();
    });
  }

  async showProfileModal(user: User) {
    const modal = await this.modal.create({
      component: ProfileModal,
      componentProps: { user }
    });
    await modal.present();
    // this.popover.dismiss();
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

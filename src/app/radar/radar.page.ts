import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { ModalController, PopoverController } from "@ionic/angular";

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
    await modal.present();
  }
}

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage implements OnInit {
  constructor(
    private userSvc: UserService,
    public popover: PopoverController,
    private modal: ModalController
  ) {}

  async ngOnInit() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const longitude = coordinates.coords.longitude;
      const latitude = coordinates.coords.latitude;
      this.userSvc.setCoordinates(longitude, latitude);
    } catch (e) {
      console.log(e);
    }
  }

  async showPopover(ev: Event) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async showProfileModal() {
    this.popover.dismiss();
    const modal = await this.modal.create({
      component: ProfileModal
    });
    await modal.present();
  }
}

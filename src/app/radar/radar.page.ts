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

  /*HAVERSINE JAVASCRIPT CALCULAR DISTANCIA
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }

    var lat2 = 42.741; 
    var lon2 = -71.3161; 
    var lat1 = 42.806911; 
    var lon1 = -71.290611; 

    var R = 6371; // km 
    //has a problem with the .toRad() method below.
    var x1 = lat2-lat1;
    var dLat = x1.toRad();  
    var x2 = lon2-lon1;
    var dLon = x2.toRad();  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 

    alert(d); */
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-popover",
  template: `
    <ion-list>
      <ion-item button><ion-label>Mi perfil</ion-label></ion-item>
      <ion-item button><ion-label>Editar preferencias</ion-label></ion-item>
      <ion-item button (click)="logout()"
        ><ion-label>Cerrar sesión</ion-label></ion-item
      >
    </ion-list>
  `
})
export class PopoverComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl("/");
  }
}

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage {
  constructor(private router: Router, public popover: PopoverController) {}

  async showPopover(ev: Event) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  showProfile() {
    this.router.navigateByUrl("/app/profile");
  }
}

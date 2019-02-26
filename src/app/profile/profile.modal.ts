import { Component } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";

@Component({
  selector: "app-popover",
  template: `
    <ion-list>
      <ion-item button (click)="editProfileModal()"
        ><ion-label>Reportar</ion-label></ion-item
      >
      <ion-item lines="none" button (click)="logout()"
        ><ion-label>Bloquear</ion-label></ion-item
      >
    </ion-list>
  `
})
export class PopoverComponent {
  constructor(
    private popover: PopoverController,
  ) {}

}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.modal.html",
  styleUrls: ["./profile.modal.scss"]
})
export class ProfileModal {
  constructor(public modal: ModalController, public popover: PopoverController) {}

  async showOptions(ev: Event) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  closeModal() {
    this.modal.dismiss();
  }
}

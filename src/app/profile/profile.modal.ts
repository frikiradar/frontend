import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  PopoverController
} from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.modal.html",
  styleUrls: ["./profile.modal.scss"]
})
export class ProfileModal implements OnInit {
  user: User;

  constructor(
    private navParams: NavParams,
    public modal: ModalController,
    public popover: PopoverController,
    private alert: AlertController,
    private userSvc: UserService
  ) {}

  async ngOnInit() {
    const id = this.navParams.get("id");
    this.user = await this.userSvc.getUser(id);

    this.user.avatar = this.user.avatar
      ? this.user.avatar
      : "./assets/img/users/default.jpg";
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }

  async test() {
    const alert = await this.alert.create({
      header: "Función aún no disponible",
      message: "Esta acción se encuentra aún en desarrollo.",
      buttons: ["Gracias por avisar"]
    });

    await alert.present();
  }

  closeModal() {
    this.modal.dismiss();
  }
}

import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { BannedUsersModal } from "./banned-users/banned-users.modal";
import { GlobalNotificationsModal } from "./global-notifications/global-notifications.modal";
import { EditRoomsModal } from "./rooms/edit-rooms/edit-rooms.modal";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"]
})
export class AdminPage implements OnInit {
  public user: User;

  constructor(
    private modal: ModalController,
    private auth: AuthService,
    private nav: NavController
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async bannedUsersModal() {
    const modal = await this.modal.create({
      component: BannedUsersModal
    });
    return await modal.present();
  }

  async globalNotificationsModal() {
    const modal = await this.modal.create({
      component: GlobalNotificationsModal
    });
    return await modal.present();
  }

  async editRoomsModal() {
    const modal = await this.modal.create({
      component: EditRoomsModal
    });
    return await modal.present();
  }

  back() {
    this.nav.back();
  }
}

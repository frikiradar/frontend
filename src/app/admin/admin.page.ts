import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { NavService } from "../services/navigation.service";
import { AuthService } from "./../services/auth.service";
import { BannedUsersModal } from "./banned-users/banned-users.modal";
import { GlobalNotificationsModal } from "./global-notifications/global-notifications.modal";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.page.html",
    styleUrls: ["./admin.page.scss"],
    standalone: false
})
export class AdminPage implements OnInit {
  public user: User;

  constructor(
    private modalController: ModalController,
    private auth: AuthService,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async bannedUsersModal() {
    const modal = await this.modalController.create({
      component: BannedUsersModal,
    });
    return await modal.present();
  }

  async globalNotificationsModal() {
    const modal = await this.modalController.create({
      component: GlobalNotificationsModal,
    });
    return await modal.present();
  }

  back() {
    this.nav.back();
  }
}

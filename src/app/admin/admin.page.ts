import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { PushService } from "../services/push.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { BannedUsersModal } from "./banned-users/banned-users.modal";
import { GlobalNotificationsModal } from "./global-notifications/global-notifications.modal";

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
    private userSvc: UserService,
    private alert: AlertController,
    private push: PushService
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

  async testNotification() {
    this.push.testNotification();
  }
}

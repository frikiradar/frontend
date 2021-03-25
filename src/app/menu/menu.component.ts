import { Component } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MenuController, ModalController, Platform } from "@ionic/angular";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { CreditsModal } from "../credits/credits.modal";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { User } from "./../models/user";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  avatar: SafeResourceUrl;
  public user: User;

  constructor(
    public menu: MenuController,
    public auth: AuthService,
    public utils: UtilsService,
    private router: Router,
    private modal: ModalController,
    public platform: Platform,
    public userSvc: UserService
  ) {}

  viewProfile() {
    this.router.navigate(["/profile"]);
    this.menu.close();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.menu.close();
  }

  admin() {
    this.router.navigate(["/admin"]);
    this.menu.close();
  }

  async showAmbassador() {
    const modal = await this.modal.create({
      component: AmbassadorModal
    });
    return await modal.present();
  }

  share() {
    this.utils.share();
  }

  async credits() {
    const modal = await this.modal.create({
      component: CreditsModal
    });
    return await modal.present();
  }

  logout() {
    this.auth.logout();
    this.menu.enable(false);
    this.menu.close();
  }
}

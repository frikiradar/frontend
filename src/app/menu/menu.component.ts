import { Component } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { MenuController, ModalController, Platform } from "@ionic/angular";

import { CreditsModal } from "../credits/credits.modal";
import { RulesPage } from "../rules/rules.page";
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
  public selected: string;

  constructor(
    public menu: MenuController,
    public auth: AuthService,
    public utils: UtilsService,
    private router: Router,
    private modal: ModalController,
    public platform: Platform,
    public userSvc: UserService
  ) {
    this.router.events.subscribe(async (event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.selected = event.url;
      }
    });
  }

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
    this.router.navigate(["/ambassador"]);
    this.menu.close();
  }

  share() {
    this.utils.share();
  }

  async credits() {
    const modal = await this.modal.create({
      component: CreditsModal,
      cssClass: "full-modal"
    });
    return await modal.present();
  }

  async rules() {
    const modal = await this.modal.create({
      component: RulesPage,
      cssClass: "full-modal"
    });
    return await modal.present();
  }

  bugs() {
    this.router.navigate(["/room/frikiradar-bugs"]);
    this.menu.close();
  }

  logout() {
    this.auth.logout();
    this.menu.enable(false);
    this.menu.close();
  }
}

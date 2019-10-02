import { Component } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MenuController, ModalController, NavController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { CreditsModal } from "./../insert-coin/credits/credits.modal";
import { PremiumModal } from "./../insert-coin/premium/premium.modal";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  avatar: SafeResourceUrl;

  constructor(
    public menu: MenuController,
    public auth: AuthService,
    public utils: UtilsService,
    private router: Router,
    private nav: NavController,
    private modal: ModalController
  ) {}

  editProfile() {
    this.router.navigate(["/edit-profile"]);
    this.menu.close();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.menu.close();
  }

  async showCredits() {
    const modal = await this.modal.create({
      component: CreditsModal
    });
    return await modal.present();
  }

  async showPremium() {
    const modal = await this.modal.create({
      component: PremiumModal
    });
    return await modal.present();
  }

  share() {
    this.utils.share();
  }

  logout() {
    this.auth.logout();
    this.menu.enable(false);
    this.menu.close();
  }
}

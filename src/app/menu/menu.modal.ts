import { ModalController, Platform } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CreditsModal } from "../credits/credits.modal";
import { AuthService } from "../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { UserService } from "../services/user.service";
import { UnlimitedModal } from "../unlimited/unlimited.modal";

@Component({
  selector: "menu-modal",
  templateUrl: "./menu.modal.html",
  styleUrls: ["./menu.modal.scss"],
})
export class MenuModal implements OnInit {
  constructor(
    private router: Router,
    public auth: AuthService,
    private modalController: ModalController,
    private subModal: ModalController,
    public userSvc: UserService,
    public platform: Platform
  ) {}

  ngOnInit() {}

  viewProfile() {
    this.router.navigate(["/profile"]);
    this.modalController.dismiss();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.modalController.dismiss();
  }

  admin() {
    this.router.navigate(["/admin"]);
    this.modalController.dismiss();
  }

  async showRecruit() {
    this.router.navigate(["/recruit"]);
    this.modalController.dismiss();
  }

  async showPremium() {
    const modal = await this.subModal.create({
      component: UnlimitedModal,
      cssClass: "vertical-modal",
    });
    return await modal.present();
  }

  async credits() {
    const modal = await this.subModal.create({
      component: CreditsModal,
      cssClass: "vertical-modal",
    });
    return await modal.present();
  }

  async rules() {
    const modal = await this.subModal.create({
      component: RulesPage,
      cssClass: "vertical-modal",
    });
    return await modal.present();
  }

  logout() {
    this.auth.logout();
    this.modalController.dismiss();
  }
}

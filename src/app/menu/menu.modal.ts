import { ModalController, Platform } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CreditsModal } from "../credits/credits.modal";
import { AuthService } from "../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { UserService } from "../services/user.service";

@Component({
  selector: "menu-modal",
  templateUrl: "./menu.modal.html",
  styleUrls: ["./menu.modal.scss"],
})
export class MenuModal implements OnInit {
  constructor(
    private router: Router,
    public auth: AuthService,
    private modal: ModalController,
    private subModal: ModalController,
    public userSvc: UserService,
    public platform: Platform
  ) {}

  ngOnInit() {}

  viewProfile() {
    this.router.navigate(["/profile"]);
    this.modal.dismiss();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.modal.dismiss();
  }

  admin() {
    this.router.navigate(["/admin"]);
    this.modal.dismiss();
  }

  async showAmbassador() {
    this.router.navigate(["/ambassador"]);
    this.modal.dismiss();
  }

  async credits() {
    const modal = await this.subModal.create({
      component: CreditsModal,
      cssClass: "full-modal",
    });
    return await modal.present();
  }

  async rules() {
    const modal = await this.subModal.create({
      component: RulesPage,
      cssClass: "full-modal",
    });
    return await modal.present();
  }

  bugs() {
    this.router.navigate(["/room/frikiradar-bugs"]);
    this.modal.dismiss();
  }

  logout() {
    this.auth.logout();
    this.modal.dismiss();
  }
}

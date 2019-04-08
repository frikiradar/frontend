import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { MenuController, NavController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  avatar: SafeResourceUrl;

  constructor(
    public menu: MenuController,
    public auth: AuthService,
    public utils: UtilsService,
    private nav: NavController
  ) {}

  async ngOnInit() {
    this.avatar =
      this.auth.currentUserValue && this.auth.currentUserValue.avatar
        ? this.auth.currentUserValue.avatar
        : "../../assets/img/users/default.jpg";
  }

  editProfile() {
    this.nav.navigateRoot(["/edit-profile"]);
    this.menu.close();
  }

  settings() {
    this.nav.navigateRoot(["/settings"]);
    this.menu.close();
  }

  logout() {
    this.auth.logout();
    this.menu.close();
  }
}

import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

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
    public router: Router,
    public utils: UtilsService
  ) {}

  async ngOnInit() {
    this.avatar =
      this.auth.currentUserValue && this.auth.currentUserValue.avatar
        ? this.auth.currentUserValue.avatar
        : "../../assets/img/users/default.jpg";
  }

  editProfile() {
    this.router.navigate(["/edit-profile"]);
    this.menu.close();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
    this.menu.close();
  }
}

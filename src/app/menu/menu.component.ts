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
    public utils: UtilsService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (!this.auth.currentUserValue) {
      return;
    }
    this.avatar = this.auth.currentUserValue.avatar;
  }

  editProfile() {
    this.router.navigate(["/edit-profile"]);
    this.menu.close();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.menu.close();
  }

  logout() {
    this.auth.logout();
    this.menu.enable(false);
    this.menu.close();
  }
}

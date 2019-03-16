import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  constructor(
    private menu: MenuController,
    public auth: AuthService,
    private router: Router
  ) {}

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

import { Component } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { MenuController, NavController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";

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
    private socialSharing: SocialSharing
  ) {}

  editProfile() {
    this.nav.navigateRoot(["/edit-profile"]);
    this.menu.close();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.menu.close();
  }

  share() {
    const options = {
      message:
        "Conoce a personas con tus mismos gustos con FikiRadar, la app de chat y citas para frikis.", // not supported on some apps (Facebook, Instagram)
      subject: "FrikiRadar, la app de chat y citas para frikis", // fi. for email
      url: "https://play.google.com/store/apps/details?id=com.frikiradar.app",
      chooserTitle: "Elige una app y ayúdanos a seguir creciendo" // Android only, you can override the default share sheet title,
    };

    this.socialSharing.shareWithOptions(options);
  }

  logout() {
    this.auth.logout();
    this.menu.enable(false);
    this.menu.close();
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, PopoverController } from "@ionic/angular";

import { SafeResourceUrl } from "@angular/platform-browser";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  user: User;
  avatar: SafeResourceUrl;

  constructor(
    public popover: PopoverController,
    private alert: AlertController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.avatar = "../../assets/img/users/default.jpg";
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.user = await this.userSvc.getUser(+id);
    if (this.user.avatar) {
      this.avatar = this.user.avatar;
    }
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }

  async showChat(id: User["id"]) {
    this.router.navigate(["/chat", id]);
  }

  async test() {
    const alert = await this.alert.create({
      header: "Función aún no disponible",
      message: "Esta acción se encuentra aún en desarrollo.",
      buttons: ["Gracias por avisar"]
    });

    await alert.present();
  }
}

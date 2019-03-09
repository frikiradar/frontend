import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ModalController, NavParams, PopoverController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.modal.html",
  styleUrls: ["./profile.modal.scss"]
})
export class ProfileModal implements OnInit {
  user: User;
  image: SafeResourceUrl = "./assets/img/users/default.jpg";

  constructor(
    private navParams: NavParams,
    public modal: ModalController,
    public popover: PopoverController,
    private userSvc: UserService
  ) {}

  async ngOnInit() {
    this.user = await this.userSvc.getUser(this.navParams.get("id"));
    if (this.user.avatar) {
      this.image = this.user.avatar;
    }
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }

  closeModal() {
    this.modal.dismiss();
  }
}

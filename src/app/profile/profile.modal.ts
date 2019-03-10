import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, PopoverController } from "@ionic/angular";

import { User } from "../models/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.modal.html",
  styleUrls: ["./profile.modal.scss"]
})
export class ProfileModal implements OnInit {
  user: User;

  constructor(
    private navParams: NavParams,
    public modal: ModalController,
    public popover: PopoverController
  ) {}

  async ngOnInit() {
    this.user = this.navParams.get("user");
    this.user.avatar = this.user.avatar
      ? this.user.avatar
      : "./assets/img/users/default.jpg";
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

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";

import { SafeResourceUrl } from "@angular/platform-browser";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public user: User;
  public avatar: SafeResourceUrl;
  public showToolbar = false;

  constructor(
    public popover: PopoverController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public utils: UtilsService
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

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
  }
}

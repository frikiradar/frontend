import { ModalController } from "@ionic/angular";
import { Component, Input } from "@angular/core";

import { Like } from "src/app/models/like";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user";
import { LikeService } from "src/app/services/like.service";
import { NavService } from "src/app/services/navigation.service";

@Component({
    selector: "profile-likes-modal",
    templateUrl: "./likes.modal.html",
    styleUrls: ["./likes.modal.scss"],
    standalone: false
})
export class LikesModal {
  @Input() likes: { delivered: Like[]; received: Like[] };
  @Input() param: "received" | "delivered";
  @Input() user: User;

  constructor(
    private modalController: ModalController,
    public auth: AuthService,
    private likeSvc: LikeService,
    private nav: NavService
  ) {}

  async viewProfile(id: number) {
    this.modalController.dismiss();
    if (
      this.param === "received" &&
      this.user.id === this.auth.currentUserValue.id
    ) {
      if (!this.likes[this.param].find((l) => l.user.id === id).time_read) {
        await this.likeSvc.readLike(id);
      }
    }
    this.nav.navigateRoot(["/profile/", id]);
  }
}

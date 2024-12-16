import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Story } from "src/app/models/story";
import { User } from "src/app/models/user";

@Component({
    selector: "comment-likes-modal",
    templateUrl: "./comment-likes.modal.html",
    styleUrls: ["./comment-likes.modal.scss"],
    standalone: false
})
export class CommentLikesModal {
  @Input() likes: Story["comments"][0]["likes"];
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.close({ showProfile: true });
      this.router.navigate(["/profile", id]);
    }
  }

  close(param?: any) {
    this.modalController.dismiss(param);
  }
}

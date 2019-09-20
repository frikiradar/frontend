import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

import { Like } from "../models/like";
import { LikeService } from "../services/like.service";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-likes",
  templateUrl: "./likes.page.html",
  styleUrls: ["./likes.page.scss"]
})
export class LikesPage {
  likes: Like[];
  showSkeleton = true;

  constructor(
    private router: Router,
    private likeSvc: LikeService,
    public auth: AuthService,
    public menu: MenuController
  ) {}

  async ionViewWillEnter() {
    this.getLikes();
  }

  async getLikes() {
    this.likes = await this.likeSvc.getLikes();
    this.showSkeleton = false;
  }

  async viewProfile(id: number) {
    await this.likeSvc.readLike(id);
    this.router.navigate(["/profile/", id]);
  }
}

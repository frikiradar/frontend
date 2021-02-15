import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides, MenuController } from "@ionic/angular";

import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.page.html",
  styleUrls: ["./community.page.scss"]
})
export class CommunityPage {
  @ViewChild("stories", { static: false })
  stories: IonSlides;

  showSkeleton = true;
  public param: "delivered" | "received" = "received";

  public storiesOpts = {
    slidesPerView: 4.5
  };

  constructor(
    private router: Router,
    public auth: AuthService,
    public menu: MenuController
  ) {}
}

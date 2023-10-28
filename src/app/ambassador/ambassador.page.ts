import { Component, OnInit } from "@angular/core";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";
import { UrlService } from "../services/url.service";

@Component({
  selector: "ambassador-modal",
  templateUrl: "./ambassador.page.html",
  styleUrls: ["./ambassador.page.scss"],
})
export class AmbassadorPage implements OnInit {
  public user: User;
  constructor(
    private auth: AuthService,
    private urlSvc: UrlService,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  public goToPatreon() {}

  close() {
    this.nav.back();
  }
}

import { Component, OnInit } from "@angular/core";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";

@Component({
    selector: "recruit-modal",
    templateUrl: "./recruit.page.html",
    styleUrls: ["./recruit.page.scss"],
    standalone: false
})
export class RecruitPage implements OnInit {
  public user: User;
  constructor(private auth: AuthService, private nav: NavService) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  public goToPatreon() {}

  back() {
    this.nav.back();
  }
}

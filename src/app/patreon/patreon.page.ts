import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";
import { UrlService } from "../services/url.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-patreon",
  templateUrl: "./patreon.page.html",
  styleUrls: ["./patreon.page.scss"]
})
export class PatreonPage implements OnInit {
  public code: string;
  // private state: string;

  constructor(
    private urlSvc: UrlService,
    private route: ActivatedRoute,
    private nav: NavService,
    private router: Router,
    private userSvc: UserService,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get("code");
    // this.state = this.route.snapshot.queryParamMap.get("state");
    if (this.code) {
      try {
        await this.userSvc.linkToPatreon(this.code);
      } catch (e) {
        console.error("error al vincular");
      }
      this.router.navigate(["/patreon"]);
    }
  }

  link() {
    const client_id =
      "T6KMsWw673-ffH__MVNHOkzEMMavJ6IP_TMv1UHmNqv96PHC-_DsDmiYOyOvwloj";
    //const client_secret = "_dyBkMG-HQB4uPIZD4mYdFNOBMPGCnqMIDvmvJkJxTYpFxdz_qYSf1ZEPiooZO7Q";

    const url =
      "https://www.patreon.com/oauth2/authorize?response_type=code&client_id=" +
      client_id;

    this.urlSvc.openUrl(url);
  }

  close() {
    this.nav.navigateRoot("/");
  }
}

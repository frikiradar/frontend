import { Component, OnInit } from "@angular/core";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { NavService } from "../services/navigation.service";
import { UrlService } from "../services/url.service";

@Component({
  selector: "ambassador-modal",
  templateUrl: "./ambassador.page.html",
  styleUrls: ["./ambassador.page.scss"]
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

  public goToPatreon() {
    let url = "";
    if (this.auth.isMaster()) {
      const client_id =
        "T6KMsWw673-ffH__MVNHOkzEMMavJ6IP_TMv1UHmNqv96PHC-_DsDmiYOyOvwloj";
      const client_secret =
        "_dyBkMG-HQB4uPIZD4mYdFNOBMPGCnqMIDvmvJkJxTYpFxdz_qYSf1ZEPiooZO7Q";

      const redirect_url = "https://frikiradar.app/ambassador";
      url =
        "https://www.patreon.com/oauth2/authorize?response_type=code&client_id=" +
        client_id +
        "&redirect_uri=" +
        redirect_url;
    } else {
      url = "https://patreon.com/frikiradar";
    }

    this.urlSvc.openUrl(url);
  }

  close() {
    this.nav.back();
  }
}

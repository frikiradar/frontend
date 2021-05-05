import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { NavService } from "../services/navigation.service";
import { UrlService } from "../services/url.service";

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
    private nav: NavService
  ) {}

  ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get("code");
    // this.state = this.route.snapshot.queryParamMap.get("state");
    if (this.code) {
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
    this.nav.back();
  }
}

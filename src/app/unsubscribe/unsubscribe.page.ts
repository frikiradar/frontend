import { UserService } from "src/app/services/user.service";

import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { I18nService } from "../services/i18n.service";

@Component({
  selector: "app-unsubscribe",
  templateUrl: "./unsubscribe.page.html",
  styleUrls: ["./unsubscribe.page.scss"],
})
export class UnsubscribePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userSvc: UserService,
    private i18n: I18nService
  ) {}

  public title = "";
  public text = "";

  async ngOnInit() {
    const code = this.route.snapshot.paramMap.get("code");
    try {
      await this.userSvc.unsubscribe(code);
      this.title = this.i18n.translate("you-have-unsubscribed-successfully");
      this.text = this.i18n.translate(
        "you-will-no-longer-receive-notifications"
      );
    } catch (e) {
      this.title = this.i18n.translate("could-not-unsubscribe");
      this.text = this.i18n.translate("please-reply-to-the-email");
    }
  }
}

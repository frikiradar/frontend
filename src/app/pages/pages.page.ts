import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "../models/page";
import { Config, ConfigService } from "../services/config.service";
import { NavService } from "../services/navigation.service";
import { PageService } from "../services/page.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.page.html",
  styleUrls: ["./pages.page.scss"],
})
export class PagesPage implements OnInit {
  public pages: Page[];
  public loading = true;

  constructor(
    private pagesSvc: PageService,
    private router: Router,
    private nav: NavService,
    private config: ConfigService
  ) {}

  async ngAfterViewInit() {
    this.pages = (await this.config.get("pages")) as Config["pages"];
  }

  async ngOnInit() {
    this.pages = await this.pagesSvc.getPages();
    this.config.set("pages", this.pages);

    this.loading = false;
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  back() {
    this.nav.back();
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "../models/page";
import { NavService } from "../services/navigation.service";
import { PageService } from "../services/page.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.page.html",
  styleUrls: ["./pages.page.scss"]
})
export class PagesPage implements OnInit {
  public pages: Page[];

  constructor(
    private pagesSvc: PageService,
    private router: Router,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.pages = await this.pagesSvc.getPages();
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  back() {
    this.nav.back();
  }
}

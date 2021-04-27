import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

import { Page } from "../models/page";
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
    private nav: NavController
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

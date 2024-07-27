import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "../models/page";
import { ConfigService } from "../services/config.service";
import { NavService } from "../services/navigation.service";
import { PageService } from "../services/page.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.page.html",
  styleUrls: ["./pages.page.scss"],
})
export class PagesPage implements OnInit {
  public pages: Page[];
  public otherPages: Page[];
  private notFilteredPages: Page[];
  private notFilteredOtherPages: Page[];
  public loading = true;
  private page = 1;
  private query: string;

  constructor(
    private pagesSvc: PageService,
    private router: Router,
    private nav: NavService,
    private config: ConfigService
  ) {}

  async ngOnInit() {
    await this.getPages();

    this.loading = false;
  }

  async getPages() {
    this.pages = await this.pagesSvc.getPages();
    this.notFilteredPages = this.pages;
    this.config.set("pages", this.pages);
    this.otherPages = await this.pagesSvc.getOtherPages(15, 1);
    this.notFilteredOtherPages = this.otherPages;
  }

  async addOtherPages(event: any) {
    if (!this.query) {
      this.page++;
      const otherPages = await this.pagesSvc.getOtherPages(15, this.page);
      this.otherPages = [...this.otherPages, ...otherPages];

      if (event) {
        event.target.complete();

        if (otherPages.length < 15) {
          event.target.disabled = true;
        }
      }
    }
  }

  async filterPages(value: string) {
    this.query = value;
    if (value) {
      this.pages = this.notFilteredPages?.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      this.otherPages = this.notFilteredOtherPages?.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );

      let searchPages = await this.pagesSvc.searchPages(value);
      searchPages = searchPages.filter(
        (p) => !this.otherPages.find((op) => op.id === p.id)
      );
      this.otherPages = [...this.otherPages, ...searchPages];
    } else {
      this.pages = this.notFilteredPages;
      this.otherPages = this.notFilteredOtherPages;
    }
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  back() {
    this.nav.back();
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInput, NavController, ToastController } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { I18nService } from "../services/i18n.service";
import { Page } from "../models/page";
import { PageService } from "../services/page.service";
import { Config, ConfigService } from "../services/config.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  @ViewChild("searchBar", { static: true })
  searchBar: IonInput;

  public pages: Page[];
  public otherPages: Page[];
  private notFilteredPages: Page[];
  private notFilteredOtherPages: Page[];

  public loading = true;
  query: string;
  public page = 1;
  users: User[];
  showSkeleton = false;

  constructor(
    private pagesSvc: PageService,
    private config: ConfigService,
    public userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastController,
    private nav: NavController,
    private i18n: I18nService
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("query")) {
      this.query = this.route.snapshot.paramMap.get("query");
      this.searchBar.value = this.query;
      this.search();
    } else {
      this.getPages();
    }

    this.loading = false;

    setTimeout(() => {
      this.searchBar.setFocus();
    }, 250);
  }

  async getPages() {
    this.pages = await this.pagesSvc.getPages();
    this.notFilteredPages = this.pages;
    this.config.set("pages", this.pages);
    this.otherPages = await this.pagesSvc.getOtherPages(15, 1);
    this.notFilteredOtherPages = this.otherPages;
  }

  async search(event?: any, addpage = false) {
    if (this.query && this.query.trim()) {
      if (addpage) {
        this.page++;
      }
      if (this.page === 1) {
        this.showSkeleton = true;
      }
      let users = await this.userSvc.searchUsers(
        this.query.trim(),
        "distance",
        this.page
      );

      users = users.filter((u) => !u.hide);

      this.showSkeleton = false;
      this.users =
        this.page === 1 ? (this.users = users) : [...this.users, ...users];

      if (event) {
        event.target.complete();

        if (users.length < 15) {
          event.target.disabled = true;
        }
      }
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  async hideProfile(id: User["id"]) {
    const users = this.users;
    this.users = this.users.filter((u) => u.id !== id);

    const toast = await this.toast.create({
      message: this.i18n.translate("user-hidden"),
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: this.i18n.translate("undo"),
          handler: () => {
            this.users = users;
          },
        },
      ],
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      this.userSvc.hide(id);
    }
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

  newSearch(query: string) {
    this.query = query;
    this.page = 1;
    this.search();
  }

  async dragItem(event: any, id: number) {
    if (event.detail.ratio > 1.8) {
      this.hideProfile(id);
    } else if (event.detail.ratio < -1.8) {
      await event.target.close();
      this.showProfile(id);
    }
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  back() {
    this.nav.back();
  }
}

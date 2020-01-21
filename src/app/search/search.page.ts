import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInput } from "@ionic/angular";

import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  @ViewChild("searchBar", { static: true })
  searchBar: IonInput;

  order: "distance" | "match" = "distance";
  query: string;
  page = 0;
  users: User[];
  showSkeleton = false;

  constructor(
    public userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("query")) {
      this.query = this.route.snapshot.paramMap.get("query");
      this.searchBar.value = this.query;
      this.search();
    }
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 250);
  }

  async search(event?: any) {
    if (this.query && this.query.trim()) {
      this.page++;
      if (this.page === 1) {
        this.showSkeleton = true;
      }
      const users = await this.userSvc.searchUsers(
        this.query.trim(),
        this.order,
        this.page
      );

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

  /*async searchTag(query: string, category: string) {
    this.sheet.dismiss();

    if (query) {
      this.list = (await this.tagSvc.searchTag(query, category)) as {
        name: string;
        total: number;
      }[];

      if (this.list.length) {
        let buttons = [];
        this.list.forEach(op => {
          buttons = [
            ...buttons,
            {
              text: `${op.name} (${op.total})`,
              handler: () => {
                this.inputTag(op.name, category);
              }
            }
          ];
        });

        const actionSheet = await this.sheet.create({
          keyboardClose: false,
          buttons
        });
        await actionSheet.present();
      }
    }
  }*/

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  changeOrder(order: "distance" | "match") {
    this.order = order;
    this.page = 0;
    this.search();
  }
}

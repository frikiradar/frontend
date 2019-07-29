import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonSearchbar } from "@ionic/angular";

import { User } from "../models/user";
import { RestService } from "./../services/rest.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  @ViewChild("searchBar", {static: true})
  searchBar: IonSearchbar;

  order = "distance";
  query: string;
  users: User[];
  showSkeleton = false;

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("query")) {
      this.query = this.route.snapshot.paramMap.get("query");
      this.searchBar.value = this.query;
    }
  }

  async search(query?: string) {
    if (!query) {
      query = this.query;
    }

    if (query && query.trim()) {
      this.query = query;
      this.showSkeleton = true;
      this.users = (await this.rest
        .post("search", { query: query.trim(), order: this.order })
        .toPromise()) as User[];

      this.showSkeleton = false;
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

  changeOrder(order: string) {
    this.order = order;
    this.search();
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSearchbar, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { ProfileModal } from "../profile/profile.modal";
import { RestService } from "./../services/rest.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  order = "distance";
  query: string;
  users: User[];
  showSkeleton = false;

  constructor(private modal: ModalController, private rest: RestService) {}

  ngOnInit() {}

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

      this.users.map(async user => {
        user.avatar = user.avatar
          ? user.avatar
          : "../../assets/img/users/default.jpg";
      });

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

  async showProfileModal(id: User["id"]) {
    const modal = await this.modal.create({
      component: ProfileModal,
      componentProps: { id }
    });
    await modal.present();
  }

  changeOrder(order: string) {
    this.order = order;
    this.search();
  }
}

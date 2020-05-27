import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInput, ToastController } from "@ionic/angular";

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
  public page = 1;
  users: User[];
  showSkeleton = false;

  constructor(
    public userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastController
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
        this.order,
        this.page
      );

      users = users.filter(u => !u.hide);

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
    this.users = this.users.filter(u => u.id !== id);

    const toast = await this.toast.create({
      message: "Has ocultado el usuario",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.users = users;
          }
        }
      ]
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      this.userSvc.hide(id);
    }
  }

  changeOrder(order: "distance" | "match") {
    this.order = order;
    this.page = 0;
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
}

import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, Platform } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  @Input() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();
  public desktop = false;
  public userId: User["id"];
  public hideModal = true;
  public hideList = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private modalController: ModalController,
    private config: ConfigService,
    private platform: Platform
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      const id = +this.route.snapshot.paramMap.get("id");
      this.showChat(id);
    }

    if (window.innerWidth > 991) {
      this.desktop = true;
    }
    window.onresize = async () => {
      this.desktop = window.innerWidth > 991;
    };

    const rules = await this.config.get("rules");
    if (!rules) {
      const modal = await this.modalController.create({
        component: RulesPage,
        cssClass: "vertical-modal",
        backdropDismiss: false,
      });
      return await modal.present();
    }

    this.platform.backButton.subscribeWithPriority(1, async () => {
      console.log("back");
      console.log(location.pathname);
      if (location.pathname === "/chat/" + this.userId) {
        this.backToList();
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  async showChat(id: User["id"]) {
    // this.nav.navigateRoot("/chat/" + id);
    // this.router.navigate(["/chat/" + id]);

    history.pushState(null, "", "/chat/" + id);
    this.userId = id;
    setTimeout(() => this.userChangeEvent.emit(id), 0);

    this.hideModal = false;
    this.hideList = true;
  }

  backToList() {
    this.hideModal = true;
    this.hideList = false;
    history.pushState(null, "", "/chat");
  }
}

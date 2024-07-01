import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";
import { ChatModalComponent } from "./chat-modal/chat-modal.component";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  @Input() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();
  public desktop = false;
  public userId: User["id"];

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private modalController: ModalController,
    private config: ConfigService
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
      console.log(window.innerWidth);
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
  }

  async showChat(id: User["id"]) {
    if (this.desktop) {
      this.userId = id;
      setTimeout(() => this.userChangeEvent.emit(id), 0);
    } else {
      const modal = await this.modalController
        .create({
          component: ChatModalComponent,
          componentProps: { userId: id },
          cssClass: "vertical-modal",
        })
        .then((modal) => {
          modal.present();
        });
    }
  }

  backToList() {
    this.userId = null;
  }
}

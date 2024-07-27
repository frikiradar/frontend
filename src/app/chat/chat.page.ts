import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";
import { ChatModalComponent } from "./chat-modal/chat-modal.component";
import { ChatService } from "../services/chat.service";
import { Subscription } from "rxjs";
import {
  NotificationCounters,
  NotificationService,
} from "../services/notification.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  @Input() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();
  public desktop = window.innerWidth > 991;
  public userId: User["id"];
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private modalController: ModalController,
    private config: ConfigService,
    private chatSvc: ChatService,
    private notificationSvc: NotificationService
  ) {}

  async ngOnInit() {
    window.onresize = async () => {
      this.desktop = window.innerWidth > 991;
    };

    this.routeSub = this.route.paramMap.subscribe((params) => {
      const id = +params.get("id");
      if (id) {
        history.pushState(null, null, "/tabs/chat");
        this.showChat(id);
      }
    });

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
    this.chatSvc.selectUser(id);
    if (this.desktop) {
      this.userId = id;
    } else {
      const modal = await this.modalController.create({
        component: ChatModalComponent,
        componentProps: { userId: id },
        cssClass: "vertical-modal",
      });

      await modal.present();

      await modal.onDidDismiss().then((data) => {
        this.backToList();
      });
    }
  }

  backToList() {
    this.userId = null;
    this.chatSvc.selectUser(null);

    this.notificationSvc
      .getUnread()
      .then((notification: NotificationCounters) => {
        this.notificationSvc.setNotification(notification);
      });

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { ModalController, NavController, Platform } from "@ionic/angular";
import { getMessaging, onMessage } from "firebase/messaging";
import { FirebaseMessaging } from "@capacitor-firebase/messaging";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  userId: User["id"];
  chats: Chat[];
  public desktop = false;
  public messageEvent: EventEmitter<Chat> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private platform: Platform,
    private modalController: ModalController,
    private config: ConfigService,
    private nav: NavController
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.userId = +this.route.snapshot.paramMap.get("id");
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

    this.firebaseListener();
  }

  async showChat(id: User["id"]) {
    this.nav.navigateRoot(["/chat", id]);
  }

  async backToList() {
    this.nav.navigateRoot(["/tabs/chat"]);
  }

  async firebaseListener() {
    if (this.platform.is("capacitor")) {
      FirebaseMessaging.addListener("notificationReceived", (payload) => {
        const notification = payload.notification;
        const data = notification.data as {
          message: string;
          topic: string;
        };
        if (data?.message && data?.topic === "chat") {
          const message = JSON.parse(data.message) as Chat;
          console.log("message", message);
          this.messageEvent.emit(message);
        }
      });
    } else {
      const app = initializeApp(environment.firebase, "chat");
      const messaging = getMessaging(app);
      onMessage(messaging, (payload) => {
        if (payload?.data?.message && payload?.data?.topic === "chat") {
          const message = JSON.parse(payload.data.message) as Chat;
          console.log("message", message);
          this.messageEvent.emit(message);
        }
      });
    }
  }

  messageChange(message: Chat) {
    this.messageEvent.emit(message);
  }
}

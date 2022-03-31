import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { Platform } from "@ionic/angular";
import {
  PushNotifications,
  PushNotificationSchema,
} from "@capacitor/push-notifications";
import { AngularFireMessaging } from "@angular/fire/compat/messaging";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { NavService } from "../services/navigation.service";

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
    private afMessaging: AngularFireMessaging,
    private platform: Platform,
    private nav: NavService
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
    this.firebaseListener();
  }

  async showChat(id: User["id"]) {
    this.nav.navigateRoot("/chat/" + id);
  }

  async backToList() {
    this.nav.navigateRoot("/chat");
  }

  async firebaseListener() {
    if (this.platform.is("capacitor")) {
      await PushNotifications.addListener(
        "pushNotificationReceived",
        (notification: PushNotificationSchema) => {
          console.log(notification);
          if (
            notification?.data.message &&
            notification?.data.topic === "chat"
          ) {
            const message = JSON.parse(notification.data.message) as Chat;
            // console.log(message);
            this.messageEvent.emit(message);
          }
        }
      );
    } else {
      this.afMessaging.messages.subscribe((payload: any) => {
        // console.log(payload);
        if (payload?.data?.message && payload?.data?.topic === "chat") {
          const message = JSON.parse(payload.data.message) as Chat;
          // console.log(payload.data);
          this.messageEvent.emit(message);
        }
      });
    }
  }

  messageChange(message: Chat) {
    this.messageEvent.emit(message);
  }
}

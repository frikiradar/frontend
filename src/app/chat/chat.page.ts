import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { Platform } from "@ionic/angular";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { NavService } from "../services/navigation.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
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
    private firebase: FirebaseX,
    private platform: Platform,
    private localNotifications: LocalNotifications,
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
    if (this.platform.is("cordova")) {
      this.firebase.onMessageReceived().subscribe(
        notification => {
          if (notification?.message && notification?.topic === "chat") {
            const message = JSON.parse(notification.message) as Chat;
            // console.log(message);
            this.messageEvent.emit(message);

            if (
              this.router.url.includes("chat") &&
              message?.fromuser?.id !== this.userId &&
              notification?.notify === "true"
            ) {
              this.localNotifications.schedule({
                title: notification?.title,
                text: notification?.body,
                sound: "file://assets/audio/bipbip.mp3",
                smallIcon: "res://notification_icon",
                color: "#e91e63",
                icon: notification?.icon,
                // attachments: notification?.attachments,
                channel: notification?.topic,
                data: notification
                // actions
              });
            }
          }
        },
        error => {
          console.error("Error in notification", error);
        }
      );
    } else {
      this.afMessaging.messages.subscribe((payload: any) => {
        console.log(payload);
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

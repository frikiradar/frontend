import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { Location } from "@angular/common";
import { ModalController, Platform } from "@ionic/angular";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";

import { User } from "../models/user";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { ChatModalComponent } from "./chat-modal/chat-modal.component";
import { ChatService } from "../services/chat.service";

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
    private location: Location,
    private modal: ModalController,
    private afMessaging: AngularFireMessaging,
    private firebase: FirebaseX,
    private platform: Platform,
    private chatSvc: ChatService,
    private localNotifications: LocalNotifications
  ) {}

  async ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.userId = +this.route.snapshot.paramMap.get("id");

      if (window.innerWidth <= 991) {
        this.showChat(this.userId);
      }
    }

    if (window.innerWidth > 991) {
      this.desktop = true;
    }
    window.onresize = async () => {
      const oldDesktop = this.desktop;
      this.desktop = window.innerWidth > 991;
      if ((await this.modal.getTop()) && oldDesktop !== this.desktop) {
        this.modal.dismiss();
      }
    };
    this.connectSSE();
  }

  async showChat(id: User["id"]) {
    this.userId = +id;
    if (window.innerWidth <= 991) {
      const modal = await this.modal.create({
        component: ChatModalComponent,
        componentProps: { userId: this.userId, messageEvent: this.messageEvent }
      });
      await modal.present();
      const data = await modal.onDidDismiss();
      this.messageEvent.emit(data.data);
    }
  }

  async connectSSE() {
    if (this.platform.is("cordova")) {
      this.firebase.onMessageReceived().subscribe(
        notification => {
          if (notification?.message) {
            const message = JSON.parse(notification.message) as Chat;
            // console.log(message);
            this.messageEvent.emit(message);

            if (
              this.router.url.includes("chat") &&
              message?.fromuser?.id !== this.userId &&
              notification?.notify
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
        if (payload?.data?.message) {
          const message = JSON.parse(payload.data.message) as Chat;
          // console.log(message);
          this.messageEvent.emit(message);
        }
      });
    }
  }

  messageChange(message: Chat) {
    this.messageEvent.emit(message);
  }
}

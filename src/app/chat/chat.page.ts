import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { Location } from "@angular/common";
import { ModalController, Platform } from "@ionic/angular";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireMessaging } from "@angular/fire/messaging";

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
    private chatSvc: ChatService
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
    this.userId = id;
    this.location.replaceState("/chat/" + id);
    if (window.innerWidth <= 991) {
      const modal = await this.modal.create({
        component: ChatModalComponent,
        componentProps: { userId: this.userId, messageEvent: this.messageEvent }
      });
      await modal.present();
      const data = await modal.onDidDismiss();
      this.messageEvent.emit(data.data);
      if (this.router.url !== "/tabs/chat") {
        this.router.navigate(["/tabs/chat"]);
      } else {
        await modal.onDidDismiss();
        this.location.replaceState("/tabs/chat");
      }
    }
  }

  async connectSSE() {
    if (this.platform.is("cordova")) {
      this.firebase.onMessageReceived().subscribe(
        payload => {
          if (payload?.message) {
            const message = JSON.parse(payload.message);
            // console.log(message);
            this.messageEvent.emit(message);
          }
        },
        error => {
          console.error("Error in notification", error);
        }
      );
    } else {
      this.afMessaging.messages.subscribe((payload: any) => {
        if (payload?.data?.message) {
          const message = JSON.parse(payload.data.message);
          console.log(message);
          this.messageEvent.emit(message);
        }
      });
    }
  }

  messageChange(message: Chat) {
    this.messageEvent.emit(message);
  }
}

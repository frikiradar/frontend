import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { Location } from "@angular/common";
import { ModalController, ToastController } from "@ionic/angular";

import { User } from "../models/user";
import { ChatService } from "../services/chat.service";
import { Chat } from "./../models/chat";
import { AuthService } from "./../services/auth.service";
import { ChatModalComponent } from "./chat-modal/chat-modal.component";
import { AngularFireMessaging } from "@angular/fire/messaging";

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
    private chatSvc: ChatService,
    private location: Location,
    private modal: ModalController,
    private afMessaging: AngularFireMessaging
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
      if (this.router.url !== "/tabs/chat") {
        this.router.navigate(["/tabs/chat"]);
      } else {
        await modal.onDidDismiss();
        this.location.replaceState("/tabs/chat");
      }
    }
  }

  async connectSSE() {
    this.afMessaging.messages.subscribe(
      (notification: any) => {
        if (notification?.data?.message) {
          const message = JSON.parse(notification.data.message);
          this.messageEvent.emit(message);
        }
      },
      error => {
        console.error("Escucha a firebase perdida", error);
        // this.connectSSE();
      }
    );

    /*(await this.chatSvc.sseListener(this.auth.currentUserValue.id)).subscribe(
      async (message: Chat) => {
        this.messageEvent.emit(message);
      },
      error => {
        console.error("Escucha al servidor de chats perdida", error);
        this.connectSSE();
      }
    );*/
  }
}

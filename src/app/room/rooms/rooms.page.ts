import { Component, OnInit } from "@angular/core";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { Router } from "@angular/router";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from "@ionic/angular";
import { ItemReorderEventDetail } from "@ionic/core";
import * as deepEqual from "deep-equal";

import { Chat } from "src/app/models/chat";
import { Room } from "src/app/models/room";
import { AuthService } from "src/app/services/auth.service";
import { Config, ConfigService } from "src/app/services/config.service";
import { NavService } from "src/app/services/navigation.service";
import { RoomService } from "src/app/services/room.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.page.html",
  styleUrls: ["./rooms.page.scss"]
})
export class RoomsPage implements OnInit {
  public rooms: Room[];
  public loading = true;

  constructor(
    private roomSvc: RoomService,
    private auth: AuthService,
    private router: Router,
    private nav: NavService,
    private config: ConfigService,
    private afMessaging: AngularFireMessaging,
    private firebase: FirebaseX,
    private platform: Platform
  ) { }

  async ngAfterViewInit() {
    this.rooms = (await this.config.get("rooms")) as Config["rooms"];
  }

  ngOnInit() {
    this.getRooms();
    this.connectSSE();
  }

  async getRooms() {
    let rooms = await this.roomSvc.getRooms();
    const rooms_config = await this.roomSvc.getRoomsConfig();
    rooms.map(r => {
      let configRoom = rooms_config?.find(room => room.slug === r.slug);
      if (
        configRoom?.last_message < r?.last_message ||
        (!configRoom?.last_message && r?.last_message)
      ) {
        r.unread = true;
      }
    });

    rooms = rooms.filter(r => {
      if (this.auth.currentUserValue?.roles?.includes(r.permissions[0])) {
        return r;
      }
    });
    rooms = await this.roomSvc.orderRooms(rooms);

    if (this.rooms) {
      if (!deepEqual(this.rooms, rooms)) {
        this.rooms = rooms;
        this.config.set("rooms", rooms);
      }
    } else {
      this.rooms = rooms;
      this.config.set("rooms", rooms);
    }

    this.loading = false;
  }

  async showRoom(slug: Room["slug"]) {
    this.router.navigate(["/room", slug]);
    this.rooms.map(r => {
      if (r.slug === slug) {
        r.unread = false;
      }
    });
  }

  async reorderRooms(event: CustomEvent<ItemReorderEventDetail>) {
    this.roomSvc.reorderRooms(event.detail.from, event.detail.to);
    event.detail.complete();
    const rooms = await this.roomSvc.orderRooms(this.rooms);
    this.config.set("rooms", rooms);
  }

  async connectSSE() {
    if (this.platform.is("cordova")) {
      this.firebase.onMessageReceived().subscribe(
        notification => {
          if (notification?.message) {
            const message = JSON.parse(notification.message) as Chat;
            // console.log(message);
            this.messageReceived(message);
          }
        });
    } else {
      this.afMessaging.messages.subscribe((payload: any) => {
        if (payload?.data?.message) {
          const message = JSON.parse(payload.data.message) as Chat;
          this.messageReceived(message)
        }
      });
    }
  }

  async messageReceived(message: Chat) {
    // console.log(message);
    this.rooms.map(m => {
      if (m.slug === message.conversationId) {
        if (message.fromuser.id !== this.auth.currentUserValue.id) {
          m.unread = true;
        }
      }
    });
  }

  back() {
    this.nav.back();
  }
}

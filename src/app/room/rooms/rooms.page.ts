import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  private source: EventSource;
  private conErrors = 0;
  public loading = true;

  constructor(
    private roomSvc: RoomService,
    private auth: AuthService,
    private router: Router,
    private nav: NavService,
    private config: ConfigService
  ) {}

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
    this.source = await this.roomSvc.register(`rooms`);
    this.source.addEventListener("message", async (res: any) => {
      let message = JSON.parse(res.data) as Chat;
      this.rooms.map(m => {
        if (m.slug === message.conversationId) {
          if (message.fromuser.id !== this.auth.currentUserValue.id) {
            m.unread = true;
          }
        }
      });
    });

    this.source.addEventListener("error", async error => {
      console.error("Escucha al servidor de salas perdida", error);

      this.conErrors++;
    });

    this.source.addEventListener("open", async error => {
      // console.log("Conexión establecida", this.source.url);
      this.conErrors = 0;
    });
  }

  back() {
    this.nav.back();
    this.source?.close();
  }

  ngOnDestroy() {
    this.source?.close();
    // console.log("Conexión cerrada", this.source.url);
  }
}

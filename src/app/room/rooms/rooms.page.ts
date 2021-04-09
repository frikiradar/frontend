import { Component, OnInit } from "@angular/core";
import { NavigationStart, Event, Router } from "@angular/router";
import { ItemReorderEventDetail } from "@ionic/core";
import { Chat } from "src/app/models/chat";

import { Room } from "src/app/models/room";
import { AuthService } from "src/app/services/auth.service";
import { Config, ConfigService } from "src/app/services/config.service";
import { RoomService } from "src/app/services/room.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.page.html",
  styleUrls: ["./rooms.page.scss"]
})
export class RoomsPage implements OnInit {
  public rooms: Room[];
  private source: EventSource;

  constructor(
    private roomSvc: RoomService,
    private config: ConfigService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRooms();
    this.connectSSE();
  }

  async getRooms() {
    let rooms = await this.roomSvc.getRooms();
    const rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];
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
    this.rooms = await this.roomSvc.orderRooms(rooms);
  }

  async showRoom(slug: Room["slug"]) {
    this.router.navigate(["/room", slug]);
    this.rooms.map(r => {
      if (r.slug === slug) {
        r.unread = false;
      }
    });
  }

  reorderRooms(event: CustomEvent<ItemReorderEventDetail>) {
    this.roomSvc.reorderRooms(event.detail.from, event.detail.to);
    event.detail.complete();
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
      this.source.close();
      this.connectSSE();
    });
  }
}

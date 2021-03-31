import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemReorderEventDetail } from "@ionic/core";
import { Vibration } from "@ionic-native/vibration/ngx";

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

  constructor(
    private roomSvc: RoomService,
    private config: ConfigService,
    private auth: AuthService,
    private router: Router,
    private vibration: Vibration
  ) {}

  ngOnInit() {
    this.getRooms();
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
  }

  reorderRooms(event: CustomEvent<ItemReorderEventDetail>) {
    this.roomSvc.reorderRooms(event.detail.from, event.detail.to);
    event.detail.complete();
  }
}

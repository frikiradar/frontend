import { Component, ViewChild } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { IonSlides, MenuController } from "@ionic/angular";
import { Room } from "../models/room";
import { Config, ConfigService } from "../services/config.service";
import { RoomService } from "../services/room.service";

import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.page.html",
  styleUrls: ["./community.page.scss"]
})
export class CommunityPage {
  @ViewChild("stories", { static: false })
  stories: IonSlides;
  public rooms: Room[];

  showSkeleton = true;
  public param: "delivered" | "received" = "received";

  public storiesOpts = {
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 6.5
      }
    }
  };

  constructor(
    private router: Router,
    public auth: AuthService,
    public menu: MenuController,
    private roomSvc: RoomService,
    private config: ConfigService
  ) {
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/tabs/community") {
          this.getRooms();
        }
      }
    });
  }

  async ngOnInit() {
    this.getRooms();
  }

  async getRooms() {
    this.rooms = await this.roomSvc.getRooms();
    const rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];
    this.rooms.map(r => {
      let configRoom = rooms_config?.find(room => room.slug === r.slug);
      if (
        configRoom?.last_message < r?.last_message ||
        (!configRoom?.last_message && r?.last_message)
      ) {
        r.unread = true;
      }
    });
  }

  async showRoom(slug: Room["slug"]) {
    this.router.navigate(["/room", slug]);
  }
}

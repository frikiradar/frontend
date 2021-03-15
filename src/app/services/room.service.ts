import { Injectable } from "@angular/core";
import { Chat } from "../models/chat";

import { Room } from "../models/room";
import { Config, ConfigService } from "./config.service";
import { PushService } from "./push.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  constructor(
    private rest: RestService,
    private config: ConfigService,
    private uploadSvc: UploadService,
    private push: PushService
  ) {}

  async getRooms() {
    return (await this.rest.get("rooms").toPromise()) as Room[];
  }

  async getRoom(slug: string) {
    return (await this.rest.get(`room/${slug}`).toPromise()) as Room;
  }

  async register(channel: string) {
    const config = await this.config.getConfig();
    return new EventSource(`${config.push_url}?topic=${channel}`);
  }

  async getMessages(slug: string, page = 1) {
    return (await this.rest
      .get(`room-messages/${slug}?page=${page}`)
      .toPromise()) as Chat[];
  }

  async writing(name: string, slug: string) {
    return (await this.rest
      .put("writing-room", { name, slug })
      .toPromise()) as Chat;
  }

  async sendMessage(
    slug: string,
    name: string,
    text: string,
    replyto?: number
  ) {
    return (await this.rest
      .put("room-message", { slug, name, text, replyto })
      .toPromise()) as Chat;
  }

  async sendImage(slug: string, image: File, text: string) {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("slug", "" + slug);
    formData.set("text", text);
    return (await this.uploadSvc.upload("room-upload", formData)) as Chat;
  }

  async setLastMessage(slug: string, value: number) {
    let rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];

    if (rooms_config) {
      if (rooms_config.some(r => r.slug === slug)) {
        rooms_config.map(r => {
          if (r.slug === slug) {
            r.last_message = value;
          }
        });
      } else {
        rooms_config = [
          ...rooms_config,
          {
            slug,
            last_message: value
          }
        ];
      }
    } else {
      rooms_config = [
        {
          slug,
          last_message: value
        }
      ];
    }

    this.config.set("rooms_config", rooms_config);
  }

  async setNotifications(room: Room) {
    let rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];

    if (rooms_config) {
      if (
        rooms_config.some(
          r =>
            r.slug === room.slug &&
            (r.notifications || r.notifications === false)
        )
      ) {
        // console.log("Ya tiene notificaciones configuradas, ignoramos");
      } else {
        this.activateNotifications(room);
      }
    } else {
      this.activateNotifications(room);
    }
  }

  async getNotificationsSettings(room: Room): Promise<boolean> {
    let rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];

    if (rooms_config) {
      const roomConfig = rooms_config.find(r => r.slug === room.slug);
      if (roomConfig.notifications) {
        return true;
      }

      return false;
    } else {
      return true;
    }
  }

  async activateNotifications(room: Room) {
    let rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];

    if (rooms_config) {
      if (rooms_config.some(r => r.slug === room.slug)) {
        rooms_config.map(r => {
          if (r.slug === room.slug) {
            r.notifications = true;
          }
        });
      } else {
        rooms_config = [
          ...rooms_config,
          {
            slug: room.slug,
            notifications: true
          }
        ];
      }
    } else {
      rooms_config = [
        {
          slug: room.slug,
          notifications: true
        }
      ];
    }

    this.config.set("rooms_config", rooms_config);
    this.push.setChannel(room.slug, room.name, room.description);
  }

  async disableNotifications(room: Room) {
    let rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];

    if (rooms_config) {
      if (rooms_config.some(r => r.slug === room.slug)) {
        rooms_config.map(r => {
          if (r.slug === room.slug) {
            r.notifications = false;
          }
        });
      } else {
        rooms_config = [
          ...rooms_config,
          {
            slug: room.slug,
            notifications: false
          }
        ];
      }
    } else {
      rooms_config = [
        {
          slug: room.slug,
          notifications: false
        }
      ];
    }

    this.config.set("rooms_config", rooms_config);
    this.push.removeChannel(room.slug);
  }
}

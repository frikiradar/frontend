import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chat } from "../models/chat";

import { Room } from "../models/room";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { Config, ConfigService } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  public source: EventSource;

  constructor(
    private rest: RestService,
    private config: ConfigService,
    private uploadSvc: UploadService, // private push: PushService
    private auth: AuthService
  ) {}

  async getRooms() {
    return (await this.rest.get("rooms").toPromise()) as Room[];
  }

  async getRoom(slug: string) {
    return (await this.rest.get(`room/${slug}`).toPromise()) as Room;
  }

  async sseRegister(channel: string) {
    const config = await this.config.getConfig();
    this.source = new EventSource(`${config.push_url}?topic=${channel}`);
  }

  async sseListener() {
    if (!this.source || this.source.readyState === 2) {
      this.sseRegister("rooms");
    }

    return new Observable(observer => {
      this.source.onmessage = x => observer.next(JSON.parse(x.data) as Chat);
      this.source.onerror = x => {
        this.source.close();
        observer.error(x);
      };

      return () => {
        this.source.close();
      };
    });
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
    replyto?: number,
    tmp_id?: string,
    mentions?: User["username"][]
  ) {
    return (await this.rest
      .put("room-message", { slug, name, text, replyto, tmp_id, mentions })
      .toPromise()) as Chat;
  }

  async sendImage(
    slug: string,
    name: string,
    image: Blob,
    text: string,
    tmp_id?: string,
    mentions?: User["username"][]
  ) {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("slug", "" + slug);
    formData.set("name", "" + name);
    formData.set("text", text);
    formData.set("tmp_id", tmp_id);
    formData.set("mentions", JSON.stringify(mentions));
    return (await this.uploadSvc.upload("room-upload", formData)) as Chat;
  }

  async setLastMessage(room: Room) {
    const value = room.last_message;
    const slug = room.slug;
    let rooms_config = await this.getRoomsConfig();

    let last_message = 0;
    if (rooms_config?.find(c => c.slug === slug)?.last_message) {
      last_message = rooms_config?.find(c => c.slug === slug).last_message;
    }

    if (value > last_message) {
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

      await this.setRoomsConfig(rooms_config);
    }
  }

  async reorderRooms(from: number, to: number) {
    let rooms_config = await this.getRoomsConfig();

    rooms_config.map((r, index) => {
      if (r.order === from) {
        r.order = to;
      } else if (r.order > from && r.order <= to) {
        r.order--;
      } else if (r.order < from && r.order >= to) {
        r.order++;
      }
    });
    await this.setRoomsConfig(rooms_config);
  }

  async orderRooms(rooms: Room[]): Promise<Room[]> {
    let rooms_config = await this.getRoomsConfig();

    rooms_config = rooms_config?.filter(r => {
      if (rooms.find(room => room.slug === r.slug)) {
        return r;
      }
    });
    if (
      rooms_config &&
      !rooms_config?.some(r => r.order === undefined) &&
      !rooms_config?.some(r => {
        if (
          rooms_config.some(r1 => r1.slug !== r.slug && r1.order === r.order)
        ) {
          return true;
        }
      }) &&
      rooms_config?.length === rooms.length
    ) {
      // Ordename según la config
      rooms.sort((a, b) => {
        return (
          rooms_config.find(r => r.slug === a.slug)?.order -
          rooms_config.find(r => r.slug === b.slug)?.order
        );
      });
    } else {
      await this.initOrderRoom(rooms);
    }
    return rooms;
  }

  async initOrderRoom(rooms: Room[]) {
    let rooms_config = await this.getRoomsConfig();

    rooms.forEach((room, index) => {
      if (rooms_config) {
        if (rooms_config.some(r => r.slug === room.slug)) {
          rooms_config.map(r => {
            if (r.slug === room.slug) {
              r.order = index;
            }
          });
        } else {
          rooms_config = [
            ...rooms_config,
            {
              slug: room.slug,
              order: index
            }
          ];
        }
      } else {
        rooms_config = [
          {
            slug: room.slug,
            order: index
          }
        ];
      }
    });
    await this.setRoomsConfig(rooms_config);
  }

  async setRoomsConfig(rooms_config: Config["rooms"]) {
    const user = (await this.rest
      .put("rooms-config", { rooms_config })
      .toPromise()) as User;
    this.auth.setAuthUser(user);
  }

  async getRoomsConfig() {
    const config = this.auth.currentUserValue?.config;
    return config?.rooms;
  }

  ngOnDestroy() {
    this.source?.close();
    // console.log("Conexión cerrada", this.source.url);
  }
}

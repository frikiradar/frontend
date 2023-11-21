import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { Chat } from "../models/chat";
import { Event } from "../models/event";
import { Page } from "../models/page";
import { User } from "../models/user";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { firstValueFrom } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private http: HttpClient
  ) {}

  async getEvent(id: Event["id"]): Promise<Event> {
    try {
      return (await firstValueFrom(this.rest.get(`event/${id}`))) as Event;
    } catch (e) {
      throw new Error("No se puede obtener el evento");
    }
  }

  async getPublicEvent(id: Event["id"]): Promise<Event> {
    try {
      return (await firstValueFrom(
        this.http.get(`${environment.root}api/event/${id}`, httpOptions)
      )) as Event;
    } catch (e) {
      throw new Error("No se puede obtener el evento");
    }
  }

  async setEvent(
    title: Event["title"],
    description: Event["description"],
    date: Event["date"],
    endDate: Event["date_end"],
    url: Event["url"],
    price: Event["price"],
    type: Event["type"],
    country: Event["country"],
    city: Event["city"],
    address: Event["address"],
    postal_code: Event["postal_code"],
    contact_phone: Event["contact_phone"],
    contact_email: Event["contact_email"],
    minage: Event["minage"],
    image: Blob,
    user?: User["id"],
    slug?: Page["slug"],
    official?: boolean
  ) {
    const formData: FormData = new FormData();
    formData.set("title", title);
    formData.set("description", description);
    formData.set("date", date);
    if (endDate) {
      formData.set("end_date", endDate);
    }
    formData.set("url", url);
    formData.set("price", "" + price);
    formData.set("minage", "" + minage);
    formData.set("image", image);
    formData.set("type", type);
    if (user) {
      formData.set("user", "" + user);
    }
    if (slug) {
      formData.set("slug", slug);
    }

    if (type === "offline") {
      formData.set("country", country);
      formData.set("city", city);
      formData.set("address", address);
      if (postal_code) {
        formData.set("postal_code", postal_code);
      }
      if (contact_phone) {
        formData.set("contact_phone", contact_phone);
      }
      if (contact_email) {
        formData.set("contact_email", contact_email);
      }
    }

    const event = (await this.uploadSvc.upload("event", formData)) as Event;
    return event;
  }

  async editEvent(
    id: number,
    title: Event["title"],
    description: Event["description"],
    date: Event["date"],
    endDate: Event["date_end"],
    url: Event["url"],
    price: Event["price"],
    type: Event["type"],
    country: Event["country"],
    city: Event["city"],
    address: Event["address"],
    postal_code: Event["postal_code"],
    contact_phone: Event["contact_phone"],
    contact_email: Event["contact_email"],
    minage: Event["minage"],
    image: Blob
  ) {
    const formData: FormData = new FormData();
    formData.set("id", "" + id);
    formData.set("title", title);
    formData.set("description", description);
    formData.set("date", date);
    if (endDate) {
      formData.set("end_date", endDate);
    }
    formData.set("url", url);
    formData.set("price", "" + price);
    formData.set("minage", "" + minage);
    formData.set("image", image);
    formData.set("type", type);

    if (type === "offline") {
      formData.set("country", country);
      formData.set("city", city);
      formData.set("address", address);
      if (postal_code) {
        formData.set("postal_code", postal_code);
      }
      if (contact_phone) {
        formData.set("contact_phone", contact_phone);
      }
      if (contact_email) {
        formData.set("contact_email", contact_email);
      }
    }

    return (await this.uploadSvc.upload("edit-event", formData)) as Event;
  }

  async getMyEvents() {
    return (await firstValueFrom(this.rest.get(`my-events`))) as Event[];
  }

  async getSuggestedEvents() {
    return (await firstValueFrom(this.rest.get(`suggested-events`))) as Event[];
  }

  async getOnlineEvents() {
    return (await firstValueFrom(this.rest.get(`online-events`))) as Event[];
  }

  async getNearEvents() {
    return (await firstValueFrom(this.rest.get(`near-events`))) as Event[];
  }

  async getEventsSlug(slug: string) {
    return (await firstValueFrom(
      this.rest.get(`slug-events/${slug}`)
    )) as Event[];
  }

  async cancelEvent(id: Event["id"]): Promise<Event> {
    try {
      const event = (await firstValueFrom(
        this.rest.put("cancel-event", { id })
      )) as Event;
      return event;
    } catch (e) {
      throw new Error("No se puede cancelar el evento");
    }
  }

  async deleteEvent(event: Event) {
    try {
      await firstValueFrom(this.rest.delete(`delete-event/${event.id}`));
    } catch (e) {
      throw new Error("No se puede eliminar el evento");
    }
  }

  async participateEvent(id: Event["id"]) {
    try {
      const event = (await firstValueFrom(
        this.rest.post("participate-event", { id })
      )) as Event;
      return event;
    } catch (e) {
      throw new Error("Error al participar en el evento");
    }
  }

  async unparticipateEvent(id: Event["id"]) {
    try {
      const event = (await firstValueFrom(
        this.rest.delete(`remove-participant-event/${id}`)
      )) as Event;
      return event;
    } catch (e) {
      throw new Error("Error al quitar participación en el evento");
    }
  }

  async confirmDate(id: Chat["id"]) {
    try {
      const event = (await firstValueFrom(
        this.rest.post("confirm-date", { id })
      )) as Event;
      return event;
    } catch (e) {
      throw new Error("Error al confirmar la cita");
    }
  }

  async declineDate(id: Chat["id"]) {
    try {
      const event = (await firstValueFrom(
        this.rest.put("decline-date", { id })
      )) as Event;
      return event;
    } catch (e) {
      throw new Error("No se puede rechazar la cita");
    }
  }
}

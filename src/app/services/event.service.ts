import { Injectable } from "@angular/core";
import { Chat } from "../models/chat";

import { Event } from "../models/event";
import { Page } from "../models/page";
import { User } from "../models/user";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private rest: RestService, private uploadSvc: UploadService) {}

  async getEvent(id: Event["id"]): Promise<Event> {
    try {
      return (await this.rest.get(`event/${id}`).toPromise()) as Event;
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
    slug?: Page["slug"]
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

    return (await this.uploadSvc.upload("event", formData)) as Event;
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
    return (await this.rest.get(`my-events`).toPromise()) as Event[];
  }

  async getSuggestedEvents() {
    return (await this.rest.get(`suggested-events`).toPromise()) as Event[];
  }

  async getOnlineEvents() {
    return (await this.rest.get(`online-events`).toPromise()) as Event[];
  }

  async getNearEvents() {
    return (await this.rest.get(`near-events`).toPromise()) as Event[];
  }

  async getEventsSlug(slug: string) {
    return (await this.rest.get(`slug-events/${slug}`).toPromise()) as Event[];
  }

  async cancelEvent(id: Event["id"]): Promise<Event> {
    try {
      return (await this.rest.put("cancel-event", { id }).toPromise()) as Event;
    } catch (e) {
      throw new Error("No se puede cancelar el evento");
    }
  }

  async deleteEvent(id: Event["id"]) {
    try {
      await this.rest.delete(`delete-event/${id}`).toPromise();
    } catch (e) {
      throw new Error("No se puede eliminar el evento");
    }
  }

  async participateEvent(id: Event["id"]) {
    try {
      return (await this.rest
        .post("participate-event", { id })
        .toPromise()) as Event;
    } catch (e) {
      throw new Error("Error al participar en el evento");
    }
  }

  async unparticipateEvent(id: Event["id"]) {
    try {
      return (await this.rest
        .delete(`remove-participant-event/${id}`)
        .toPromise()) as Event;
    } catch (e) {
      throw new Error("Error al quitar participación en el evento");
    }
  }

  async confirmDate(id: Chat["id"]) {
    try {
      return (await this.rest.post("confirm-date", { id }).toPromise()) as Chat;
    } catch (e) {
      throw new Error("Error al confirmar la cita");
    }
  }

  async declineDate(id: Chat["id"]) {
    try {
      return (await this.rest.put("decline-date", { id }).toPromise()) as Chat;
    } catch (e) {
      throw new Error("No se puede rechazar la cita");
    }
  }
}

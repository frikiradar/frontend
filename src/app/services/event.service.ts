import { Injectable } from "@angular/core";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { DatePipe } from "@angular/common";

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
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private localNotifications: LocalNotifications
  ) {}

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
    this.scheduleNotification(event);
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
      const event = (await this.rest
        .put("cancel-event", { id })
        .toPromise()) as Event;
      this.cancelNotification(event);
      return event;
    } catch (e) {
      throw new Error("No se puede cancelar el evento");
    }
  }

  async deleteEvent(event: Event) {
    try {
      await this.rest.delete(`delete-event/${event.id}`).toPromise();
      this.cancelNotification(event);
    } catch (e) {
      throw new Error("No se puede eliminar el evento");
    }
  }

  async participateEvent(id: Event["id"]) {
    try {
      const event = (await this.rest
        .post("participate-event", { id })
        .toPromise()) as Event;
      this.scheduleNotification(event);
      return event;
    } catch (e) {
      throw new Error("Error al participar en el evento");
    }
  }

  async unparticipateEvent(id: Event["id"]) {
    try {
      const event = (await this.rest
        .delete(`remove-participant-event/${id}`)
        .toPromise()) as Event;
      this.cancelNotification(event);
      return event;
    } catch (e) {
      throw new Error("Error al quitar participación en el evento");
    }
  }

  async confirmDate(id: Chat["id"]) {
    try {
      const event = (await this.rest
        .post("confirm-date", { id })
        .toPromise()) as Event;
      this.scheduleNotification(event);
      return event;
    } catch (e) {
      throw new Error("Error al confirmar la cita");
    }
  }

  async declineDate(id: Chat["id"]) {
    try {
      const event = (await this.rest
        .put("decline-date", { id })
        .toPromise()) as Event;
      this.cancelNotification(event);
      return event;
    } catch (e) {
      throw new Error("No se puede rechazar la cita");
    }
  }

  scheduleNotification(event: Event) {
    const datePipe = new DatePipe("es-ES");

    const text =
      datePipe.transform(event.date, "HH:mm") + event.date_end
        ? " - " + datePipe.transform(event.date_end, "HH:mm")
        : "";

    const date = new Date(event.date);

    // Avisar una hora antes
    this.localNotifications.schedule({
      id: event.id + 60,
      title: event.title,
      text,
      trigger: { at: new Date(date.getTime() - 60 * 1000 * 60) },
      icon: event.image
    });

    // Avisar 10 minutos antes
    this.localNotifications.schedule({
      id: event.id + 10,
      title: event.title,
      text,
      trigger: { at: new Date(date.getTime() - 10 * 1000 * 60) },
      icon: event.image
    });

    // Avisar 1 minuto antes
    this.localNotifications.schedule({
      id: event.id + 1,
      title: event.title,
      text,
      trigger: { at: new Date(date.getTime() - 1 * 1000 * 60) },
      icon: event.image
    });
  }

  async cancelNotification(event: Event) {
    await this.localNotifications.cancel([
      event.id + 60,
      event.id + 10,
      event.id + 1
    ]);
  }
}

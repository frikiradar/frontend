import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { RestService } from "./rest.service";
import { Notification } from "../models/notification";

export interface NotificationCounters {
  notifications: number;
  chats: number;
}

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private notificationSubject: BehaviorSubject<NotificationCounters>;
  public notification: Observable<NotificationCounters>;

  constructor(private rest: RestService) {
    this.notificationSubject = new BehaviorSubject<NotificationCounters>(
      JSON.parse(localStorage.getItem("notification"))
    );
    this.notification = this.notificationSubject.asObservable();
  }

  public get notificationValue(): NotificationCounters {
    return this.notificationSubject.value;
  }

  setNotification(notification: NotificationCounters) {
    localStorage.setItem("notification", JSON.stringify(notification));
    this.notificationSubject.next(notification);
  }

  async getUnread() {
    return this.rest.get(`notifications`).toPromise();
  }

  getNotifications() {
    return this.rest.get(`notifications-list`).toPromise() as Promise<
      Notification[]
    >;
  }

  async readNotification(id: Notification["id"]) {
    return (await this.rest
      .get(`read-notification/${id}`)
      .toPromise()) as Notification;
  }

  async unreadNotification(id: Notification["id"]) {
    return (await this.rest
      .get(`unread-notification/${id}`)
      .toPromise()) as Notification;
  }

  async removeNotification(id: Notification["id"]) {
    return await this.rest.delete(`remove-notification/${id}`).toPromise();
  }

  async removeNotifications() {
    return await this.rest.delete(`remove-notifications`).toPromise();
  }
}

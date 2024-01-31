import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { RestService } from "./rest.service";
import { Notification } from "../models/notification";

export interface NotificationCounters {
  notifications: number;
  chats: number;
  radar: number;
}

@Injectable({
  providedIn: "root",
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

  async getUnread(): Promise<NotificationCounters> {
    return (await this.rest.get(`notifications`)) as NotificationCounters;
  }

  async getNotifications() {
    return (await this.rest.get(`notifications-list`)) as Notification[];
  }

  async readNotification(id: Notification["id"]) {
    return (await this.rest.get(`read-notification/${id}`)) as Notification;
  }

  async unreadNotification(id: Notification["id"]) {
    return (await this.rest.get(`unread-notification/${id}`)) as Notification;
  }

  async readNotifications() {
    return await this.rest.get(`read-notifications`);
  }

  async removeNotification(id: Notification["id"]) {
    return await this.rest.delete(`remove-notification/${id}`);
  }

  async removeNotifications() {
    return await this.rest.delete(`remove-notifications`);
  }
}

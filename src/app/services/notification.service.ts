import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { RestService } from "./rest.service";

export interface Notification {
  radar: number;
  chats: number;
  likes: number;
}

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private notificationSubject: BehaviorSubject<Notification>;
  public notification: Observable<Notification>;

  constructor(private rest: RestService) {
    this.notificationSubject = new BehaviorSubject<Notification>(
      JSON.parse(localStorage.getItem("notification"))
    );
    this.notification = this.notificationSubject.asObservable();
  }

  public get notificationValue(): Notification {
    return this.notificationSubject.value;
  }

  setNotification(notification: Notification) {
    localStorage.setItem("notification", JSON.stringify(notification));
    this.notificationSubject.next(notification);
  }

  async getUnread() {
    return this.rest.get(`notifications`).toPromise();
  }
}

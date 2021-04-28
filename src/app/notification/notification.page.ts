import { Component, OnInit } from "@angular/core";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

import { NotificationService } from "../services/notification.service";
import { Notification } from "../models/notification";
import { UrlService } from "../services/url.service";
import { NavService } from "../services/navigation.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"]
})
export class NotificationPage implements OnInit {
  public notifications: Notification[] = undefined;
  public pane: CupertinoPane;
  public notification: Notification;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    initialBreak: "middle",
    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
    }
  };

  constructor(
    private notificationSvc: NotificationService,
    private url: UrlService,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.notifications = await this.notificationSvc.getNotifications();
  }

  async showNotification(notification: Notification) {
    await this.readNotification(notification);
    this.url.openUrl(notification.url);
  }

  showOptions(event: Event, notification: Notification) {
    event.stopPropagation();
    this.notification = notification;
    this.pane = new CupertinoPane(".notifications-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  async readNotification(notification: Notification) {
    try {
      notification = await this.notificationSvc.readNotification(
        notification.id
      );
      this.notifications.map(n => {
        if (n.id === notification.id) {
          n.time_read = notification.time_read;
        }
      });
      this.pane.destroy({ animate: true });
      await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al marcar como leída`);
    }
  }

  async unreadNotification(notification: Notification) {
    try {
      notification = await this.notificationSvc.unreadNotification(
        notification.id
      );
      this.notifications.map(n => {
        if (n.id === notification.id) {
          n.time_read = notification.time_read;
        }
      });
      this.pane.destroy({ animate: true });
      await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al desmarcar como leída`);
    }
  }

  async removeNotifications() {
    try {
      await this.notificationSvc.removeNotifications();
      this.notifications = [];
      await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al eliminar las notificaciones`);
    }
  }

  async removeNotification(notification: Notification) {
    try {
      await this.notificationSvc.removeNotification(notification.id);
      this.notifications = this.notifications.filter(
        n => n.id !== notification.id
      );
      this.pane.destroy({ animate: true });
      await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al eliminar la notificación`);
    }
  }

  back() {
    this.nav.back();
  }
}

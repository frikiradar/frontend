import { NotificationOptionsModal } from "./notification-options-modal/notification-options.modal";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

import {
  NotificationCounters,
  NotificationService,
} from "../services/notification.service";
import { Notification } from "../models/notification";
import { UrlService } from "../services/url.service";
import { NavService } from "../services/navigation.service";

@Component({
    selector: "app-notification",
    templateUrl: "./notification.page.html",
    styleUrls: ["./notification.page.scss"],
    standalone: false
})
export class NotificationPage implements OnInit {
  public notifications: Notification[] = undefined;
  public unreadNotifications: NotificationCounters = undefined;

  constructor(
    private notificationSvc: NotificationService,
    private url: UrlService,
    private nav: NavService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.notifications = await this.notificationSvc.getNotifications();
    this.unreadNotifications = await this.notificationSvc.getUnread();
  }

  async showNotification(notification: Notification) {
    await this.readNotification(notification);
    this.url.openUrl(notification.url);
  }

  async showOptions(event: Event, notification: Notification) {
    event.stopPropagation();

    const modal = await this.modalController.create({
      component: NotificationOptionsModal,
      componentProps: {
        notification: notification,
      },
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.4, 0.6],
      cssClass: "sheet-modal",
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    if (data?.data?.remove) {
      this.removeNotification(data.data.remove);
    }
    if (data?.data?.read) {
      this.readNotification(data.data.read);
    }
    if (data?.data?.unread) {
      this.unreadNotification(data.data.unread);
    }
  }

  async readNotification(notification: Notification) {
    try {
      notification = await this.notificationSvc.readNotification(
        notification.id
      );
      this.notifications.map((n) => {
        if (n.id === notification.id) {
          n.time_read = notification.time_read;
        }
      });
      this.unreadNotifications = await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al marcar como leída`);
    }
  }

  async unreadNotification(notification: Notification) {
    try {
      notification = await this.notificationSvc.unreadNotification(
        notification.id
      );
      this.notifications.map((n) => {
        if (n.id === notification.id) {
          n.time_read = notification.time_read;
        }
      });
      this.unreadNotifications = await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al desmarcar como leída`);
    }
  }

  async readNotifications() {
    try {
      await this.notificationSvc.readNotifications();
      this.notifications = await this.notificationSvc.getNotifications();
      this.unreadNotifications = await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al leer las notificaciones`);
    }
  }

  async removeNotification(notification: Notification) {
    try {
      await this.notificationSvc.removeNotification(notification.id);
      this.notifications = this.notifications.filter(
        (n) => n.id !== notification.id
      );
      this.unreadNotifications = await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al eliminar la notificación`);
    }
  }

  async removeNotifications() {
    try {
      await this.notificationSvc.removeNotifications();
      this.notifications = [];
      this.unreadNotifications = await this.notificationSvc.getUnread();
    } catch (e) {
      console.error(`Error al eliminar las notificaciones`);
    }
  }

  back() {
    this.nav.back();
  }
}

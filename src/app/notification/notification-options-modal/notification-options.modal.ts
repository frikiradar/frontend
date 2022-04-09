import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";

import { Notification } from "src/app/models/notification";

@Component({
  selector: "app-notification-options-modal",
  templateUrl: "./notification-options.modal.html",
  styleUrls: ["./notification-options.modal.scss"],
})
export class NotificationOptionsModal {
  @Input() notification: Notification;

  constructor(private modal: ModalController) {}

  removeNotification(notification: Notification) {
    this.modal.dismiss({ remove: notification });
  }

  readNotification(notification: Notification) {
    this.modal.dismiss({ read: notification });
  }

  unreadNotification(notification: Notification) {
    this.modal.dismiss({ unread: notification });
  }
}

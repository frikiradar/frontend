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

  constructor(private modalController: ModalController) {}

  removeNotification(notification: Notification) {
    this.modalController.dismiss({ remove: notification });
  }

  readNotification(notification: Notification) {
    this.modalController.dismiss({ read: notification });
  }

  unreadNotification(notification: Notification) {
    this.modalController.dismiss({ unread: notification });
  }
}

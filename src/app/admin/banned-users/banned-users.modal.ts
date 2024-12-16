import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";

import { AdminService } from "src/app/services/admin.service";
import { User } from "../../models/user";
import { BannedMessagesModal } from "./banned-messages/banned-messages.modal";

@Component({
    selector: "banned-users-modal",
    templateUrl: "./banned-users.modal.html",
    styleUrls: ["./banned-users.modal.scss"],
    standalone: false
})
export class BannedUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modalController: ModalController,
    private modalMessages: ModalController,
    private admin: AdminService,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    this.users = await this.admin.getBans();
  }

  async viewMessages(id: User["id"]) {
    const modal = await this.modalMessages.create({
      component: BannedMessagesModal,
      componentProps: { id },
    });
    return await modal.present();
  }

  async unban(user: User) {
    this.users = await this.admin.unban(user.id);
    (
      await this.toast.create({
        message: "Baneo eliminado correctamente",
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  close() {
    this.modalController.dismiss();
  }
}

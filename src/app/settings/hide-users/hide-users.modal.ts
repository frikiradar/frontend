import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "hide-users-modal",
  templateUrl: "./hide-users.modal.html",
  styleUrls: ["./hide-users.modal.scss"],
})
export class HideUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modalController: ModalController,
    private userSvc: UserService,
    private toast: ToastController,
    private i18n: I18nService
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getHides();
  }

  async unhide(user: User) {
    this.users = await this.userSvc.unhide(user.id);
    (
      await this.toast.create({
        message: this.i18n.translate("user-unhidden-successfully"),
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  close() {
    this.modalController.dismiss();
  }
}

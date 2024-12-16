import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "block-users-modal",
    templateUrl: "./block-users.modal.html",
    styleUrls: ["./block-users.modal.scss"],
    standalone: false
})
export class BlockUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modalController: ModalController,
    private userSvc: UserService,
    private toast: ToastController,
    private i18n: I18nService
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getBlocks();
  }

  async unblock(user: User) {
    this.users = await this.userSvc.unblock(user.id);
    (
      await this.toast.create({
        message: this.i18n.translate("user-unblocked-successfully"),
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  close() {
    this.modalController.dismiss();
  }
}

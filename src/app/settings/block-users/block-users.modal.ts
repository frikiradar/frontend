import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "block-users-modal",
  templateUrl: "./block-users.modal.html",
  styleUrls: ["./block-users.modal.scss"],
})
export class BlockUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modalController: ModalController,
    private userSvc: UserService,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getBlocks();
  }

  async unblock(user: User) {
    this.users = await this.userSvc.unblock(user.id);
    (
      await this.toast.create({
        message: "Usuario desbloqueado correctamente",
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  close() {
    this.modalController.dismiss();
  }
}

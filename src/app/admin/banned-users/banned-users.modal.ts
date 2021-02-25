import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "banned-users-modal",
  templateUrl: "./banned-users.modal.html",
  styleUrls: ["./banned-users.modal.scss"]
})
export class BannedUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modal: ModalController,
    private userSvc: UserService,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getBans();
  }

  async unban(user: User) {
    this.users = await this.userSvc.unban(user.id);
    (
      await this.toast.create({
        message: "Baneo eliminado correctamente",
        duration: 2000,
        position: "bottom"
      })
    ).present();
  }

  close() {
    this.modal.dismiss();
  }
}

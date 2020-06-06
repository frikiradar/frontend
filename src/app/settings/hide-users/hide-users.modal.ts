import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "hide-users-modal",
  templateUrl: "./hide-users.modal.html",
  styleUrls: ["./hide-users.modal.scss"]
})
export class HideUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modal: ModalController,
    private userSvc: UserService,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getHides();
  }

  async unhide(user: User) {
    this.users = await this.userSvc.unhide(user.id);
    (
      await this.toast.create({
        message: "Usuario desocultado correctamente",
        duration: 2000,
        position: "bottom"
      })
    ).present();
  }

  close() {
    this.modal.dismiss();
  }
}

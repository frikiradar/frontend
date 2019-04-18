import { Component, OnInit } from "@angular/core";
import { Toast } from "@ionic-native/toast/ngx";
import { ModalController } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "block-users-modal",
  templateUrl: "./block-users.modal.html",
  styleUrls: ["./block-users.modal.scss"]
})
export class BlockUsersModal implements OnInit {
  public users: User[];

  constructor(
    private modal: ModalController,
    private userSvc: UserService,
    private toast: Toast
  ) {}

  async ngOnInit() {
    this.users = await this.userSvc.getBlocks();
  }

  async unblock(user: User) {
    this.users = await this.userSvc.unblock(user.id);
    this.toast
      .show(`Usuario desbloqueado correctamente`, "short", "bottom")
      .subscribe();
  }

  close() {
    this.modal.dismiss();
  }
}

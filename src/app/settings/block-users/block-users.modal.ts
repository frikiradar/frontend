import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { ModalController } from "@ionic/angular";

import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

const { Toast } = Plugins;

@Component({
  selector: "block-users-modal",
  templateUrl: "./block-users.modal.html",
  styleUrls: ["./block-users.modal.scss"]
})
export class BlockUsersModal implements OnInit {
  public users: User[];

  constructor(private modal: ModalController, private userSvc: UserService) {}

  async ngOnInit() {
    this.users = await this.userSvc.getBlocks();
  }

  async unblock(user: User) {
    this.users = await this.userSvc.unblock(user.id);
    await Toast.show({
      text: `Usuario desbloqueado correctamente`
    });
  }

  close() {
    this.modal.dismiss();
  }
}

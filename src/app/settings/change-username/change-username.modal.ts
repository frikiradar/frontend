import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "change-username-modal",
  templateUrl: "./change-username.modal.html",
  styleUrls: ["./change-username.modal.scss"],
})
export class ChangeUsernameModal {
  public usernameForm: UntypedFormGroup;
  public clearOldPassword = false;
  public clearPassword = false;
  public user: User;

  constructor(
    public fb: UntypedFormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private i18n: I18nService
  ) {
    this.user = this.auth.currentUserValue;

    this.usernameForm = fb.group({
      username: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+"),
      ]),
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changeUsername(
        this.usernameForm.get("username").value
      );

      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: this.i18n.translate("username-changed-successfully"),
          duration: 2000,
          position: "bottom",
        })
      ).present();

      this.modalController.dismiss();
      this.auth.logout();
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("there-has-been-an-error"),
        message: this.i18n.translate("username-already-in-use"),
        buttons: [this.i18n.translate("okay-try-another")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}

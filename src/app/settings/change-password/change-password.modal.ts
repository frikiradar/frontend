import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "change-password-modal",
    templateUrl: "./change-password.modal.html",
    styleUrls: ["./change-password.modal.scss"],
    standalone: false
})
export class ChangePasswordModal {
  public passForm: FormGroup;
  public clearOldPassword = false;
  public clearPassword = false;

  constructor(
    public fb: FormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private i18n: I18nService
  ) {
    this.passForm = fb.group({
      oldPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changePassword(
        this.passForm.get("oldPassword").value,
        this.passForm.get("password").value
      );

      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: this.i18n.translate("password-changed-successfully"),
          duration: 2000,
          position: "bottom",
        })
      ).present();

      this.modalController.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("current-password-not-valid"),
        message: this.i18n.translate("check-and-try-again"),
        buttons: [this.i18n.translate("okay")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}

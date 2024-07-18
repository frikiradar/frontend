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

import { User } from "src/app/models/user";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "change-email-modal",
  templateUrl: "./change-email.modal.html",
  styleUrls: ["./change-email.modal.scss"],
})
export class ChangeEmailModal {
  public emailForm: FormGroup;
  public clearOldPassword = false;
  public clearPassword = false;
  public user: User;

  constructor(
    public fb: FormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private i18n: I18nService
  ) {
    this.user = this.auth.currentUserValue;

    this.emailForm = fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changeEmail(
        this.user.email,
        this.emailForm.get("email").value
      );

      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: this.i18n.translate("email-changed-successfully"),
          duration: 2000,
          position: "bottom",
        })
      ).present();

      this.modalController.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("there-has-been-an-error"),
        message: this.i18n.translate("email-already-in-use"),
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

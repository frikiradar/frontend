import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";
import { NavService } from "src/app/services/navigation.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "app-disable-account",
    templateUrl: "./disable-account.page.html",
    styleUrls: ["./disable-account.page.scss"],
    standalone: false
})
export class DisableAccountPage {
  public disableForm: FormGroup;
  public clearPassword = false;
  public type: "disable" | "remove" = "disable";
  public showBackdrop = false;
  public codeSent = false;
  public user: User;

  constructor(
    public fb: FormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private nav: NavService,
    private i18n: I18nService
  ) {
    this.disableForm = fb.group({
      code: new FormControl("", [Validators.required, Validators.maxLength(6)]),
      note: new FormControl(),
    });

    this.user = this.auth.currentUserValue;
  }

  async sendCode() {
    this.auth.sendVerification();

    (
      await this.toast.create({
        message: this.i18n.translate("verification-code-sent"),
        duration: 2000,
        position: "bottom",
      })
    ).present();

    this.codeSent = true;
  }

  async submitForm() {
    try {
      if (this.type === "disable") {
        this.showBackdrop = true;
        (
          await this.toast.create({
            message: this.i18n.translate("disabling-account"),
            duration: 5000,
            position: "bottom",
          })
        ).present();
        const user = await this.userSvc.disableUser(
          this.disableForm.get("code").value,
          this.disableForm.get("note").value
        );

        this.auth.setAuthUser(user);
        this.showBackdrop = false;
        (
          await this.toast.create({
            message: this.i18n.translate("account-disabled-successfully"),
            duration: 5000,
            position: "bottom",
          })
        ).present();
      } else if (this.type === "remove") {
        this.showBackdrop = true;
        (
          await this.toast.create({
            message: this.i18n.translate("removing-account"),
            duration: 5000,
            position: "bottom",
          })
        ).present();
        const user = await this.userSvc.removeAccount(
          this.disableForm.get("code").value,
          this.disableForm.get("note").value
        );
        this.showBackdrop = false;
        this.auth.setAuthUser(user);

        (
          await this.toast.create({
            message: this.i18n.translate("account-removed-successfully"),
            duration: 5000,
            position: "bottom",
          })
        ).present();
      }

      this.modalController.dismiss();
      this.auth.logout();
    } catch (e) {
      this.showBackdrop = false;
      const alert = await this.alert.create({
        header: this.i18n.translate("invalid-code-entered"),
        message: this.i18n.translate("check-and-try-again"),
        buttons: [this.i18n.translate("okay")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  changeType(type: "disable" | "remove") {
    this.type = type;
  }

  async close() {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss();
    } else {
      this.nav.back();
    }
  }
}

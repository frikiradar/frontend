import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertController, ToastController } from "@ionic/angular";

import { User } from "src/app/models/user";
import { ConfigService } from "src/app/services/config.service";
import { NavService } from "src/app/services/navigation.service";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "activate-account-app",
    templateUrl: "./activate-account.page.html",
    styleUrls: ["./activate-account.page.scss"],
    standalone: false
})
export class ActivateAccountPage {
  public codeForm: FormGroup;
  public emailForm: FormGroup;
  public user: User;
  public changingEmail = false;

  constructor(
    public fb: FormBuilder,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private nav: NavService,
    private toast: ToastController,
    private config: ConfigService,
    private i18n: I18nService
  ) {
    this.user = this.auth.currentUserValue;
    if (this.user.active) {
      this.nav.navigateRoot(["/"]);
    }

    this.codeForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
    });

    this.emailForm = fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
    });

    // No descomentes la siguiente línea.
    // Backend enviará un código de activación al email automáticamente
    // en la función checkPostAuth() de UserChecker
    // si lo descomentas se enviará doble código de activación
    // this.sendCode();
  }

  async submitCode() {
    try {
      this.user = await this.userSvc.activateUser(
        this.codeForm.get("code").value.toUpperCase()
      );
      this.auth.setAuthUser(this.user);
      this.config.getConfig(true);
      const alert = await this.alert.create({
        header: this.i18n.translate(`account-activated-successfully`),
        message: this.i18n.translate("what-would-you-like-to-do-now"),
        backdropDismiss: false,
        buttons: [
          {
            text: this.i18n.translate("start"),
            handler: () => {
              this.nav.navigateRoot(["/"]);
            },
          },
          {
            text: this.i18n.translate("configure-my-profile"),
            handler: () => {
              this.nav.navigateRoot(["/edit-profile"]);
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    } catch (e) {
      this.codeForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: this.i18n.translate("invalid-security-code"),
        message: this.i18n.translate("check-the-code-and-try-again"),
        buttons: [this.i18n.translate("ok-thanks")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async sendCode() {
    await this.auth.sendVerification();
    (
      await this.toast.create({
        message: this.i18n.translate("verification-code-sent-to-email"),
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  async changeEmail() {
    try {
      this.user = await this.userSvc.changeEmail(
        this.user.email,
        this.emailForm.get("email").value
      );
      this.auth.setAuthUser(this.user);
      this.sendCode();
      this.changingEmail = false;
    } catch (e) {
      const alert = await this.alert.create({
        header: this.i18n.translate("error-changing-email"),
        message: this.i18n.translate(
          "check-the-introduced-email-and-try-again"
        ),
        buttons: [this.i18n.translate("ok-thanks")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  back() {
    this.changingEmail = false;
  }

  close() {
    this.auth.logout();
  }
}

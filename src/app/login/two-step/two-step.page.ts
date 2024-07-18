import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertController, NavController } from "@ionic/angular";

import { AuthService } from "../../services/auth.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "two-step-app",
  templateUrl: "./two-step.page.html",
  styleUrls: ["./two-step.page.scss"],
})
export class TwoStepPage implements OnInit {
  public codeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private alert: AlertController,
    private nav: NavController,
    private i18n: I18nService
  ) {
    this.codeForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
    });
  }

  async ngOnInit() {
    this.auth.sendVerification();
  }

  async submitCode() {
    try {
      const user = await this.auth.verifyCode(
        this.codeForm.get("code").value.toUpperCase()
      );

      this.auth.setAuthUser(user);
      this.nav.navigateRoot(["/"]);
    } catch (e) {
      this.codeForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: this.i18n.translate("invalid-security-code"),
        message: this.i18n.translate("check-the-introduced-code-and-try-again"),
        buttons: [this.i18n.translate("ok-thanks")],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  close() {
    this.auth.logout();
  }
}

import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import { AlertController, NavController } from "@ionic/angular";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "two-step-app",
  templateUrl: "./two-step.page.html",
  styleUrls: ["./two-step.page.scss"]
})
export class TwoStepPage implements OnInit {
  public codeForm: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private auth: AuthService,
    private alert: AlertController,
    private nav: NavController
  ) {
    this.codeForm = fb.group({
      code: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ])
    });
  }

  async ngOnInit() {
    await this.auth.twoStepCode().toPromise();
  }

  async submitCode() {
    try {
      const user = await this.auth.verifyLogin(
        this.codeForm.get("code").value.toUpperCase()
      );

      this.auth.setAuthUser(user);
      this.nav.navigateRoot(["/"]);
    } catch (e) {
      this.codeForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Revisa el código introducido y vuelve a intentarlo.",
        buttons: ["Ok, gracias"],
        cssClass: "round-alert"
      });

      alert.present();
    }
  }

  close() {
    this.auth.logout();
  }
}

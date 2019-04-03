import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { AlertController, ModalController } from "@ionic/angular";
import { AuthService } from "./../../services/auth.service";
import { DeviceService } from "./../../services/device.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "activate-account-modal",
  templateUrl: "./activate-account.modal.html",
  styleUrls: ["./activate-account.modal.scss"]
})
export class ActivateAccountModal {
  public codeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private device: DeviceService,
    private alert: AlertController,
    private router: Router
  ) {
    this.codeForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });

    this.userSvc.resendActivationEmail();
  }

  async submitCode() {
    try {
      const user = await this.userSvc.activateUser(
        this.codeForm.get("code").value.toUpperCase()
      );
      this.auth.setAuthUser(user);
      this.device.setDevice();
      this.modal.dismiss();
    } catch (e) {
      this.codeForm.get("code").setValue("");
      this.userSvc.resendActivationEmail();

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Te hemos enviado un nuevo código al correo electrónico.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  close() {
    this.auth.logout();
    this.router.navigate(["/login"]);
    this.modal.dismiss();
  }
}

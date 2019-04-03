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
import { UserService } from "./../../services/user.service";

@Component({
  selector: "account-modal",
  templateUrl: "./account.modal.html",
  styleUrls: ["./account.modal.scss"]
})
export class AccountModal {
  public accountForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private router: Router
  ) {
    this.accountForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });
  }

  async submitForm() {
    try {
      this.modal.dismiss();
    } catch (e) {
      this.accountForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Te hemos enviado un nuevo código al correo electrónico.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

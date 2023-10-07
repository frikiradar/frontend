import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";

import { User } from "../../models/user";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "forgot-password-modal",
  templateUrl: "./forgot-password.modal.html",
  styleUrls: ["./forgot-password.modal.scss"],
})
export class ForgotPasswordModal {
  public requestForm: UntypedFormGroup;
  public passwordForm: UntypedFormGroup;

  public step = 1;
  public clearPassword = false;

  constructor(
    navParams: NavParams,
    public fb: UntypedFormBuilder,
    private modalController: ModalController,
    private alert: AlertController,
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {
    this.requestForm = fb.group({
      username: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.passwordForm = fb.group({
      code: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
      password: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    if (navParams && navParams.get("username")) {
      this.requestForm
        .get("username")
        .setValue(navParams.get("username").value);
    }
  }

  async submitRequest() {
    try {
      await this.auth.requestPassword(this.requestForm.get("username").value);
      this.step = 2;
    } catch (e) {
      const alert = await this.alert.create({
        header: "Nombre de usuario o email no válido",
        message: "No existe ninguna cuenta asociada a esta información.",
        buttons: ["Ok, gracias"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async submitPassword() {
    try {
      await this.auth.recoverPassword(
        this.requestForm.get("username").value,
        this.passwordForm.get("password").value,
        this.passwordForm.get("code").value.toUpperCase()
      );

      const user = await this.auth.login(
        this.requestForm.get("username").value,
        this.passwordForm.get("password").value
      );

      this.recoverSuccess(user);
      this.passwordForm.reset();
    } catch (e) {
      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Revisa el código introducido y vuelve a intentarlo.",
        buttons: ["Ok, gracias"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async recoverSuccess(user: User) {
    this.auth.setAuthUser(user);
    (
      await this.toast.create({
        message: "Acceso concedido",
        duration: 2000,
        position: "bottom",
      })
    ).present();
    this.router.navigate(["/"]);
    this.close();
  }

  close() {
    this.modalController.dismiss();
  }
}

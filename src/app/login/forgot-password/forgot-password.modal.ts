import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "forgot-password-modal",
    templateUrl: "./forgot-password.modal.html",
    styleUrls: ["./forgot-password.modal.scss"],
    standalone: false
})
export class ForgotPasswordModal {
  public requestForm: FormGroup;
  public passwordForm: FormGroup;

  public step = 1;
  public clearPassword = false;

  constructor(
    navParams: NavParams,
    public fb: FormBuilder,
    private modalController: ModalController,
    private alert: AlertController,
    private auth: AuthService,
    private router: Router,
    private toast: ToastController,
    private i18n: I18nService
  ) {
    this.requestForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.passwordForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
      password: new FormControl("", [
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

      this.i18n.setLanguage(user.language);

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

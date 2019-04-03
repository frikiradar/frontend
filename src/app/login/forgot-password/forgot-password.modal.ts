import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";

import { AlertController, ModalController, NavParams } from "@ionic/angular";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { AuthService } from "./../../services/auth.service";

const { Toast } = Plugins;

@Component({
  selector: "forgot-password-modal",
  templateUrl: "./forgot-password.modal.html",
  styleUrls: ["./forgot-password.modal.scss"]
})
export class ForgotPasswordModal {
  public requestForm: FormGroup;
  public passwordForm: FormGroup;

  public step = 1;
  public clearPassword = false;

  constructor(
    navParams: NavParams,
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private alert: AlertController,
    private auth: AuthService,
    private router: Router
  ) {
    this.requestForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.passwordForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    if (navParams && navParams.get("username")) {
      this.requestForm
        .get("username")
        .setValue(navParams.get("username").value);
    }
  }

  async submitRequest() {
    try {
      await this.userSvc.requestPassword(
        this.requestForm.get("username").value
      );
      this.step = 2;
    } catch (e) {
      const alert = await this.alert.create({
        header: "Nombre de usuario o email no válido",
        message: "No existe ninguna cuenta asociada a esta información.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  async submitPassword() {
    try {
      await this.userSvc.recoverPassword(
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
      await this.userSvc.requestPassword(
        this.requestForm.get("username").value
      );
      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Te hemos enviado un nuevo código al correo electrónico.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  async recoverSuccess(user: User) {
    this.auth.setAuthUser(user);
    await Toast.show({
      text: "¡Acceso concedido!"
    });
    this.router.navigate(["/"]);
    this.close();
  }

  close() {
    this.modal.dismiss();
  }
}

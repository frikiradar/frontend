import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import {
  AlertController,
  ModalController,
  NavController
} from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { PushService } from "./../services/push.service";
import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";

const { Toast, Device } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  public loginForm: FormGroup;
  get username() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }
  public clearPassword = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertController,
    private modal: ModalController,
    public fb: FormBuilder,
    private nav: NavController,
    private push: PushService
  ) {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }

    this.loginForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  async submitLogin() {
    if (this.loginForm.valid) {
      try {
        const user = await this.auth.login(
          this.username.value,
          this.password.value
        );

        this.loginSuccess(user);
        this.loginForm.reset();
      } catch (e) {
        this.loginError();
      }
    } else {
      const alert = await this.alert.create({
        header: "¿Te has dado cuenta?",
        message: "Para dos cosas que te pedimos y las pones mal... 🤭",
        buttons: ["Tendré más cuidado"]
      });

      await alert.present();
    }
  }

  async loginSuccess(user: User) {
    if ((await Device.getInfo()).platform !== "web") {
      this.push.init();
    }
    this.auth.setAuthUser(user);
    await Toast.show({
      text: "¡Acceso concedido!"
    });
    this.nav.navigateRoot(["/tabs/radar"]);
  }

  async loginError() {
    const alert = await this.alert.create({
      header: "Error de autenticación",
      message:
        "El nombre/email o contraseña que has introducido no son correctos.",
      buttons: ["Oki doki"]
    });

    await alert.present();
  }

  async forgotPassword() {
    const modal = await this.modal.create({
      component: ForgotPasswordModal,
      componentProps: { username: this.username }
    });
    return await modal.present();
  }
}

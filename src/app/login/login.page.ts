import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  Platform
} from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
import { PushService } from "./../services/push.service";
import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";

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
    public formBuilder: FormBuilder,
    private nav: NavController,
    private push: PushService,
    private fb: Facebook,
    private toast: Toast,
    private platform: Platform
  ) {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }

    this.loginForm = formBuilder.group({
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
    if (!this.platform.is("desktop") && !this.platform!.is("mobileweb")) {
      this.push.init();
    }
    if (user.two_step) {
      this.nav.navigateRoot(["/login/two-step"]);
    } else {
      this.auth.setAuthUser(user);
      this.toast.show("¡Acceso concedido!", "short", "bottom").subscribe();
      this.nav.navigateRoot(["/tabs/radar"]);
    }
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

  async loginFacebook() {
    this.fb
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) =>
        console.log("Logged into Facebook!", res)
      )
      .catch(e => console.error("Error logging into Facebook", e));
  }
}

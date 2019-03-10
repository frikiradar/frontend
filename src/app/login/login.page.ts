import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";

const { Toast } = Plugins;

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

  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertController,
    public fb: FormBuilder
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
    try {
      const user = await this.auth.login(
        this.username.value,
        this.password.value
      );

      this.loginSuccess(user);
      this.loginForm.reset();
    } catch (e) {
      this.loginForm.reset({ password: "" });
      this.loginError();
    }
  }

  async loginSuccess(user: User) {
    this.auth.setAuthUser(user);
    await Toast.show({
      text: "Accediendo a FrikiRadar"
    });
    this.router.navigate(["/"]);
  }

  async loginError() {
    const alert = await this.alert.create({
      header: "Error de autenticación",
      message: "Revisa los datos introducidos",
      buttons: ["OK"]
    });

    await alert.present();
  }
}

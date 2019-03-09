import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";

const { Toast } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  public loginForm = {
    username: "",
    password: ""
  };

  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertController
  ) {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }
  }

  async submitLogin() {
    if (this.loginForm.username && this.loginForm.password) {
      try {
        const user = await this.auth.login(
          this.loginForm.username,
          this.loginForm.password
        );

        this.loginSuccess(user);
        this.loginForm.username = "";
        this.loginForm.password = "";
      } catch (e) {
        this.loginForm.password = "";
        this.loginError();
      }
    } else {
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

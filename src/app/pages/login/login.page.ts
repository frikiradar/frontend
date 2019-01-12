import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AlertController, ToastController } from "@ionic/angular";
import { first } from "rxjs/operators";
import { AuthService } from "./../../services/auth.service";

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
    private toast: ToastController,
    private alert: AlertController
  ) {}

  submitLogin() {
    const token = this.auth
      .login(this.loginForm.username, this.loginForm.password)
      .pipe(first())
      .subscribe(
        _ => {
          this.loginSuccess();
          this.router.navigateByUrl("/app/tabs/(radar:radar)");
        },
        error => {
          this.loginForm.username = "";
          this.loginForm.password = "";
          this.loginError();
        }
      );
  }

  async loginSuccess() {
    const toast = await this.toast.create({
      message: "Accediendo a FrikiRadar",
      duration: 1000
    });
    toast.present();
  }

  async loginError() {
    const alert = await this.alert.create({
      header: "Error de autenticación",
      message: "Revisa los datos introducidos",
      buttons: ["OK"]
    });

    await alert.present();
  }

  async registerError() {
    const alert = await this.alert.create({
      header: "Error de registro",
      message: "Ya hay un usuario registrado con los mismos datos",
      buttons: ["OK"]
    });

    await alert.present();
  }

  async registerPrompt() {
    const alert = await this.alert.create({
      header: "Registro",
      inputs: [
        {
          name: "username",
          type: "text",
          placeholder: "Nombre de usuario"
        },
        {
          name: "email",
          type: "email",
          placeholder: "Correo electrónico"
        },
        {
          name: "password",
          type: "password",
          placeholder: "Contraseña"
        }
      ],
      buttons: [
        {
          text: "Volver",
          role: "cancel"
        },
        {
          text: "Registrarse",
          handler: data => {
            const token = this.auth
              .register(data.username, data.email, data.password)
              .pipe(first())
              .subscribe(
                _ => {
                  this.loginForm.username = data.username;
                  this.loginForm.password = data.password;
                  this.submitLogin();
                },
                error => {
                  this.registerError();
                }
              );
          }
        }
      ]
    });

    await alert.present();
  }
}

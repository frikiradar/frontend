import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  Platform,
  ToastController
} from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "./../services/auth.service";
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
    private toast: ToastController,
    public fb: FormBuilder,
    private nav: NavController, // private fb: Facebook
    public platform: Platform,
    private facebook: Facebook
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
    if (user && user.two_step) {
      this.nav.navigateRoot(["/login/two-step"]);
    } else {
      this.auth.setAuthUser(user);
      (
        await this.toast.create({
          message: "¡Acceso concedido!",
          duration: 2000,
          position: "bottom"
        })
      ).present();
      this.nav.navigateRoot(["/tabs/radar"]);
      location.reload();
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
    this.facebook
      .login(["public_profile", "email", "user_birthday"])
      .then(async (response: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", response);
        const result = await this.facebook.api(
          `${response.authResponse.userID}/?fields=id,email,name,birthday,picture.width(512)`,
          ["public_profile", "email", "user_birthday"]
        );

        /*{
          api tester: https://developers.facebook.com/tools/explorer/2308182012762454/?method=GET&path=2690421467747425%2F%3Ffields%3Did%2Cemail%2Cname%2Cbirthday%2Cpicture.width(512)&version=v6.0&classic=0
          "id": "2690421467747425",
          "email": "alberto.eps@gmail.com",
          "name": "Alberto Rodríguez Merino",
          "picture": {
            "data": {
              "height": 692,
              "is_silhouette": false,
              "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2690421467747425&width=512&ext=1583495399&hash=AeQGzxUiRc-AGgUA",
              "width": 692
            }
          }
        }*/
      })
      .catch(e => console.error("Error logging into Facebook", e));
  }
}

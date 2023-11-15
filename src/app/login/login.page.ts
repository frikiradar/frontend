import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertController,
  ModalController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

import { User } from "../models/user";
import { ConfigService } from "../services/config.service";
import { NavService } from "../services/navigation.service";
import { AuthService } from "./../services/auth.service";
import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  public loginForm: UntypedFormGroup;
  get usernameInput() {
    return this.loginForm.get("username");
  }
  get passwordInput() {
    return this.loginForm.get("password");
  }

  public insertPassword = false;
  public clearPassword = false;
  public activeView: "login" | "register" = "login";
  private returnUrl: string;
  public username: string;
  public password: string;
  public email: string;
  public provider: "google";
  public credential: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private alert: AlertController,
    private modalController: ModalController,
    private toast: ToastController,
    public fb: UntypedFormBuilder,
    private nav: NavService,
    public platform: Platform,
    private config: ConfigService
  ) {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }

    this.loginForm = fb.group({
      username: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new UntypedFormControl("", [
        this.insertPassword ? Validators.required : Validators.nullValidator,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  async checkLogin() {
    if (!this.insertPassword && this.usernameInput.valid) {
      try {
        await this.auth.checkLogin(this.usernameInput.value);
        this.insertPassword = true;
        return;
      } catch (e) {
        if (this.usernameInput.value.includes("@")) {
          this.email = this.usernameInput.value;
        } else {
          this.username = this.usernameInput.value;
        }
        this.activeView = "register";
        return;
      }
    }
    this.activeView = "register";
  }

  async submitLogin() {
    if (this.loginForm.valid) {
      try {
        const user = await this.auth.login(
          this.usernameInput.value,
          this.passwordInput.value
        );

        this.loginSuccess(user);
        this.loginForm.reset();
      } catch (e) {
        if (e.message) {
          this.loginError(e.message);
        } else if (e.detail) {
          this.loginError(e.detail);
        } else {
          this.loginError(e);
        }
      }
    }
  }

  async loginWithGoogle() {
    const googleUser = await GoogleAuth.signIn();
    if (googleUser.authentication.idToken) {
      this.credential = googleUser.authentication.idToken;
      this.provider = "google";
      this.username = googleUser.name;
      this.email = googleUser.email;

      try {
        await this.auth.checkLogin(this.email);
        try {
          const user = await this.auth.loginWithProvider(
            this.provider,
            this.credential
          );
          this.loginSuccess(user);
        } catch (e) {
          this.insertPassword = true;
        }
      } catch (e) {
        this.activeView = "register";
        return;
      }
    }
  }

  async loginSuccess(user: User) {
    this.config.getConfig(true);
    if (user && user.two_step) {
      this.nav.navigateRoot(["/login/two-step"], {
        queryParams: { returnUrl: this.returnUrl },
      });
    } else {
      this.auth.setAuthUser(user);
      (
        await this.toast.create({
          message: "¡Acceso concedido!",
          duration: 2000,
          position: "bottom",
        })
      ).present();
      this.nav.navigateRoot(this.returnUrl);
    }
  }

  async loginError(message: string) {
    let header = "";
    if (message.includes("Invalid credentials.")) {
      this.activeView = "register";
      header = "Error de autenticación";
      message =
        "El nombre/email o contraseña que has introducido no son correctos.";
    } else if (message.includes("Banned account.")) {
      header = "¡Estás baneado!";
      const data = JSON.parse(message);
      const date = data.end?.date;

      message =
        "Motivo: " +
        data.reason +
        "." +
        "<br />" +
        "Fin del baneo: " +
        (date ? date.split(" ")[0] : "Indefinido");
    } else if (message === "Internal Server Error" || message === "OK") {
      header = "Error del sistema";
      message =
        "Escríbenos a hola@frikiradar si te aparece este error para que lo revisemos.";
    } else {
      header = "Error desconocido";
      message =
        "Escríbenos a hola@frikiradar si te aparece este error para que lo revisemos.";
    }

    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Oki doki"],
      cssClass: "round-alert",
    });

    await alert.present();
  }

  async forgotPassword() {
    const modal = await this.modalController.create({
      component: ForgotPasswordModal,
      componentProps: { username: this.username },
    });
    return await modal.present();
  }
}

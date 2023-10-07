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
  get username() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }
  public clearPassword = false;
  public activeView: "login" | "register" = "login";
  private returnUrl: string;

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
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
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
        if (e.message) {
          this.loginError(e.message);
        } else if (e.detail) {
          this.loginError(e.detail);
        } else {
          this.loginError(e);
        }
      }
    } else {
      if (!this.username.value) {
        const alert = await this.alert.create({
          header: "¿Te has dado cuenta?",
          message: "Para dos cosas que te pedimos y las pones mal... 🤭",
          buttons: ["Tendré más cuidado"],
          cssClass: "round-alert",
        });

        await alert.present();
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

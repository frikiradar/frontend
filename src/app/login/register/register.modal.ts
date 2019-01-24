import { Component } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController
} from "@ionic/angular";

import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "register-modal",
  templateUrl: "register.modal.html",
  styleUrls: ["register.modal.scss"]
})
export class RegisterModal {
  public registerForm = {
    username: "",
    email: "",
    password: ""
  };

  constructor(
    private router: Router,
    private navParams: NavParams,
    public modal: ModalController,
    private userSvc: UserService,
    private alert: AlertController,
    private auth: AuthService,
    private toast: ToastController
  ) {
    this.registerForm.username = this.navParams.get("username");
  }

  async submitRegister() {
    if (
      this.registerForm.username &&
      this.registerForm.email &&
      this.registerForm.password
    ) {
      try {
        await this.userSvc.register(
          this.registerForm.username,
          this.registerForm.email,
          this.registerForm.password
        );

        const user = await this.auth.login(
          this.registerForm.username,
          this.registerForm.password
        );
        this.registerSuccess(user);
      } catch (error) {
        this.registerError(error);
      }
    } else {
      this.registerError("Revisa los datos introducidos");
    }
  }

  async registerSuccess(user: User) {
    this.auth.doLogin(user);
    const toast = await this.toast.create({
      message: "Registro realizado correctamente",
      duration: 1000
    });
    toast.present();
    this.router.navigate(["/"]);
    this.modal.dismiss();
  }

  async registerError(error: string) {
    const alert = await this.alert.create({
      header: "Error de registro",
      message: error,
      buttons: ["OK"]
    });

    await alert.present();
  }

  closeModal() {
    this.modal.dismiss();
  }
}

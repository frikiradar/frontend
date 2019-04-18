import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, NavController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage {
  public registerForm: FormGroup;
  public today: number = Date.now();
  public clearPassword = false;

  constructor(
    private alert: AlertController,
    private auth: AuthService,
    public fb: FormBuilder,
    private nav: NavController,
    private toast: Toast
  ) {
    this.registerForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      birthday: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  async submitRegister() {
    if (this.registerForm.valid) {
      try {
        await this.auth.register(
          this.registerForm.get("username").value.trim(),
          this.registerForm.get("email").value.trim(),
          this.registerForm.get("birthday").value.split("T")[0],
          this.registerForm.get("password").value.trim()
        );

        const user = await this.auth.login(
          this.registerForm.get("username").value.trim(),
          this.registerForm.get("password").value.trim()
        );
        this.registerSuccess(user);
      } catch (error) {
        this.registerError(error);
      }
    } else {
      const alert = await this.alert.create({
        header: "Revisa la información",
        message: "Para cuatro cosas que te pedimos y las pones mal... 🙄",
        buttons: ["Tendré más cuidado"]
      });

      await alert.present();
    }
  }

  async registerSuccess(user: User) {
    this.auth.setAuthUser(user);
    this.toast
      .show("Registro realizado correctamente", "short", "bottom")
      .subscribe();
    this.nav.navigateRoot(["/tabs/radar"]);
  }

  async registerError(error: string) {
    const alert = await this.alert.create({
      header: "Error de registro",
      message: error,
      buttons: ["Ok"]
    });

    await alert.present();
  }
}

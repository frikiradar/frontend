import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Plugins } from "@capacitor/core";
import { AlertController } from "@ionic/angular";

import { Router } from "@angular/router";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { UserService } from "./../services/user.service";

const { Toast } = Plugins;

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  get username() {
    return this.registerForm.get("username");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get birthday() {
    return this.registerForm.get("birthday");
  }
  get password() {
    return this.registerForm.get("password");
  }
  public today: number = Date.now();

  constructor(
    private router: Router,
    private userSvc: UserService,
    private alert: AlertController,
    private auth: AuthService,
    public fb: FormBuilder
  ) {
    this.registerForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9 ]+")
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

  ngOnInit() {}

  async submitRegister() {
    if (this.registerForm.valid) {
      try {
        await this.userSvc.register(
          this.username.value.trim(),
          this.email.value.trim(),
          this.birthday.value.trim(),
          this.password.value.trim()
        );

        const user = await this.auth.login(
          this.username.value.trim(),
          this.password.value.trim()
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
    await Toast.show({
      text: "Registro realizado correctamente"
    });
    this.router.navigate(["/"]);
    this.back();
  }

  async registerError(error: string) {
    const alert = await this.alert.create({
      header: "Error de registro",
      message: error,
      buttons: ["Ok"]
    });

    await alert.present();
  }

  back() {
    this.router.navigate(["/"]);
  }
}

import { Component, NgZone } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { UrlService } from "src/app/services/url.service";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public today: number = Date.now();
  public clearPassword = false;
  public usernameSuggestion = "";
  public birthdayValue = "";

  constructor(
    private alert: AlertController,
    private auth: AuthService,
    public fb: FormBuilder,
    private nav: NavController,
    private toast: ToastController,
    public userSvc: UserService,
    private ngZone: NgZone,
    public platform: Platform,
    public urlSvc: UrlService
  ) {
    this.registerForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+"),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      birthday: new FormControl(
        new Date(
          new Date().getFullYear() -
            18 +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate()
        ).toISOString(),
        Validators.required
      ),
      gender: [""],
      lovegender: [""],
      meet: [""],
      referral: [""],
      acceptos: new FormControl(false, Validators.requiredTrue),
      age: new FormControl(false, Validators.requiredTrue),
    });

    this.registerForm
      .get("username")
      .valueChanges.subscribe(async (username) => {
        if (username.trim() !== "") {
          const u = await this.auth.checkUsername(username);
          if (u !== true) {
            this.registerForm.get("username").setErrors({ incorrect: true });
            this.usernameSuggestion = u as string;
          } else {
            this.usernameSuggestion = "";
          }
        }
      });
  }

  async submitRegister() {
    if (this.registerForm.valid) {
      const alert = await this.alert.create({
        header: `Aviso`,
        message: `Te llegará un email con un código de confirmación a la dirección ${this.registerForm
          .get("email")
          .value.trim()} ¿Es correcta?`,
        buttons: [
          {
            text: "Ups, me confundí",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "¡Es correcta!",
            handler: async () => {
              try {
                await this.auth.register(
                  this.registerForm.get("username").value.trim(),
                  this.registerForm.get("email").value.trim().toLowerCase(),
                  this.registerForm.get("password").value.trim(),
                  this.registerForm.get("birthday").value.split("T")[0],
                  this.registerForm.get("gender").value.trim(),
                  this.registerForm.get("lovegender").value,
                  this.registerForm.get("meet").value,
                  this.registerForm.get("referral").value
                );

                const user = await this.auth.login(
                  this.registerForm.get("username").value.trim(),
                  this.registerForm.get("password").value.trim()
                );
                this.registerSuccess(user);
              } catch (error) {
                this.registerError(error);
              }
            },
          },
        ],
        cssClass: "round-alert",
      });

      await alert.present();
    } else {
      const alert = await this.alert.create({
        header: "Revisa la información",
        message: "Es necesario rellenar todos los campos.",
        buttons: ["Ok, Tendré más cuidado"],
        cssClass: "round-alert",
      });

      await alert.present();
    }
  }

  async registerSuccess(user: User) {
    this.auth.setAuthUser(user);
    (
      await this.toast.create({
        message: "Registro realizado correctamente",
        duration: 2000,
        position: "bottom",
      })
    ).present();

    this.ngZone.run(() => this.nav.navigateRoot(["/"])).then();
  }

  async registerError(error: string) {
    const alert = await this.alert.create({
      header: "Error de registro",
      message: error,
      buttons: ["Ok"],
      cssClass: "round-alert",
    });

    await alert.present();
  }
}

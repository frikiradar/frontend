import { Component, Input, NgZone } from "@angular/core";
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
import { Config, ConfigService } from "src/app/services/config.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
    standalone: false
})
export class RegisterComponent {
  @Input() username: string;
  @Input() email: string;
  @Input() birthday: string;
  @Input() gender: string;
  @Input() provider: "google";
  @Input() credential: string;

  public registerForm: FormGroup;
  public today: number = Date.now();
  public clearPassword = false;
  public usernameSuggestion = "";
  public referralFailed = false;
  public birthdayValue = "";
  public language = "es";

  constructor(
    private alert: AlertController,
    private auth: AuthService,
    public fb: FormBuilder,
    private nav: NavController,
    private toast: ToastController,
    public userSvc: UserService,
    private ngZone: NgZone,
    public platform: Platform,
    public urlSvc: UrlService,
    private config: ConfigService,
    private i18n: I18nService
  ) {
    this.registerForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+"),
      ]),
      email: new FormControl("", [
        this.email ? Validators.required : Validators.nullValidator,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl("", [
        this.credential ? Validators.required : Validators.nullValidator,
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
        if (username?.trim() !== "") {
          const u = await this.auth.checkUsername(username);
          if (u !== true) {
            this.registerForm.get("username").setErrors({ incorrect: true });
            this.usernameSuggestion = u as string;
          } else {
            this.usernameSuggestion = "";
          }
        }
      });

    this.registerForm
      .get("referral")
      .valueChanges.subscribe(async (referral) => {
        this.referralFailed = false;
        if (
          referral?.trim() !== "" &&
          this.registerForm.get("meet").value == "friend"
        ) {
          try {
            await this.auth.checkLogin(referral);
          } catch (error) {
            this.registerForm.get("referral").setErrors({ incorrect: true });
            this.referralFailed = true;
          }
        }
      });
  }

  async ngOnInit() {
    this.language = (await this.config.get("language")) as Config["language"];

    if (this.username) {
      this.registerForm.get("username").setValue(this.username);
    }
    if (this.email) {
      this.registerForm.get("email").setValue(this.email);
    }
    /*if (this.birthday) {
      this.registerForm.get("birthday").setValue(this.birthday);
    }
    if (this.gender) {
      this.registerForm.get("gender").setValue(this.gender);
    }*/
  }

  async submitRegister() {
    if (this.registerForm.valid) {
      const alert = await this.alert.create({
        header: this.i18n.translate(`notice`),
        message: this.i18n.translate(
          `confirmation-code-will-be-sent-to-email`,
          { email: this.registerForm.get("email").value }
        ),
        buttons: [
          {
            text: this.i18n.translate("oops-i-made-a-mistake"),
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: this.i18n.translate("it-is-correct"),
            handler: async () => {
              if (this.registerForm.get("email").value?.trim()) {
                this.email = this.registerForm.get("email").value?.trim();
              }
              if (this.registerForm.get("username").value?.trim()) {
                this.username = this.registerForm.get("username").value?.trim();
              }

              try {
                await this.auth.register(
                  this.username,
                  this.email,
                  this.registerForm.get("password").value?.trim() ?? undefined,
                  this.registerForm.get("birthday").value.split("T")[0],
                  this.registerForm.get("gender").value?.trim(),
                  this.registerForm.get("lovegender").value,
                  this.registerForm.get("meet").value,
                  this.registerForm.get("referral").value,
                  this.provider,
                  this.credential,
                  this.language
                );

                let user: User;
                if (!this.provider) {
                  user = await this.auth.login(
                    this.registerForm.get("username").value?.trim(),
                    this.registerForm.get("password").value?.trim()
                  );
                } else {
                  user = await this.auth.loginWithProvider(
                    this.provider,
                    this.credential
                  );
                }
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

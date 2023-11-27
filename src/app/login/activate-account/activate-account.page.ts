import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { AlertController, ToastController } from "@ionic/angular";

import { User } from "src/app/models/user";
import { ConfigService } from "src/app/services/config.service";
import { NavService } from "src/app/services/navigation.service";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "activate-account-app",
  templateUrl: "./activate-account.page.html",
  styleUrls: ["./activate-account.page.scss"],
})
export class ActivateAccountPage {
  public codeForm: UntypedFormGroup;
  public emailForm: UntypedFormGroup;
  public user: User;
  public changingEmail = false;

  constructor(
    public fb: UntypedFormBuilder,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private nav: NavService,
    private toast: ToastController,
    private config: ConfigService
  ) {
    this.user = this.auth.currentUserValue;
    if (this.user.active) {
      this.nav.navigateRoot(["/"]);
    }

    this.codeForm = fb.group({
      code: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
    });

    this.emailForm = fb.group({
      email: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
    });

    this.sendCode();
  }

  async submitCode() {
    try {
      this.user = await this.userSvc.activateUser(
        this.codeForm.get("code").value.toUpperCase()
      );
      this.auth.setAuthUser(this.user);
      this.config.getConfig(true);
      const alert = await this.alert.create({
        header: `¡Cuenta activada correctamente!`,
        message:
          "¿Qué te gustaría hacer ahora? ¿Configurar tu perfil (fotos, descripción, gustos y pasatiempos...) o comenzar a buscar personas?",
        backdropDismiss: false,
        buttons: [
          {
            text: "¡Comenzar!",
            handler: () => {
              this.nav.navigateRoot(["/"]);
            },
          },
          {
            text: "Configurar mi perfil",
            handler: () => {
              this.nav.navigateRoot(["/edit-profile"]);
            },
          },
        ],
        cssClass: "round-alert",
      });

      alert.present();
    } catch (e) {
      this.codeForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Revisa el código introducido y vuelve a intentarlo.",
        buttons: ["Ok, gracias"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  async sendCode() {
    await this.auth.sendVerification();
    (
      await this.toast.create({
        message: "Te hemos enviado un código de verificación al email",
        duration: 2000,
        position: "bottom",
      })
    ).present();
  }

  async changeEmail() {
    try {
      this.user = await this.userSvc.changeEmail(
        this.user.email,
        this.emailForm.get("email").value
      );
      this.auth.setAuthUser(this.user);
      this.sendCode();
      this.changingEmail = false;
    } catch (e) {
      const alert = await this.alert.create({
        header: "Error al cambiar el email",
        message: "Revisa el email introducido y vuelve a intentarlo.",
        buttons: ["Ok, gracias"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  back() {
    this.changingEmail = false;
  }

  close() {
    this.auth.logout();
  }
}

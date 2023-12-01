import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";
import { NavService } from "src/app/services/navigation.service";

@Component({
  selector: "app-disable-account",
  templateUrl: "./disable-account.page.html",
  styleUrls: ["./disable-account.page.scss"],
})
export class DisableAccountPage {
  public disableForm: FormGroup;
  public clearPassword = false;
  public type: "disable" | "remove" = "disable";
  public showBackdrop = false;
  public codeSent = false;
  public user: User;

  constructor(
    public fb: FormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private nav: NavService
  ) {
    this.disableForm = fb.group({
      code: new FormControl("", [Validators.required, Validators.maxLength(6)]),
      note: new FormControl(),
    });

    this.user = this.auth.currentUserValue;
  }

  async sendCode() {
    this.auth.sendVerification();

    (
      await this.toast.create({
        message: "Te hemos enviado un código de verificación al email",
        duration: 2000,
        position: "bottom",
      })
    ).present();

    this.codeSent = true;
  }

  async submitForm() {
    try {
      if (this.type === "disable") {
        this.showBackdrop = true;
        (
          await this.toast.create({
            message: "Desactivando cuenta...",
            duration: 5000,
            position: "bottom",
          })
        ).present();
        const user = await this.userSvc.disableUser(
          this.disableForm.get("code").value,
          this.disableForm.get("note").value
        );

        this.auth.setAuthUser(user);
        this.showBackdrop = false;
        (
          await this.toast.create({
            message: "¡Cuenta desactivada correctamente!",
            duration: 5000,
            position: "bottom",
          })
        ).present();
      } else if (this.type === "remove") {
        this.showBackdrop = true;
        (
          await this.toast.create({
            message: "Eliminando cuenta...",
            duration: 5000,
            position: "bottom",
          })
        ).present();
        const user = await this.userSvc.removeAccount(
          this.disableForm.get("code").value,
          this.disableForm.get("note").value
        );
        this.showBackdrop = false;
        this.auth.setAuthUser(user);

        (
          await this.toast.create({
            message: "¡Cuenta eliminada correctamente!",
            duration: 5000,
            position: "bottom",
          })
        ).present();
      }

      this.modalController.dismiss();
      this.auth.logout();
    } catch (e) {
      this.showBackdrop = false;
      const alert = await this.alert.create({
        header: "El código introducido no es válido",
        message: "Revísalo y vuelve a intentarlo.",
        buttons: ["¡Vale!"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  changeType(type: "disable" | "remove") {
    this.type = type;
  }

  close() {
    this.modalController.dismiss();
    this.nav.back();
  }
}

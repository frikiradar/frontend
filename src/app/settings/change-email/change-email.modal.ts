import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController
} from "@ionic/angular";

import { User } from "src/app/models/user";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "change-email-modal",
  templateUrl: "./change-email.modal.html",
  styleUrls: ["./change-email.modal.scss"]
})
export class ChangeEmailModal {
  public emailForm: UntypedFormGroup;
  public clearOldPassword = false;
  public clearPassword = false;
  public user: User;

  constructor(
    public fb: UntypedFormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController
  ) {
    this.user = this.auth.currentUserValue;

    this.emailForm = fb.group({
      email: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ])
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changeEmail(
        this.user.email,
        this.emailForm.get("email").value
      );

      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: "¡Cuenta de correo cambiada correctamente!",
          duration: 2000,
          position: "bottom"
        })
      ).present();

      this.modal.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: "Ha habido un error",
        message:
          "¿Es posible que este correo ya esté en uso? Vuelve a intentarlo transcurridos unos minutos.",
        buttons: ["¡De acuerdo!"],
        cssClass: "round-alert"
      });

      alert.present();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

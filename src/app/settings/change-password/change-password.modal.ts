import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "change-password-modal",
  templateUrl: "./change-password.modal.html",
  styleUrls: ["./change-password.modal.scss"],
})
export class ChangePasswordModal {
  public passForm: UntypedFormGroup;
  public clearOldPassword = false;
  public clearPassword = false;

  constructor(
    public fb: UntypedFormBuilder,
    private modalController: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController
  ) {
    this.passForm = fb.group({
      oldPassword: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      password: new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changePassword(
        this.passForm.get("oldPassword").value,
        this.passForm.get("password").value
      );

      this.auth.setAuthUser(user);

      (
        await this.toast.create({
          message: "¡Contraseña cambiada correctamente!",
          duration: 2000,
          position: "bottom",
        })
      ).present();

      this.modalController.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: "La contraseña actual introducida no es válida",
        message: "Revísala y vuelve a intentarlo.",
        buttons: ["¡Vale!"],
        cssClass: "round-alert",
      });

      alert.present();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}

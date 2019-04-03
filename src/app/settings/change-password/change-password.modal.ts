import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { AlertController, ModalController } from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

const { Toast } = Plugins;

@Component({
  selector: "change-password-modal",
  templateUrl: "./change-password.modal.html",
  styleUrls: ["./change-password.modal.scss"]
})
export class ChangePasswordModal {
  public passForm: FormGroup;
  public clearOldPassword = false;
  public clearPassword = false;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private router: Router
  ) {
    this.passForm = fb.group({
      oldPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.changePassword(
        this.passForm.get("oldPassword").value,
        this.passForm.get("password").value
      );

      this.auth.setAuthUser(user);

      await Toast.show({
        text: "¡Contraseña cambiada correctamente!"
      });
      this.modal.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: "La contraseña actual introducida no es válida",
        message: "Revísala y vuelve a intentarlo.",
        buttons: ["¡Vale!"]
      });

      alert.present();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

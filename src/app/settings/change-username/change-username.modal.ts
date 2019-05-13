import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, ModalController } from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "change-username-modal",
  templateUrl: "./change-username.modal.html",
  styleUrls: ["./change-username.modal.scss"]
})
export class ChangeUsernameModal {
  public passForm: FormGroup;
  public clearOldPassword = false;
  public clearPassword = false;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: Toast
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

      this.toast
        .show("¡Contraseña cambiada correctamente!", "short", "bottom")
        .subscribe();

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

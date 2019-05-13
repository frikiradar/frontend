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
  selector: "disable-account-modal",
  templateUrl: "./disable-account.modal.html",
  styleUrls: ["./disable-account.modal.scss"]
})
export class DisableAccountModal {
  public disableForm: FormGroup;
  public clearPassword = false;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: Toast
  ) {
    this.disableForm = fb.group({
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      note: new FormControl()
    });
  }

  async submitForm() {
    try {
      const user = await this.userSvc.disableUser(
        this.disableForm.get("password").value,
        this.disableForm.get("note").value
      );

      this.auth.setAuthUser(user);

      this.toast
        .show("¡Cuenta desactivada correctamente!", "long", "bottom")
        .subscribe();

      this.modal.dismiss();
      this.auth.logout();
    } catch (e) {
      const alert = await this.alert.create({
        header: "La contraseña introducida no es válida",
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

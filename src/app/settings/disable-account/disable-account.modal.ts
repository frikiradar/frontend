import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController
} from "@ionic/angular";

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
    private toast: ToastController
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

      (await this.toast.create({
        message: "¡Cuenta desactivada correctamente!",
        duration: 5000,
        position: "bottom"
      })).present();

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

import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Toast } from "@ionic-native/toast/ngx";
import { AlertController, ModalController } from "@ionic/angular";

import { User } from "src/app/models/user";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "change-email-modal",
  templateUrl: "./change-email.modal.html",
  styleUrls: ["./change-email.modal.scss"]
})
export class ChangeEmailModal {
  public emailForm: FormGroup;
  public clearOldPassword = false;
  public clearPassword = false;
  public user: User;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private alert: AlertController,
    private toast: Toast
  ) {
    this.user = this.auth.currentUserValue;

    this.emailForm = fb.group({
      email: new FormControl("", [
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

      this.toast
        .show("¡Cuenta de correo cambiada correctamente!", "short", "bottom")
        .subscribe();

      this.modal.dismiss();
    } catch (e) {
      const alert = await this.alert.create({
        header: "Ha habido un error",
        message: "Vuelve a intentarlo transcurridos unos minutos.",
        buttons: ["¡De acuerdo!"]
      });

      alert.present();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

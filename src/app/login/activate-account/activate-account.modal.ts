import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  AlertController,
  ModalController,
  NavController
} from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { DeviceService } from "./../../services/device.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "activate-account-modal",
  templateUrl: "./activate-account.modal.html",
  styleUrls: ["./activate-account.modal.scss"]
})
export class ActivateAccountModal implements OnInit {
  public codeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private userSvc: UserService,
    private auth: AuthService,
    private device: DeviceService,
    private alert: AlertController,
    private nav: NavController
  ) {
    this.codeForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ])
    });
  }

  async ngOnInit() {
    await this.userSvc.resendActivationEmail().toPromise();
  }

  async submitCode() {
    try {
      const user = await this.userSvc.activateUser(
        this.codeForm.get("code").value.toUpperCase()
      );
      this.auth.setAuthUser(user);
      this.device.setDevice();
      this.modal.dismiss();
    } catch (e) {
      this.codeForm.get("code").setValue("");

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Revisa el código introducido y vuelve a intentarlo.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  close() {
    this.auth.logout();
    this.modal.dismiss();
  }
}

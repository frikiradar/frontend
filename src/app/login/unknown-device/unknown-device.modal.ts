import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";

import { AuthService } from "./../../services/auth.service";
import { DeviceService } from "./../../services/device.service";

@Component({
  selector: "unknown-device-modal",
  templateUrl: "./unknown-device.modal.html",
  styleUrls: ["./unknown-device.modal.scss"]
})
export class UnknownDeviceModal {
  public codeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private modal: ModalController,
    private auth: AuthService,
    private alert: AlertController,
    private router: Router,
    private device: DeviceService
  ) {
    this.codeForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });
    this.device.unknownDevice();
  }

  async submitCode() {
    try {
      const user = await this.device.verifyDevice(
        this.codeForm.get("code").value.toUpperCase()
      );

      this.device.setDevice();
      this.auth.setAuthUser(user);
      this.modal.dismiss();
    } catch (e) {
      this.codeForm.get("code").setValue("");
      this.device.unknownDevice();

      const alert = await this.alert.create({
        header: "Código de seguridad no válido",
        message: "Te hemos enviado un nuevo código al correo electrónico.",
        buttons: ["Ok, gracias"]
      });

      alert.present();
    }
  }

  close() {
    this.auth.logout();
    this.router.navigate(["/login"]);
    this.modal.dismiss();
  }
}

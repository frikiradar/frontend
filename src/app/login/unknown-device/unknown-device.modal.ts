import { Component, OnInit } from "@angular/core";
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
export class UnknownDeviceModal implements OnInit {
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
        Validators.maxLength(6)
      ])
    });
  }

  async ngOnInit() {
    await this.device.unknownDevice().toPromise();
  }

  async submitCode() {
    try {
      const device = await this.device.getCurrentDevice();
      const user = await this.device.verifyDevice(
        this.codeForm.get("code").value.toUpperCase(),
        device
      );

      this.auth.setAuthUser(user);
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

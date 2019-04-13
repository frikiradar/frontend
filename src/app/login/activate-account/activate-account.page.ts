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

import { AuthService } from "../../services/auth.service";
import { DeviceService } from "../../services/device.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "activate-account-app",
  templateUrl: "./activate-account.page.html",
  styleUrls: ["./activate-account.page.scss"]
})
export class ActivateAccountPage implements OnInit {
  public codeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userSvc: UserService,
    private auth: AuthService,
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
      this.nav.navigateRoot(["/tabs/radar"]);
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
  }
}

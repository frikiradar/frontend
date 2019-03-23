import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "forgot-password-modal",
  templateUrl: "./forgot-password.modal.html",
  styleUrls: ["./forgot-password.modal.scss"]
})
export class ForgotPasswordModal {
  public requestForm: FormGroup;
  public passwordForm: FormGroup;

  public step = 1;
  public clearPassword = false;

  constructor(
    navParams: NavParams,
    public fb: FormBuilder,
    private modal: ModalController
  ) {
    this.requestForm = fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.passwordForm = fb.group({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    if (navParams && navParams.get("username")) {
      this.requestForm
        .get("username")
        .setValue(navParams.get("username").value);
    }
  }

  async submitRequest() {
    this.step = 2;
  }

  async submitPassword() {}

  close() {
    this.modal.dismiss();
  }
}

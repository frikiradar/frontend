import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "global-notifications",
  templateUrl: "./global-notifications.modal.html",
  styleUrls: ["./global-notifications.modal.scss"]
})
export class GlobalNotificationsModal implements OnInit {
  public user: User;
  public messageForm: UntypedFormGroup;
  get message() {
    return this.messageForm.get("message");
  }
  get title() {
    return this.messageForm.get("title");
  }
  public test = true;

  constructor(
    private auth: AuthService,
    public formBuilder: UntypedFormBuilder,
    private admin: AdminService,
    private toast: ToastController,
    private modal: ModalController
  ) {
    this.messageForm = formBuilder.group({
      title: new UntypedFormControl(),
      message: new UntypedFormControl("", [Validators.required]),
      test: new UntypedFormControl()
    });
  }

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async sendMessage() {
    const message = this.message.value.trim();
    let title = this.title.value ? this.title.value.trim() : "";

    if (!this.test) {
      this.message.setValue("");
      this.title.setValue("");
    } else {
      title = title + " (test)";
    }
    try {
      const topic = this.test ? "test" : "frikiradar";
      await this.admin.sendTopicMessage(topic, message, title);
      (
        await this.toast.create({
          message: "Mensaje enviado correctamente.",
          duration: 5000,
          position: "middle"
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al enviar el mensaje.",
          duration: 5000,
          position: "middle"
        })
      ).present();
    }
  }

  close() {
    this.modal.dismiss();
  }
}

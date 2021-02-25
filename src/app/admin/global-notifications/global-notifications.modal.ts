import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { PushService } from "src/app/services/push.service";

@Component({
  selector: "app-admin",
  templateUrl: "./global-notifications.modal.html",
  styleUrls: ["./global-notifications.modal.scss"]
})
export class GlobalNotificationsModal implements OnInit {
  public user: User;
  public messageForm: FormGroup;
  get message() {
    return this.messageForm.get("message");
  }
  get title() {
    return this.messageForm.get("title");
  }
  public test = true;

  constructor(
    private auth: AuthService,
    public formBuilder: FormBuilder,
    private push: PushService,
    private toast: ToastController,
    private modal: ModalController
  ) {
    this.messageForm = formBuilder.group({
      title: new FormControl(),
      message: new FormControl("", [Validators.required]),
      test: new FormControl()
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
      await this.push.sendTopicMessage(topic, message, title);
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

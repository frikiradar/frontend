import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ToastController } from "@ionic/angular";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { PushService } from "./../services/push.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"]
})
export class AdminPage implements OnInit {
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
    private toast: ToastController
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
    const title = this.title.value ? this.title.value.trim() : "";

    this.message.setValue("");
    this.title.setValue("");
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
}

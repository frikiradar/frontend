import { ToastController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

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

  constructor(
    private auth: AuthService,
    public formBuilder: FormBuilder,
    private push: PushService,
    private toast: ToastController
  ) {
    this.messageForm = formBuilder.group({
      message: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async sendMessage() {
    const message = this.message.value.trim();
    this.message.setValue("");
    try {
      await this.push.sendTopicMessage(message, "frikiradar");
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

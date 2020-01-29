import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

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

  constructor(private auth: AuthService, public formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      message: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    this.user = this.auth.currentUserValue;
  }

  async sendMessage() {
    const text = this.message.value.trim();
    this.message.setValue("");
  }
}

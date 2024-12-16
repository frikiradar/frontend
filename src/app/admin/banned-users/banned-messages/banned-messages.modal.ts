import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IonContent, IonTextarea, ModalController } from "@ionic/angular";
import { Chat } from "src/app/models/chat";

import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
import { AuthService } from "src/app/services/auth.service";
import { UrlService } from "src/app/services/url.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-banned-messages",
    templateUrl: "./banned-messages.modal.html",
    styleUrls: ["./banned-messages.modal.scss"],
    standalone: false
})
export class BannedMessagesModal implements OnInit {
  @Input() id: User["id"];
  public chatForm: FormGroup;
  get message() {
    return this.chatForm.get("message");
  }

  @ViewChild("textarea", { static: true })
  textarea: IonTextarea;
  @ViewChild("chatlist", { static: true })
  chatlist: IonContent;

  public user: User;
  messages: Chat[] = [];
  public countDownString = "";

  constructor(
    private modalController: ModalController,
    private admin: AdminService,
    public formBuilder: FormBuilder,
    private urlSvc: UrlService,
    private userSvc: UserService
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required]),
    });
  }

  async ngOnInit() {
    this.user = await this.userSvc.getUser(this.id);
    this.messages = (await this.admin.getBannedMessages(this.id)).reverse();
    if (this.user.ban_end) {
      setInterval(() => {
        this.countDown();
      }, 1000);
    }
  }

  async sendMessage(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (this.message.value && this.message.value.trim()) {
      const text = this.message.value ? this.message.value.trim() : "";
      this.message.setValue("");
      this.textarea?.setFocus();

      this.messages = [
        ...this.messages,
        ...[
          {
            touser: { id: 1 },
            fromuser: { id: this.user.id },
            text,
            time_creation: new Date(),
          },
        ],
      ].filter((m: Chat) => m.text || m.image);

      this.scrollDown();
      try {
        await this.admin.sendMessage(this.user.id, text).then();
      } catch (e) {
        this.messages = this.messages.filter((m) => m.sending !== true);
        console.error(e);
      }
    }
  }

  scrollDown(delay = 1) {
    if (!this.chatlist) {
      return;
    }
    setTimeout(() => {
      this.chatlist.scrollToBottom(0);
    }, delay);
  }

  countDown() {
    const countDownDate = new Date(this.user.ban_end).getTime();
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countDownString =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  openUrl(event: any) {
    this.urlSvc.openUrl(event);
    return false;
  }

  close() {
    this.modalController.dismiss();
  }
}

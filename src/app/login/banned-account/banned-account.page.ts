import { Component, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { IonContent, IonTextarea } from "@ionic/angular";

import { Chat } from "src/app/models/chat";
import { User } from "src/app/models/user";
import { ChatService } from "src/app/services/chat.service";
import { UrlService } from "src/app/services/url.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "banned-account-app",
  templateUrl: "./banned-account.page.html",
  styleUrls: ["./banned-account.page.scss"]
})
export class BannedAccountPage {
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
    private auth: AuthService,
    private chatSvc: ChatService,
    public formBuilder: FormBuilder,
    private urlSvc: UrlService
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required])
    });
    this.user = this.auth.currentUserValue;

    setInterval(() => {
      this.countDown();
    }, 1000);

    this.messages = [
      {
        text:
          "Tu cuenta está baneada por el siguiente motivo: " +
          this.user.ban_reason,
        touser: { id: this.user.id },
        fromuser: { id: 1 }
      },
      {
        text:
          "Recapacita lo que has hecho, reflexiona y mejora tu actitud, esto es una advertencia. Estás castigado el tiempo mostrado, muestra respeto tal y como te gustaría recibirlo.",
        touser: { id: this.user.id },
        fromuser: { id: 1 }
      },
      {
        text:
          "Una vez hayas recapacitado... si crees que ha sido un error, quieres disculparte o aportar sugerencias para la aplicación escribe a continuación.",
        touser: { id: this.user.id },
        fromuser: { id: 1 }
      }
    ];
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
            time_creation: new Date()
          }
        ]
      ].filter((m: Chat) => m.text || m.image);

      this.scrollDown();
      try {
        await this.chatSvc.sendMessage(1, text).then();
      } catch (e) {
        this.messages = this.messages.filter(m => m.sending !== true);
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

  openUrl(event: any) {
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      this.urlSvc.openUrl(event.srcElement.href);
    }
    return false;
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

    // If the count down is finished, write some text
    if (distance < 0) {
      this.auth.logout();
    }
  }

  close() {
    this.auth.logout();
  }
}

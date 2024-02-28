import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  PopoverController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
import { Clipboard } from "@capacitor/clipboard";

import { User } from "src/app/models/user";
import { AdminService } from "../services/admin.service";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { I18nService } from "../services/i18n.service";

@Component({
  selector: "options-popover",
  templateUrl: "./options-popover.html",
  styleUrls: ["./options-popover.scss"],
})
export class OptionsPopover {
  public user: User;
  public page: string;
  public isPlatform = isPlatform;

  constructor(
    public popoverController: PopoverController,
    private router: Router,
    public auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController,
    private toast: ToastController,
    private admin: AdminService,
    private utils: UtilsService,
    private i18n: I18nService
  ) {}

  close() {
    this.popoverController.dismiss();
  }

  showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
    }

    this.close();
  }

  async report(user: User) {
    const alert = await this.alert.create({
      header:
        this.i18n.translate("do-you-want-to-report") + user.username + "?",
      message: this.i18n.translate("report-description"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("report-reason"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("report"),
          role: "block",
          handler: async (data) => {
            if (data.note.trim().length) {
              try {
                await this.userSvc.report(user.id, data.note);
                (
                  await this.toast.create({
                    message: this.i18n.translate("user-reported-successfully"),
                    duration: 2000,
                    position: "bottom",
                  })
                ).present();
              } catch (e) {
                (
                  await this.toast.create({
                    message: this.i18n.translate("error-reporting-user") + e,
                    duration: 2000,
                    position: "bottom",
                    color: "danger",
                  })
                ).present();
                alert.present();
              }
            } else {
              (
                await this.toast.create({
                  message: this.i18n.translate(
                    "report-message-cannot-be-blank"
                  ),
                  duration: 2000,
                  position: "middle",
                  color: "danger",
                })
              ).present();

              this.report(this.user);
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    this.close();
  }

  async block(user: User) {
    const alert = await this.alert.create({
      header: this.i18n.translate("do-you-want-to-block") + user.username + "?",
      message: this.i18n.translate("block-description"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("block-reason"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("block"),
          role: "block",
          handler: async (data) => {
            try {
              await this.userSvc.block(user.id, data.note);
              (
                await this.toast.create({
                  message: this.i18n.translate("user-blocked-successfully"),
                  duration: 2000,
                  position: "bottom",
                })
              ).present();
              this.router.navigate(["/"]);
            } catch (e) {
              (
                await this.toast.create({
                  message: this.i18n.translate("error-blocking-user") + e,
                  duration: 2000,
                  position: "bottom",
                })
              ).present();
              alert.present();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    this.close();
  }

  async copyProfile() {
    const referrer = this.auth.currentUserValue
      ? this.auth.currentUserValue.username
      : "app";
    const url = `https://frikiradar.app/${this.user.username.replace(
      " ",
      "+"
    )}?referrer=${referrer}`;
    try {
      await Clipboard.write({ string: url });

      (
        await this.toast.create({
          message: this.i18n.translate("url-copied-successfully"),
          duration: 2000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-copying-url"),
          duration: 2000,
          position: "middle",
        })
      ).present();
    }
    this.close();
  }

  shareProfile() {
    const url = `https://frikiradar.app/${this.user.username.replace(
      " ",
      "+"
    )}`;
    this.utils.share(url);
    this.close();
  }

  async warn(user: User) {
    const alert = await this.alert.create({
      header: this.i18n.translate("do-you-want-to-warn") + user.username + "?",
      message: this.i18n.translate("warn-description"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("moderator-message"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("send-warning"),
          role: "warn",
          handler: async (data) => {
            try {
              await this.admin.warn(user.id, data.note);
              (
                await this.toast.create({
                  message: this.i18n.translate("user-warned-successfully"),
                  duration: 2000,
                  position: "middle",
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: this.i18n.translate("error-warning-user") + e,
                  duration: 2000,
                  position: "middle",
                })
              ).present();
              alert.present();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    this.close();
  }

  async ban(user: User) {
    const alert = await this.alert.create({
      header: this.i18n.translate("do-you-want-to-ban") + user.username + "?",
      message: this.i18n.translate("ban-description"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("ban-reason"),
        },
        {
          name: "hours",
          type: "number",
          attributes: {
            min: 0,
            max: 24,
          },
          placeholder: this.i18n.translate("hours"),
        },
        {
          name: "days",
          type: "number",
          placeholder: this.i18n.translate("days"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("ban-user"),
          role: "ban",
          handler: async (data) => {
            try {
              await this.admin.ban(user.id, data.note, data.days, data.hours);
              (
                await this.toast.create({
                  message: this.i18n.translate("user-banned-successfully"),
                  duration: 2000,
                  position: "middle",
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: this.i18n.translate("error-banning-user") + e,
                  duration: 2000,
                  position: "middle",
                })
              ).present();
              alert.present();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    this.close();
  }
}

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
    private utils: UtilsService
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
      header: `¿Quieres reportar a ${user.username}?`,
      message:
        "Nos llegará un aviso para que revisemos el caso y actuemos en consecuencia. Describe a continuación el motivo del reporte.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del reporte",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Reportar",
          role: "block",
          handler: async (data) => {
            if (data.note.trim().length) {
              try {
                await this.userSvc.report(user.id, data.note);
                (
                  await this.toast.create({
                    message: "Usuario reportado correctamente",
                    duration: 2000,
                    position: "bottom",
                  })
                ).present();
              } catch (e) {
                (
                  await this.toast.create({
                    message: `Error al reportar al usuario ${e}`,
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
                  message: `El mensaje de reporte no puede estar en blanco`,
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
      header: `¿Quieres bloquear a ${user.username}?`,
      message:
        "Ya no podrá volver a verte, escribirte o interactuar contigo en frikiradar a menos que lo desbloquees. Si lo deseas puedes indicarnos el motivo del bloqueo.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del bloqueo (opcional)",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Bloquear",
          role: "block",
          handler: async (data) => {
            try {
              await this.userSvc.block(user.id, data.note);
              (
                await this.toast.create({
                  message: "Usuario bloqueado correctamente",
                  duration: 2000,
                  position: "bottom",
                })
              ).present();
              this.router.navigate(["/"]);
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al bloquear al usuario ${e}`,
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
          message: "URL copiada correctamente",
          duration: 2000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al copiar la URL",
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
      header: `¿Quieres enviar una advertencia a ${user.username}?`,
      message:
        "Se enviará un mensaje al usuario desde la cuenta de frikiradar advirtiéndole de su falta.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Mensaje del moderador",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Enviar advertencia",
          role: "warn",
          handler: async (data) => {
            try {
              await this.admin.warn(user.id, data.note);
              (
                await this.toast.create({
                  message: "Usuario avisado correctamente",
                  duration: 2000,
                  position: "middle",
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al avisar al usuario ${e}`,
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
      header: `¿Quieres banear al usuario ${user.username}?`,
      message:
        "Indícale al usuario el motivo por el cual le baneas. Añade el tiempo (días/horas) si el baneo es temporal o déjalo en blanco si es indefinido.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del baneo",
        },
        {
          name: "hours",
          type: "number",
          attributes: {
            min: 0,
            max: 24,
          },
          placeholder: "Horas",
        },
        {
          name: "days",
          type: "number",
          placeholder: "Dias",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Banear al usuario",
          role: "ban",
          handler: async (data) => {
            try {
              await this.admin.ban(user.id, data.note, data.days, data.hours);
              (
                await this.toast.create({
                  message: "Usuario baneado correctamente",
                  duration: 2000,
                  position: "middle",
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al banear al usuario ${e}`,
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

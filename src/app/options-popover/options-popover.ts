import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { User } from "src/app/models/user";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "options-popover",
  templateUrl: "./options-popover.html",
  styleUrls: ["./options-popover.scss"]
})
export class OptionsPopover {
  public user: User;
  public page: string;

  constructor(
    public popover: PopoverController,
    private router: Router,
    public auth: AuthService,
    private userSvc: UserService,
    private alert: AlertController,
    private toast: ToastController
  ) {}

  close() {
    this.popover.dismiss();
  }

  showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
    }

    this.close();
  }

  async block(user: User) {
    const alert = await this.alert.create({
      header: `¿Quieres bloquear a ${user.username}?`,
      message:
        "Ya no podrá volver a verte, escribirte o interactuar contigo en FrikiRadar a menos que lo desbloquees. Si lo deseas puedes indicarnos el motivo del bloqueo.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del bloqueo (opcional)"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Bloquear",
          role: "block",
          handler: async data => {
            try {
              await this.userSvc.block(user.id, data.note);
              (
                await this.toast.create({
                  message: "Usuario bloqueado correctamente",
                  duration: 2000,
                  position: "bottom"
                })
              ).present();
              this.router.navigate(["/"]);
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al bloquear al usuario ${e}`,
                  duration: 2000,
                  position: "bottom"
                })
              ).present();
              alert.present();
            }
          }
        }
      ]
    });

    await alert.present();
    this.close();
  }

  async warn(user: User) {
    const alert = await this.alert.create({
      header: `¿Quieres enviar una advertencia a ${user.username}?`,
      message:
        "Se enviará un mensaje al usuario desde la cuenta de FrikiRadar advirtiéndole de su falta.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Mensaje del moderador"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Enviar advertencia",
          role: "warn",
          handler: async data => {
            try {
              await this.userSvc.warn(user.id, data.note);
              (
                await this.toast.create({
                  message: "Usuario avisado correctamente",
                  duration: 2000,
                  position: "middle"
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al avisar al usuario ${e}`,
                  duration: 2000,
                  position: "middle"
                })
              ).present();
              alert.present();
            }
          }
        }
      ]
    });

    await alert.present();
    this.close();
  }

  async ban(user: User) {
    const alert = await this.alert.create({
      header: `¿Quieres banear al usuario ${user.username}?`,
      message:
        "Indícale al usuario el motivo por el cual le baneas. Añade una fecha de fin si el baneo es temporal.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del baneo"
        },
        {
          name: "date",
          type: "date",
          placeholder: "Fecha de finalización"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Banear al usuario",
          role: "ban",
          handler: async data => {
            try {
              await this.userSvc.ban(user.id, data.note, data.date);
              (
                await this.toast.create({
                  message: "Usuario baneado correctamente",
                  duration: 2000,
                  position: "middle"
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al banear al usuario ${e}`,
                  duration: 2000,
                  position: "middle"
                })
              ).present();
              alert.present();
            }
          }
        }
      ]
    });

    await alert.present();
    this.close();
  }
}

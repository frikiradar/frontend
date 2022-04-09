import { ChatService } from "src/app/services/chat.service";
import { Component, Input } from "@angular/core";
import {
  ModalController,
  ToastController,
  AlertController,
} from "@ionic/angular";

import { Chat } from "src/app/models/chat";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "room-options-modal",
  templateUrl: "./room-options.modal.html",
  styleUrls: ["./room-options.modal.scss"],
})
export class RoomOptionsModal {
  @Input() message: Chat;

  constructor(
    private modal: ModalController,
    public auth: AuthService,
    private toast: ToastController,
    private chatSvc: ChatService,
    private alert: AlertController
  ) {}

  async deleteMessage() {
    try {
      await this.chatSvc.deleteMessage(this.message.id);
      (
        await this.toast.create({
          message: "Mensaje eliminado",
          duration: 2000,
          position: "middle",
        })
      ).present();
      this.modal.dismiss({ deleted: this.message });
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el mensaje",
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();

      console.error(e);
      this.modal.dismiss();
    }
  }

  async reportMessage() {
    const alert = await this.alert.create({
      header: `¿Quieres reportar a el mensaje de ${this.message?.fromuser?.username}?`,
      message:
        "Nos llegará un aviso para que revisemos el caso y actuemos en consecuencia.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del reporte (opcional)",
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
            try {
              await this.chatSvc.report(this.message, data.note);
              (
                await this.toast.create({
                  message: "Mensaje reportado correctamente",
                  duration: 2000,
                  position: "middle",
                })
              ).present();
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al reportar el mensaje ${e}`,
                  duration: 2000,
                  position: "middle",
                  color: "danger",
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
    this.modal.dismiss();
  }
}

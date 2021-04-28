import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class SwService {
  constructor(private swUpdate: SwUpdate, private toast: ToastController) {}

  async init() {
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toast.create({
        message: "¡Nueva actualización disponible!",
        buttons: [
          {
            text: "Instalar",
            handler: () => {
              window.location.reload();
            }
          }
        ],
        position: "bottom"
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }
}

import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { ToastController } from "@ionic/angular";
import { tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class SwService {
  constructor(private swUpdate: SwUpdate, private toast: ToastController) {}

  async init() {
    if (!this.swUpdate.isEnabled) {
      return;
    }
    this.swUpdate.versionUpdates
      .pipe(
        tap(async (update) => {
          if (update.type === "VERSION_DETECTED") {
            const toast = await this.toast.create({
              message: "¡Nueva actualización disponible!",
              buttons: [
                {
                  text: "Instalar",
                  handler: () => {
                    window.location.reload();
                  },
                },
              ],
              position: "bottom",
            });

            await toast.present();

            toast
              .onDidDismiss()
              .then(() => this.swUpdate.activateUpdate())
              .then(() => window.location.reload());
          }
          if (update.type === "VERSION_READY") {
            // this._reloadPage will be set to true, asking a full page reload on next navigation
            console.log("New server version installed");
          }
          if (update.type === "VERSION_INSTALLATION_FAILED") {
            // this._clearCacheAndReload will be set to true, asking a cache clear and full page reload on next navigation
            console.warn(
              "Error while installing update, cache will be cleared and page reloaded"
            );
          }
          // another event type possible is 'NO_NEW_VERSION_DETECTED', we don't need to handle it
        })
      )
      .subscribe();
  }
}

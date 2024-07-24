import { Injectable } from "@angular/core";
import { Intent, SendIntent } from "send-intent";
import { AlertController, isPlatform, ModalController } from "@ionic/angular";
import { PostModal } from "../post/post-modal/post.modal";
import { StoryModal } from "../story/story-modal/story.modal";
import { I18nService } from "./i18n.service";

@Injectable({
  providedIn: "root",
})
export class IntentService {
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private i18n: I18nService
  ) {}

  async init() {
    if (!isPlatform("capacitor")) {
      return;
    }

    SendIntent.checkSendIntentReceived()
      .then(async (result: Intent) => {
        if (result) {
          console.log("Intent received", result);

          let imageUrl = "";
          let text = "";

          if (result.type.includes("image/")) {
            imageUrl = result.url;
            text = "";
          } else {
            text =
              (result.title ?? "") +
              (result.title && result.url ? "\n\n" : "") +
              (result.url ?? "");
          }

          const alert = await this.alertController.create({
            header: this.i18n.translate("choose"),
            message: this.i18n.translate("choose-post-or-story"),
            buttons: [
              {
                text: this.i18n.translate("post"),
                handler: () => {
                  this.createModal("post", imageUrl, text);
                },
              },
              {
                text: this.i18n.translate("your-story"),
                handler: () => {
                  this.createModal("story", imageUrl, text);
                },
              },
            ],
            cssClass: "round-alert",
          });

          await alert.present();
        }
      })
      .catch((err) => console.error(err));
  }

  async createModal(type: "post" | "story", imageUrl: string, text: string) {
    const modal = await this.modalController.create({
      component: type == "post" ? PostModal : StoryModal, // Asumiendo que este componente puede manejar ambos tipos, de lo contrario, especifica el componente adecuado
      keyboardClose: true,
      showBackdrop: true,
      componentProps: {
        imageUrl,
        text,
        intent: true,
      },
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    SendIntent.finish();
  }
}

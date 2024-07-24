import { Injectable } from "@angular/core";
import { Intent, SendIntent } from "send-intent";
import { AlertController, ModalController } from "@ionic/angular";
import { PostModal } from "../post/post-modal/post.modal";
import { StoryModal } from "../story/story-modal/story.modal";

@Injectable({
  providedIn: "root",
})
export class IntentService {
  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  async init() {
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
            header: "Selecciona",
            message: "¿Quieres crear un post o una historia?",
            buttons: [
              {
                text: "Post",
                handler: () => {
                  this.createModal("post", imageUrl, text);
                },
              },
              {
                text: "Historia",
                handler: () => {
                  this.createModal("historia", imageUrl, text);
                },
              },
            ],
          });

          await alert.present();
        }
      })
      .catch((err) => console.error(err));
  }

  async createModal(type: "post" | "historia", imageUrl: string, text: string) {
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

import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { AuthService } from "../services/auth.service";
import { EventModal } from "./event-modal/event.modal";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"]
})
export class EventsPage implements OnInit {
  constructor(public auth: AuthService, private modal: ModalController) {}

  ngOnInit() {}

  async newEvent() {
    const modal = await this.modal.create({
      component: EventModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
  }
}

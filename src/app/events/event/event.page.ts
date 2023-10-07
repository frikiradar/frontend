import { ModalController, ToastController } from "@ionic/angular";
import { UrlService } from "./../../services/url.service";
import { AuthService } from "./../../services/auth.service";
import { UtilsService } from "./../../services/utils.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { NavService } from "./../../services/navigation.service";
import { EventService } from "./../../services/event.service";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Event } from "src/app/models/event";
import { EventModal } from "../event-modal/event.modal";
import { Page } from "src/app/models/page";
import { User } from "src/app/models/user";

@Component({
  selector: "app-event",
  templateUrl: "./event.page.html",
  styleUrls: ["./event.page.scss"],
})
export class EventPage implements OnInit {
  public event: Event;
  public mapSrc: SafeUrl = "";
  public participant = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventSvc: EventService,
    private nav: NavService,
    private sanitizer: DomSanitizer,
    private utils: UtilsService,
    public auth: AuthService,
    private urlSvc: UrlService,
    private modalController: ModalController,
    private toast: ToastController
  ) {}

  async ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    this.getEvent(+param);
  }

  async getEvent(id: Event["id"]) {
    let event = null;
    if (this.auth.currentUserValue) {
      event = await this.eventSvc.getEvent(id);
    } else {
      event = await this.eventSvc.getPublicEvent(id);
    }
    if (new Date(event.date) < new Date()) {
      event.past = true;
    }
    this.event = event;
    if (this.event.type === "offline") {
      this.setMap();
    }

    this.participant = this.event.participants.some(
      (p) => p.id === this.auth.currentUserValue.id
    );
  }

  setMap() {
    if (this.event.country && this.event.city && this.event.address) {
      const query = `${this.event.country} ${this.event.city} ${this.event.address} ${this.event.postal_code}`;
      const search =
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyBdyInAg-2KUZtQFnrQ5ra7wjf2S4q4GTQ&q=" +
        query.replace(/\s|,/g, "+");
      this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(search);
    }
  }

  async participate() {
    try {
      this.event = await this.eventSvc.participateEvent(this.event.id);
      this.participant = true;
    } catch (e) {
      (
        await this.toast.create({
          message: this.auth.currentUserValue
            ? e
            : "Tienes que iniciar sesión o registrarte para apuntarte al evento",
          duration: 2000,
          position: "bottom",
          color: "danger",
        })
      ).present();
    }
  }

  async unparticipate() {
    try {
      this.event = await this.eventSvc.unparticipateEvent(this.event.id);
      this.participant = false;
    } catch (e) {
      (
        await this.toast.create({
          message: e,
          duration: 2000,
          position: "bottom",
          color: "danger",
        })
      ).present();
    }
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
      this.modalController.dismiss();
    }
  }

  share() {
    const url = `https://frikiradar.app/event/${this.event.id}`;
    this.utils.share(
      url,
      "¡Ey, echa un vistazo a este evento en FrikiRadar! " + this.event.title
    );
  }

  openUrl(event: any) {
    this.urlSvc.openUrl(event);
    return false;
  }

  async cancel() {
    this.event = await this.eventSvc.cancelEvent(this.event.id);
  }

  async remove() {
    try {
      await this.eventSvc.deleteEvent(this.event);
      this.back();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el evento",
          duration: 2000,
          position: "bottom",
          color: "danger",
        })
      ).present();
    }
  }

  async edit() {
    const modal = await this.modalController.create({
      component: EventModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
      componentProps: { event: this.event, user: this.event?.user },
    });

    await modal.present();
    await modal.onDidDismiss();
    this.getEvent(this.event.id);
  }

  back() {
    this.nav.back();
  }
}

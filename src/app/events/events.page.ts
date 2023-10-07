import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { Event } from "../models/event";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { EventService } from "../services/event.service";
import { NavService } from "../services/navigation.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { EventModal } from "./event-modal/event.modal";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  public type: "suggested" | "online" | "near" | "my" = "suggested";
  public events: Event[];
  public user: User;
  public loading = true;
  public my = false;

  constructor(
    public auth: AuthService,
    private modalController: ModalController,
    private eventSvc: EventService,
    public utils: UtilsService,
    private userSvc: UserService,
    private nav: NavService
  ) {}

  async ngOnInit() {
    this.changeTab("suggested");
    this.user = this.auth.currentUserValue;
    // console.log(events);
  }

  async newEvent() {
    const modal = await this.modalController.create({
      component: EventModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    this.changeTab("suggested");
  }

  showEvent(event: Event) {
    this.nav.navigateRoot("/event/" + event.id);
  }

  async myEvents() {
    this.loading = true;
    const events = await this.eventSvc.getMyEvents();
    const now = new Date();

    events.map((e) => {
      if (new Date(e.date) < now) {
        e.past = true;
      }
    });
    events.sort((a, b) => {
      if (a.past || b.past) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
    this.setEvents(events);
    this.my = true;
    this.loading = false;
  }

  back() {
    this.my = false;
    this.changeTab("suggested");
  }

  showOptions() {
    document.getElementById("show-options").click();
  }

  saveOptions() {
    this.userSvc.updateUser(this.user);
  }

  async changeTab(type: "suggested" | "online" | "near") {
    this.type = type;
    this.events = undefined;
    this.loading = true;
    let events: Event[] = null;
    switch (type) {
      case "suggested":
        events = await this.eventSvc.getSuggestedEvents();
        break;
      case "online":
        events = await this.eventSvc.getOnlineEvents();
        break;
      case "near":
        events = await this.eventSvc.getNearEvents();
        break;
    }

    this.setEvents(events);
    this.loading = false;
  }

  changePreferences(property: string, value: string) {
    if (property === "country") {
      this.user.country = value;
    }

    if (property === "city") {
      this.user.city = value;
    }
  }

  setEvents(events: Event[]) {
    events.map((e) => {
      if (e.participants.some((p) => p.id === this.auth.currentUserValue.id)) {
        e.participate = true;
      }
    });

    this.events = events;
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

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
  styleUrls: ["./events.page.scss"]
})
export class EventsPage implements OnInit {
  public type: "suggested" | "online" | "near" | "my" = "suggested";
  public events: Event[];
  public pane: CupertinoPane;
  public user: User;
  public loading = true;
  public my = false;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    breaks: {
      middle: { enabled: true, height: 500, bounce: true },
      bottom: { enabled: true, height: 300, bounce: true }
    },
    initialBreak: "bottom",
    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
    },
    onDidDismiss: () => {
      // Guardamos cambios
      this.userSvc.updateUser(this.user);
    }
  };

  constructor(
    public auth: AuthService,
    private modal: ModalController,
    private eventSvc: EventService,
    private router: Router,
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
    const modal = await this.modal.create({
      component: EventModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
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

    events.map(e => {
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
    this.pane = new CupertinoPane(".events-pane", this.paneSettings);
    this.pane.present({ animate: true });
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
    events.map(e => {
      if (e.participants.some(p => p.id === this.auth.currentUserValue.id)) {
        e.participate = true;
      }
    });

    this.events = events;
  }
}

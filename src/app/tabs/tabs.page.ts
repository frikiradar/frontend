import { MenuModal } from "./../menu/menu.modal";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ModalController, Platform } from "@ionic/angular";
import { AuthService } from "../services/auth.service";

import {
  NotificationCounters,
  NotificationService,
} from "../services/notification.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnInit {
  public counters: NotificationCounters;
  public selected: string;

  constructor(
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    public auth: AuthService,
    private router: Router,
    public platform: Platform,
    private modalController: ModalController,
    private meta: Meta,
    private title: Title
  ) {
    this.router.events.subscribe((event: any) => {
      event.url = event.url === "/" ? "/tabs/radar" : event.url;
      if (event instanceof NavigationEnd && event.url.includes("/tabs/")) {
        this.selected = event.url.split("/")[2];
      }
    });
  }

  async ngOnInit() {
    this.notificationSvc.notification.subscribe((notification) => {
      this.counters = notification;
      if (!this.detectorRef["destroyed"]) {
        this.detectorRef.detectChanges();
      }
    });

    this.meta.addTags([
      {
        name: "keywords",
        content:
          "frikiradar, friki, red social, citas, radar, geolocalización, chat, conocer, gente, amigos, amigas, amor, pareja, ligar, frikis, otakus, gamers, anime, manga, cómics, cosplay",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "frikiradar" },
      { charset: "UTF-8" },
    ]);

    this.title.setTitle(
      "Página principal, frikiradar, la app de citas para frikis"
    );
    this.meta.updateTag({
      name: "description",
      content: "Encuentra personas cerca de ti con tus mismos gustos",
    });
  }

  async ionViewWillEnter() {
    this.counters =
      (await this.notificationSvc.getUnread()) as NotificationCounters;
    this.notificationSvc.setNotification(this.counters);
  }

  openChat() {
    this.router.navigate(["/chat"]);
  }

  async menu() {
    const modal = await this.modalController.create({
      component: MenuModal,
      initialBreakpoint: 0.8,
      breakpoints: [0, 0.8],
      cssClass: "sheet-modal",
      showBackdrop: true,
    });
    return await modal.present();
  }
}

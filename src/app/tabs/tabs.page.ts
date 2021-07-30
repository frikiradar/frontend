import { UserService } from "./../services/user.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { ModalController, Platform } from "@ionic/angular";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { CreditsModal } from "../credits/credits.modal";
import { RulesPage } from "../rules/rules.page";
import { AuthService } from "../services/auth.service";

import {
  NotificationCounters,
  NotificationService
} from "../services/notification.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  public counters: NotificationCounters;
  public selected: string;
  public pane: CupertinoPane;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    breaks: {
      middle: { enabled: true, height: 600, bounce: true }
    },
    initialBreak: "middle",

    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
    }
  };

  constructor(
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    public auth: AuthService,
    private router: Router,
    public platform: Platform,
    private modal: ModalController,
    public userSvc: UserService
  ) {
    this.router.events.subscribe(async (event: RouterEvent) => {
      event.url = event.url === "/" ? "/tabs/radar" : event.url;
      if (event instanceof NavigationEnd && event.url.includes("/tabs/")) {
        this.selected = event.url.split("/")[2];
      }
    });
  }

  async ngOnInit() {
    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
      if (!this.detectorRef["destroyed"]) {
        this.detectorRef.detectChanges();
      }
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

  menu() {
    this.pane = new CupertinoPane(".menu-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  viewProfile() {
    this.router.navigate(["/profile"]);
    this.paneClose();
  }

  settings() {
    this.router.navigate(["/settings"]);
    this.paneClose();
  }

  admin() {
    this.router.navigate(["/admin"]);
    this.paneClose();
  }

  async showAmbassador() {
    this.router.navigate(["/ambassador"]);
    this.paneClose();
  }

  async credits() {
    const modal = await this.modal.create({
      component: CreditsModal,
      cssClass: "full-modal"
    });
    return await modal.present();
  }

  async rules() {
    const modal = await this.modal.create({
      component: RulesPage,
      cssClass: "full-modal"
    });
    return await modal.present();
  }

  bugs() {
    this.router.navigate(["/room/frikiradar-bugs"]);
    this.paneClose();
  }

  logout() {
    this.auth.logout();
    this.paneClose();
  }

  paneClose() {
    this.pane.destroy({ animate: true });
  }
}

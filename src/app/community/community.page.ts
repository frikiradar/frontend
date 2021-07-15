import { Component } from "@angular/core";
import {
  ActivatedRoute,
  Event,
  NavigationStart,
  Router
} from "@angular/router";
import { MenuController, ModalController, Platform } from "@ionic/angular";
import { Vibration } from "@ionic-native/vibration/ngx";
import * as deepEqual from "deep-equal";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireMessaging } from "@angular/fire/messaging";

import { Room } from "../models/room";
import { Config, ConfigService } from "../services/config.service";
import { RoomService } from "../services/room.service";
import { AuthService } from "./../services/auth.service";
import { StoryService } from "../services/story.service";
import { Story } from "../models/story";
import { StoryModal } from "../story/story-modal/story.modal";
import { User } from "../models/user";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { Page } from "../models/page";
import { PageService } from "../services/page.service";
import { Chat } from "../models/chat";
import { AnimateService } from "../services/animate.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.page.html",
  styleUrls: ["./community.page.scss"]
})
export class CommunityPage {
  public rooms: Room[];
  public stories: Story[];
  public pages: Page[];
  public groupedStories: Story[] = [];
  public loading = true;

  public storiesOpts = {
    preloadImages: false,
    lazy: true,
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 6.5
      }
    },
    grabCursor: true
  };

  public pagesOpts = {
    preloadImages: false,
    lazy: true,
    slidesPerView: 3.5,
    breakpoints: {
      1024: {
        slidesPerView: 8.5
      }
    },
    grabCursor: true
  };

  constructor(
    private router: Router,
    public auth: AuthService,
    public menu: MenuController,
    private roomSvc: RoomService,
    private storySvc: StoryService,
    private config: ConfigService,
    public vibration: Vibration,
    private modal: ModalController,
    private route: ActivatedRoute,
    private pageSvc: PageService,
    private animate: AnimateService,
    private afMessaging: AngularFireMessaging,
    private firebase: FirebaseX,
    private platform: Platform
  ) {
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/tabs/community") {
          this.getStories();
        }
      }
    });
  }

  async ngAfterViewInit() {
    this.animate.animateSections("section", 600, 500);
    this.pages = (await this.config.get("pages")) as Config["pages"];
    this.rooms = (await this.config.get("rooms")) as Config["rooms"];
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      try {
        const story = await this.storySvc.getStory(+id);
        this.showStory(story);
      } catch (e) {
        console.error("Historia no encontrada");
        this.getStories();
      }
    } else {
      this.getStories();
    }
    this.getRooms();
    this.getPages();
  }

  async getStories() {
    let stories = await this.storySvc.getAllStories();
    stories = this.storySvc.orderStories(stories);
    if (!deepEqual(this.stories, stories)) {
      this.stories = stories;
      const groupedStories = this.storySvc.groupStories(stories);

      this.groupedStories = groupedStories;
    }
  }

  async getRooms() {
    this.rooms = undefined;
    let rooms = await this.roomSvc.getRooms();

    const rooms_config = await this.roomSvc.getRoomsConfig();
    rooms.map(r => {
      let configRoom = rooms_config?.find(room => room.slug === r.slug);
      if (
        configRoom?.last_message < r?.last_message ||
        (!configRoom?.last_message && r?.last_message)
      ) {
        r.unread = true;
      }
    });

    rooms = rooms.filter(r => {
      if (this.auth.currentUserValue?.roles?.includes(r.permissions[0])) {
        return r;
      }
    });

    rooms = await this.roomSvc.orderRooms(rooms);

    if (this.rooms) {
      if (!deepEqual(this.rooms.slice(0, 3), rooms.slice(0, 3))) {
        this.rooms = rooms;
        this.config.set("rooms", rooms);
      }
    } else {
      this.rooms = rooms;
      this.config.set("rooms", rooms);
    }

    this.connectSSE();
  }

  async getPages() {
    const pages = await this.pageSvc.getPages();
    if (this.pages) {
      if (!deepEqual(this.pages, pages)) {
        this.pages = pages;
        this.config.set("pages", pages);
      }
    } else {
      this.pages = pages;
      this.config.set("pages", pages);
    }

    this.loading = false;
  }

  async newStory() {
    const modal = await this.modal.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter(s => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter(s => s.user.id !== id)
    ];
    await this.showStoriesModal(stories);
    await this.getStories();
  }

  async showStory(story: Story) {
    const stories = [story];
    await this.showStoriesModal(stories);
    await this.getStories();
  }

  async showStoriesModal(stories: Story[]) {
    const modal = await this.modal.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async showAllStories() {
    this.router.navigate(["/story"]);
  }

  async showAllRooms() {
    this.router.navigate(["/rooms"]);
  }

  async showRoom(slug: Room["slug"]) {
    this.router.navigate(["/room", slug]);
    this.rooms.map(r => {
      if (r.slug === slug) {
        r.unread = false;
      }
    });
  }

  showPages() {
    this.router.navigate(["/pages"]);
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  async connectSSE() {
    if (this.platform.is("cordova")) {
      this.firebase.onMessageReceived().subscribe(notification => {
        if (notification?.message) {
          const message = JSON.parse(notification.message) as Chat;
          // console.log(message);
          this.messageReceived(message);
        }
      });
    } else {
      this.afMessaging.messages.subscribe((payload: any) => {
        if (payload?.data?.message) {
          const message = JSON.parse(payload.data.message) as Chat;
          console.log(message);
          this.messageReceived(message);
        }
      });
    }
  }

  async messageReceived(message: Chat) {
    this.rooms.map(m => {
      if (m.slug === message.conversationId) {
        if (message.fromuser.id !== this.auth.currentUserValue.id) {
          m.unread = true;
        }
      }
    });
  }

  openChat() {
    this.router.navigate(["/chat"]);
  }
}

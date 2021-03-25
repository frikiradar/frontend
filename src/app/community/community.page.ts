import { Component, ViewChild } from "@angular/core";
import {
  ActivatedRoute,
  Event,
  NavigationStart,
  Router
} from "@angular/router";
import { IonSlides, MenuController, ModalController } from "@ionic/angular";
import { ItemReorderEventDetail } from "@ionic/core";
import { Vibration } from "@ionic-native/vibration/ngx";

import { Room } from "../models/room";
import { Config, ConfigService } from "../services/config.service";
import { RoomService } from "../services/room.service";
import { AuthService } from "./../services/auth.service";
import { StoryService } from "../services/story.service";
import { Story } from "../models/story";
import { StoryModal } from "../story/story.modal";
import { User } from "../models/user";
import { UtilsService } from "../services/utils.service";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";

@Component({
  selector: "app-community",
  templateUrl: "./community.page.html",
  styleUrls: ["./community.page.scss"]
})
export class CommunityPage {
  @ViewChild("storiesSlides", { static: false })
  storiesSlides: IonSlides;
  public rooms: Room[];
  public stories: Story[];
  public groupedStories: Story[] = [];

  public reorderActive = false;

  public storiesOpts = {
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 6.5
      }
    }
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
    private utils: UtilsService
  ) {
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/tabs/community") {
          this.getStories();
          this.getRooms();
        }
      }
    });
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
  }

  async getStories() {
    let stories = await this.storySvc.getStories();
    stories.sort((a, b) => a.user.id - b.user.id);

    stories = [
      ...stories.filter(s => s.user.id === this.auth.currentUserValue.id),
      ...stories.filter(s => s.user.id !== this.auth.currentUserValue.id)
    ];

    this.stories = stories;

    stories.forEach(s => {
      if (!this.groupedStories.some(g => g.user.id === s.user.id)) {
        this.groupedStories.push(s);
      }
    });
  }

  async getRooms() {
    let rooms = await this.roomSvc.getRooms();
    const rooms_config = (await this.config.get(
      "rooms_config"
    )) as Config["rooms_config"];
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

    this.rooms = await this.roomSvc.orderRooms(rooms);
  }

  async newStory() {
    const modal = await this.modal.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.filter(s => s.user.id === id);
    stories = [...stories, ...this.stories.filter(s => s.user.id !== id)];
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

  async showRoom(slug: Room["slug"]) {
    if (!this.reorderActive) {
      this.router.navigate(["/room", slug]);
    }
  }

  activateOptions() {
    this.reorderActive = true;
    this.vibration.vibrate(5);
  }

  reorderRooms(event: CustomEvent<ItemReorderEventDetail>) {
    this.roomSvc.reorderRooms(event.detail.from, event.detail.to);
    event.detail.complete();
  }
}

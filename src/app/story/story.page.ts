import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import * as deepEqual from "deep-equal";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { Config, ConfigService } from "../services/config.service";
import { NavService } from "../services/navigation.service";
import { StoryService } from "../services/story.service";
import { StoryModal } from "./story-modal/story.modal";
import { ViewStoriesModal } from "./view-stories/view-stories.modal";

@Component({
  selector: "app-story",
  templateUrl: "./story.page.html",
  styleUrls: ["./story.page.scss"],
})
export class StoryPage implements OnInit {
  public stories: Story[];
  public groupedStories: Story[];
  public loading = true;

  constructor(
    private storySvc: StoryService,
    private modalController: ModalController,
    public auth: AuthService,
    private nav: NavService,
    private config: ConfigService
  ) {}

  async ngAfterViewInit() {
    this.groupedStories = (await this.config.get(
      "stories"
    )) as Config["stories"];
  }

  async ngOnInit() {
    this.getStories();
  }

  async getStories() {
    const stories = await this.storySvc.getAllStories();
    this.stories = this.storySvc.orderStories(stories);
    const groupedStories = this.storySvc.groupStories(this.stories);
    if (this.groupedStories) {
      if (!deepEqual(this.groupedStories, groupedStories)) {
        this.groupedStories = groupedStories;
        this.config.set("stories", groupedStories);
      }
    } else {
      this.groupedStories = groupedStories;
      this.config.set("stories", groupedStories);
    }

    this.loading = false;
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter((s) => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter((s) => s.user.id !== id),
    ];

    const modal = await this.modalController.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    this.getStories();
  }

  async newStory() {
    const modal = await this.modalController.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  back() {
    this.nav.back();
  }
}

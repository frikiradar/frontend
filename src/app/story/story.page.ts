import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { StoryService } from "../services/story.service";
import { StoryModal } from "./story-modal/story.modal";
import { ViewStoriesModal } from "./view-stories/view-stories.modal";

@Component({
  selector: "app-story",
  templateUrl: "./story.page.html",
  styleUrls: ["./story.page.scss"]
})
export class StoryPage implements OnInit {
  public stories: Story[];
  public groupedStories: Story[];

  constructor(
    private storySvc: StoryService,
    private modal: ModalController,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    this.getStories();
  }

  async getStories() {
    const stories = await this.storySvc.getAllStories();
    this.stories = this.storySvc.orderStories(stories);
    this.groupedStories = this.storySvc.groupStories(this.stories);
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.filter(s => s.user.id === id);
    stories = [...stories, ...this.stories.filter(s => s.user.id !== id)];

    const modal = await this.modal.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal"
    });

    await modal.present();
    await modal.onDidDismiss();
    this.getStories();
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
}

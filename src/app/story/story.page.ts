import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { StoryService } from "../services/story.service";
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
    let stories = await this.storySvc.getAllStories();
    stories
      .sort((a, b) => a.user.id - b.user.id)
      .sort(
        (a, b) =>
          new Date(b.time_creation).getTime() -
          new Date(a.time_creation).getTime()
      );

    stories = [
      ...stories.filter(s => s.user.id === this.auth.currentUserValue.id),
      ...stories.filter(s => s.user.id !== this.auth.currentUserValue.id)
    ];

    this.stories = stories;
    this.groupedStories = [];
    this.stories.forEach(s => {
      if (!this.groupedStories.some(g => g.user.id === s.user.id)) {
        this.groupedStories.push(s);
      }
    });
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
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Story } from "src/app/models/story";
import { StoryService } from "src/app/services/story.service";
import { SwiperOptions } from "swiper";
import { StoryModal } from "../story-modal/story.modal";
import { ModalController } from "@ionic/angular";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-story-slider",
  templateUrl: "./story-slider.component.html",
  styleUrls: ["./story-slider.component.scss"],
})
export class StorySliderComponent {
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  @Input() stories: Story[];
  @Input() slug: string;

  public groupedStories: Story[] = [];

  public storiesOpts: SwiperOptions = {
    slidesPerView: 4.5,
    breakpoints: {
      1024: {
        slidesPerView: 14.5,
      },
    },
    grabCursor: true,
  };

  constructor(
    private storySvc: StoryService,
    private modalController: ModalController,
    private router: Router,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    this.groupedStories = this.storySvc.groupStories(this.stories);
  }

  ngOnChanges() {
    this.groupedStories = this.storySvc.groupStories(this.stories);
  }

  async newStory() {
    const modal = await this.modalController.create({
      component: StoryModal,
      componentProps: { slug: this.slug },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    this.refresh.emit();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter((s) => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter((s) => s.user.id !== id),
    ];
    await this.storySvc.showStoriesModal(stories);
    this.refresh.emit();
  }

  async showStory(story: Story) {
    const stories = [story];
    await this.storySvc.showStoriesModal(stories);
    this.refresh.emit();
  }

  async showAllStories() {
    this.router.navigate(["/story"]);
  }
}

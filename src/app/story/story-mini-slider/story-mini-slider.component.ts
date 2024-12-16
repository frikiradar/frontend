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
    selector: "app-story-mini-slider",
    templateUrl: "./story-mini-slider.component.html",
    styleUrls: ["./story-mini-slider.component.scss"],
    standalone: false
})
export class StoryMiniSliderComponent {
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  @Input() stories: Story[];
  @Input() slug: string;
  @Input() user: User;

  public groupedStories: Story[] = [];

  public storiesOpts: SwiperOptions = {
    slidesPerView: 4.5,
    breakpoints: {
      768: {
        slidesPerView: 6.5,
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

  ngOnChanges() {
    this.groupStories();
  }

  groupStories() {
    if (!this.user) {
      this.groupedStories = this.storySvc.groupStories(this.stories);
    } else {
      this.groupedStories = this.stories;
    }
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
    // 1. Filtrar historias del usuario seleccionado y separarlas en vistas y no vistas
    const selectedUserStories = this.stories.filter((s) => s.user.id === id);
    const unviewedStories = selectedUserStories.filter((s) => !s.viewed);
    const viewedStories = selectedUserStories.filter((s) => s.viewed);

    // 2. y 3. Ordenar historias vistas y no vistas por ID, de la más nueva a la más antigua
    unviewedStories.sort((a, b) => b.id - a.id);
    viewedStories.sort((a, b) => b.id - a.id);

    // 4. Combinar las listas de historias vistas y no vistas
    const orderedSelectedUserStories = [...unviewedStories, ...viewedStories];

    // 5. Filtrar historias de otros usuarios
    const otherUsersStories = this.stories.filter((s) => s.user.id !== id);

    // 6. y 7. Agrupar y ordenar las historias de otros usuarios por usuario y ID
    const groupedAndSortedOtherUsersStories = otherUsersStories.reduce(
      (acc, story) => {
        if (!acc[story.user.id]) {
          acc[story.user.id] = [];
        }
        acc[story.user.id].push(story);
        return acc;
      },
      {}
    );

    // Ordenar cada grupo por ID de la historia más reciente a la más antigua
    for (const userId in groupedAndSortedOtherUsersStories) {
      groupedAndSortedOtherUsersStories[userId].sort((a, b) => b.id - a.id);
    }

    // 8. Ordenar los grupos por la historia más reciente de cada uno
    const orderedGroups = Object.values(groupedAndSortedOtherUsersStories).sort(
      (a, b) => b[0].id - a[0].id
    );

    // 9. Combinar la lista del usuario seleccionado con las historias de otros usuarios
    const finalOrderedStories = [
      ...orderedSelectedUserStories,
      ...orderedGroups.flat(),
    ];

    await this.storySvc.showStoriesModal(finalOrderedStories);
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

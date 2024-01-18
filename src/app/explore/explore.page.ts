import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SwiperOptions } from "swiper";

import { Config, ConfigService } from "../services/config.service";
import { AuthService } from "../services/auth.service";
import { Story } from "../models/story";
import { Page } from "../models/page";
import { PageService } from "../services/page.service";
import { AnimateService } from "../services/animate.service";
import { User } from "../models/user";
import { StoryModal } from "../story/story-modal/story.modal";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { ModalController } from "@ionic/angular";
import { StoryService } from "../services/story.service";
import { RulesPage } from "../rules/rules.page";
import { NavService } from "../services/navigation.service";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.page.html",
  styleUrls: ["./explore.page.scss"],
})
export class ExplorePage {
  public stories: Story[];
  public pages: Page[];
  public groupedStories: Story[] = [];
  public loading = true;

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
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    private config: ConfigService,
    private animate: AnimateService,
    private storySvc: StoryService,
    private modalController: ModalController,
    private pageSvc: PageService,
    private nav: NavService
  ) {}

  async ngAfterViewInit() {
    this.animate.animateSections("section", 600, 500);
    this.pages = (await this.config.get("pages")) as Config["pages"];

    const rules = await this.config.get("rules");
    if (!rules) {
      const modal = await this.modalController.create({
        component: RulesPage,
        cssClass: "vertical-modal",
        backdropDismiss: false,
      });
      return await modal.present();
    }
  }

  async ngOnInit() {
    await this.getStories();
    this.getPages();

    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      try {
        const story = await this.storySvc.getStory(+id);
        this.showStory(story);
      } catch (e) {
        console.error("Historia no encontrada");
      }
    }
  }

  async getStories() {
    let stories = await this.storySvc.getAllStories();
    this.stories = this.storySvc.orderStories(stories);
    this.groupedStories = this.storySvc.groupStories(this.stories);
  }

  async newStory() {
    const modal = await this.modalController.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.reverse().filter((s) => s.user.id === id);
    stories = [
      ...stories,
      ...this.stories.reverse().filter((s) => s.user.id !== id),
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
    const modal = await this.modalController.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async showAllStories() {
    this.router.navigate(["/story"]);
  }

  async getPages() {
    const pages = await this.pageSvc.getPages(12);
    this.pages = pages.slice(0, 12);
    this.config.set("pages", this.pages);

    this.loading = false;
  }

  async showPage(slug: Page["slug"]) {
    this.router.navigate(["/page", slug]);
  }

  showPages() {
    this.router.navigate(["/pages"]);
  }

  search() {
    this.router.navigate(["/search"]);
  }

  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }
}

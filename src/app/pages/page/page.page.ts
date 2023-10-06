import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, ToastController } from "@ionic/angular";
import { Meta, Title } from "@angular/platform-browser";
import ImageViewer from "awesome-image-viewer";

import { Page } from "../../models/page";
import { Story } from "../../models/story";
import { Tag } from "../../models/tags";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { PageService } from "../../services/page.service";
import { StoryService } from "../../services/story.service";
import { TagService } from "../../services/tag.service";
import { StoryModal } from "../../story/story-modal/story.modal";
import { ViewStoriesModal } from "../../story/view-stories/view-stories.modal";
import { NavService } from "src/app/services/navigation.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-page",
  templateUrl: "./page.page.html",
  styleUrls: ["./page.page.scss"],
})
export class PagePage {
  public page: Page;
  public tag: Tag;
  public stories: Story[];
  public groupedStories: Story[];
  public showDescription = false;
  public events: Event[];
  public scrollPage = 1;
  public showSkeleton = false;
  public users: User[];

  public storiesOpts = {
    slidesPerView: 6.5,
    breakpoints: {
      1024: {
        slidesPerView: 10.5,
      },
    },
  };

  constructor(
    private route: ActivatedRoute,
    private pageSvc: PageService,
    private storySvc: StoryService,
    public auth: AuthService,
    private tagSvc: TagService,
    private toast: ToastController,
    private modal: ModalController,
    private router: Router,
    private nav: NavService,
    private meta: Meta,
    private title: Title,
    public userSvc: UserService
  ) {}

  async ngAfterViewInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (this.auth.currentUserValue) {
      this.page = await this.pageSvc.getPage(slug);
      this.tag = this.auth.currentUserValue.tags.find((t) => t.slug === slug);
      this.getStories();
    } else {
      this.page = await this.pageSvc.getPublicPage(slug);
    }
    this.searchProfiles();

    this.meta.addTags([
      {
        name: "keywords",
        content:
          "frikiradar, friki, red social, " +
          this.page?.name +
          ", " +
          this.page?.category,
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "FrikiRadar" },
      { charset: "UTF-8" },
    ]);

    this.title.setTitle("Página de " + this.page?.name + " en FrikiRadar");
    this.meta.updateTag({
      name: "description",
      content: this.page?.description,
    });
  }

  async getStories() {
    const stories = await this.storySvc.getStoriesSlug(this.page.slug);
    this.stories = this.storySvc.orderStories(stories);
    this.groupedStories = this.storySvc.groupStories(this.stories);
  }

  async newStory() {
    const modal = await this.modal.create({
      component: StoryModal,
      componentProps: { hash: `#${this.page.slug}` },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
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
    const modal = await this.modal.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getStories();
  }

  async openViewer(src: string, title: string) {
    new ImageViewer({
      images: [
        {
          mainUrl: src,
          description: title,
        },
      ],
      stretchImages: true,
      isZoomable: false,
    });
  }

  async addTag() {
    if (this.auth.currentUserValue) {
      try {
        const toast = await this.toast.create({
          message: `Añadiendo etiqueta ${this.page.name}.`,
          duration: 5000,
          position: "top",
          buttons: [
            {
              text: "Deshacer",
              handler: () => {},
            },
          ],
        });
        toast.present();

        const log = await toast.onDidDismiss();
        if (log.role === "timeout") {
          this.tag = await this.tagSvc.addTag(
            this.page.name,
            this.page.category,
            this.page.slug
          );
          (
            await this.toast.create({
              message: `Etiqueta añadida ${this.page.name}.`,
              duration: 5000,
              position: "bottom",
            })
          ).present();
        }

        const user = this.auth.currentUserValue;
        user.tags = [...[this.tag], ...user.tags];
        this.auth.setAuthUser(user);
      } catch (e) {
        (
          await this.toast.create({
            message: `Error al añadir la etiqueta ${this.page.name}.`,
            color: "danger",
            duration: 5000,
            position: "middle",
          })
        ).present();
        console.error(e);
      }
    } else {
      this.nav.navigateRoot(["/login"], {
        queryParams: { returnUrl: this.router.url },
      });
    }
  }

  search() {
    this.router.navigate(["/search", this.page.name]);
  }

  async searchProfiles(event?: any, addpage = false) {
    if (addpage) {
      this.scrollPage++;
    }
    if (this.scrollPage === 1) {
      this.showSkeleton = true;
    }
    let users = await this.userSvc.searchUsers(
      this.page.name,
      "distance",
      this.scrollPage
    );

    users = users.filter((u) => !u.hide);

    this.showSkeleton = false;
    this.users =
      this.scrollPage === 1 ? (this.users = users) : [...this.users, ...users];

    if (event) {
      event.target.complete();

      if (users.length < 15) {
        event.target.disabled = true;
      }
    }
  }

  async showProfile(id: User["id"]) {
    this.router.navigate(["/profile", id]);
  }

  back() {
    this.nav.back();
  }
}

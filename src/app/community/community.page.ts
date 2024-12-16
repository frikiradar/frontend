import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ConfigService } from "../services/config.service";
import { AuthService } from "../services/auth.service";
import { Story } from "../models/story";
import { AnimateService } from "../services/animate.service";
import { ModalController } from "@ionic/angular";
import { StoryService } from "../services/story.service";
import { RulesPage } from "../rules/rules.page";
import { NavService } from "../services/navigation.service";
import { PostModal } from "../post/post-modal/post.modal";
import { PageService } from "../services/page.service";
import { Page } from "../models/page";

@Component({
    selector: "app-community",
    templateUrl: "./community.page.html",
    styleUrls: ["./community.page.scss"],
    standalone: false
})
export class CommunityPage {
  public stories: Story[];
  public posts: Story[];
  public pages: Page[];
  public loading = true;
  private page = 1;
  public postFilter: "for-you" | "show-all" = "show-all";
  private canLoadMore: boolean = true;

  constructor(
    private router: Router,
    public auth: AuthService,
    private config: ConfigService,
    private animate: AnimateService,
    private storySvc: StoryService,
    private modalController: ModalController,
    private nav: NavService,
    private pageSvc: PageService
  ) {}

  async ngAfterViewInit() {
    this.animate.animateSections("section", 600, 500);

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
    await this.getPages();
    await this.getPosts();
    this.loading = false;
  }

  async getStories() {
    let stories = await this.storySvc.getStories();
    this.stories = this.storySvc.orderStories(stories);
  }

  async getPages() {
    this.pages = await this.pageSvc.getPages(2);
  }

  async getPosts() {
    this.posts = await this.storySvc.getPosts(this.page, this.postFilter);
  }

  async getMorePosts(event) {
    if (!this.canLoadMore) {
      event.target.complete();
      return;
    }

    this.page++;
    const posts = await this.storySvc.getPosts(this.page, this.postFilter);
    this.posts = [...this.posts, ...posts];

    event.target.complete();

    if (posts.length < 15) {
      this.canLoadMore = false;
    }
  }

  async newPost() {
    const modal = await this.modalController.create({
      component: PostModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
    await this.getPosts();
  }

  showPages() {
    this.router.navigate(["/pages"]);
  }

  showPage(id: number) {
    this.router.navigate(["/page", id]);
  }

  search() {
    this.router.navigate(["/search"]);
  }

  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }

  removePost(post: Story) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  trackByPostId(index: number, post: any): any {
    return post.id;
  }

  async filterPosts(filter: "for-you" | "show-all") {
    this.postFilter = filter;
    this.page = 1;
    this.canLoadMore = true;
    await this.getPosts();
  }

  async refresh(event) {
    this.loading = true;
    this.page = 1;
    await this.getStories();
    await this.getPosts();
    event.target.complete();
    this.loading = false;
    this.canLoadMore = true;
  }
}

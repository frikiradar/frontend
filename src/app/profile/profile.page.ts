import { transition, trigger, useAnimation } from "@angular/animations";
import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Haptics, NotificationType } from "@capacitor/haptics";
import {
  AlertController,
  ModalController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { pulse } from "ng-animate";
import { SwiperOptions } from "swiper-new/types";
import { Swiper } from "swiper-new";
import { SwiperContainer } from "swiper-new/element";

import { Like } from "../models/like";
import { Story } from "../models/story";
import { Tag } from "../models/tags";
import { User } from "../models/user";
import { OptionsPopover } from "../options-popover/options-popover";
import { LikeService } from "../services/like.service";
import { NavService } from "../services/navigation.service";
import { PageService } from "../services/page.service";
import { StoryService } from "../services/story.service";
import { UrlService } from "../services/url.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { AuthService } from "./../services/auth.service";
import { LikesModal } from "./likes-modal/likes.modal";
import { AdService } from "../services/ad.service";
import { UnlimitedModal } from "../unlimited/unlimited.modal";
import { I18nService } from "../services/i18n.service";
import { ChatModalComponent } from "../chat/chat-modal/chat-modal.component";
import { PostModal } from "../post/post-modal/post.modal";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])],
})
export class ProfilePage {
  public user: User;
  public stories: Story[];
  public likes: { delivered: Like[]; received: Like[] } = {
    delivered: undefined,
    received: undefined,
  };
  public loading = true;
  public pulse: any;
  public param: "received" | "delivered";
  public slides: Swiper;
  public languages: string[];
  public connections: string[];
  public lovegenders: string[];
  public posts: Story[] = [];
  private page = 1;

  public sliderOpts: SwiperOptions = {
    keyboard: true,
    grabCursor: true,
    centeredSlides: true,
  };

  constructor(
    public popover: PopoverController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public utils: UtilsService,
    private toast: ToastController,
    private alert: AlertController,
    public auth: AuthService,
    private storiesSvc: StoryService,
    private modalController: ModalController,
    private pageSvc: PageService,
    private likeSvc: LikeService,
    private urlSvc: UrlService,
    private meta: Meta,
    private title: Title,
    private nav: NavService,
    private ad: AdService,
    private i18n: I18nService
  ) {}

  async ngAfterViewInit() {
    const param = this.route.snapshot.paramMap.get("id");
    let id = undefined;
    if (!param) {
      id = this.auth.currentUserValue.id;
      this.auth.currentUser.subscribe(async (authUser) => {
        this.user = { ...this.user, ...authUser };
      });
    } else {
      if (param.toLowerCase() === "frikiradar" || +param == 1) {
        this.router.navigate(["/profile"]);
      } else {
        id = param;
      }
    }
    try {
      this.loading = true;
      if (this.auth.currentUserValue) {
        this.user = await this.userSvc.getUser(id);
      } else {
        this.user = await this.userSvc.getPublicUser(id);
        // si no recibe entonces poner que no es public
      }

      this.meta.addTags([
        {
          name: "keywords",
          content: "frikiradar, friki, red social, citas, " + this.user?.name,
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "frikiradar" },
        { charset: "UTF-8" },
      ]);

      this.title.setTitle("Perfil de " + this.user?.name + " en frikiradar");
      this.meta.updateTag({
        name: "description",
        content: this.user?.description,
      });

      if (typeof this.user.connection === "string") {
        this.user.connection = [this.user.connection];
      }

      this.loading = false;
      if (this.auth.currentUserValue) {
        await this.getStories();
        await this.getPosts();
      }

      if (this.user.languages) {
        const languages = this.userSvc.getLanguages();
        this.languages = this.user.languages.map((l) =>
          this.i18n.translate(languages.find((l2) => l2.value === l).name)
        );
      }

      if (this.user.connection) {
        this.connections = this.user.connection.map((c) => {
          return this.i18n.translate(c);
        });
      }

      if (this.user.lovegender) {
        if (
          !this.user.lovegender.length ||
          this.user.lovegender.length >= this.userSvc.getGenders().length
        ) {
          this.lovegenders = [this.i18n.translate("any-gender")];
        } else {
          this.lovegenders = this.user.lovegender.map((l) => {
            return this.i18n.translate(l);
          });
        }
      }
    } catch (e) {
      this.loading = false;
    }

    await this.utils.delay(500);
    this.initSwiper();
    this.ad.resetReward();
  }

  async getStories() {
    this.stories = await this.storiesSvc.getUserStories(this.user.id);
  }

  async getPosts() {
    this.posts = await this.storiesSvc.getUserPosts(this.user.id);
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

  initSwiper() {
    if (!this.user) {
      return;
    }

    const swiperContainer: SwiperContainer =
      document.querySelector("#swiper-profile");
    Object.assign(swiperContainer, this.sliderOpts);
    this.slides = swiperContainer.swiper;

    this.slides.on("slideChange", async () => {
      await Haptics.vibrate({ duration: 10 });
    });
  }

  async tap(event: any) {
    if (event.x > screen.width / 2) {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }

  openUrl(event: any) {
    this.urlSvc.openUrl(event);
    return false;
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter((t) => t.category.name === category);
    }
  }

  async showChat() {
    if (!this.auth.currentUserValue) {
      this.nav.navigateRoot(["/login"], {
        queryParams: { returnUrl: this.router.url },
      });
      return;
    }
    let showChat = false;
    if (this.user.chat && !this.user.block) {
      const data = await this.doAction();
      if (data) {
        showChat = true;
      }
    } else {
      if (
        this.user.match > 0 ||
        this.user.from_like ||
        this.auth?.isVerified() ||
        this.user.roles?.includes("ROLE_MASTER")
      ) {
        const data = await this.doAction();
        if (data) {
          showChat = true;
        }
      } else {
        const alert = await this.alert.create({
          header: this.i18n.translate("cannot-start-chat"),
          message: this.i18n.translate("start-chat-requirements"),
          buttons: [this.i18n.translate("understood-thanks")],
          cssClass: "round-alert",
        });

        await alert.present();
      }
    }

    this.modalController
      .create({
        component: ChatModalComponent,
        componentProps: { userId: this.user.id },
        cssClass: "vertical-modal",
      })
      .then((modal) => {
        modal.present();
      });
  }

  async switchLike() {
    if (!this.auth.currentUserValue) {
      this.nav.navigateRoot(["/login"], {
        queryParams: { returnUrl: this.router.url },
      });
      return;
    }

    try {
      if (!this.user.like) {
        const data = await this.doAction();
        if (data) {
          await Haptics.notification({ type: NotificationType.Success });
          this.userSvc.like(this.user.id);
          this.user.like = true;
          if (
            this.user.block_messages ||
            !this.user.match ||
            !this.auth.isVerified()
          ) {
            let message = "";
            if (this.user.from_like) {
              message =
                this.i18n.translate("congratulations-on-match") +
                this.user.name +
                ".";
            } else {
              message =
                this.i18n.translate("you-have-given-your-kokoro") +
                this.user.name +
                this.i18n.translate("cannot-start-chat-until-kokoro");
            }
            (
              await this.toast.create({
                message,
                duration: 5000,
                position: "middle",
              })
            ).present();
          } else {
            (
              await this.toast.create({
                message:
                  this.i18n.translate("you-have-given-your-kokoro") +
                  this.user.name +
                  "!",
                duration: 5000,
                position: "middle",
              })
            ).present();
          }
        }
      } else {
        await Haptics.notification({ type: NotificationType.Error });
        this.userSvc.unlike(this.user.id);
        this.user.like = false;
        (
          await this.toast.create({
            message:
              this.i18n.translate("you-have-removed-your-kokoro") +
              this.user.name,
            duration: 5000,
            position: "middle",
          })
        ).present();
      }
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-giving-or-removing-kokoro"),
          duration: 5000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
  }

  async doAction() {
    if (!this.auth.isPremium()) {
      const showPromo = await this.ad.showRandomAd();
      if (!showPromo) {
        // Modal hazte premium
        const modal = await this.modalController.create({
          component: UnlimitedModal,
          cssClass: "vertical-modal",
          componentProps: { topic: "ad" },
        });
        await modal.present();
        return false;
      }
    }

    return true;
  }

  async hideProfile() {
    this.router.navigate(["/"]);
    const toast = await this.toast.create({
      message: this.i18n.translate("user-hidden"),
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: this.i18n.translate("undo"),
          handler: () => {
            this.router.navigate(["/profile/" + this.user.id]);
          },
        },
      ],
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      this.userSvc.hide(this.user.id);
    }
  }

  async showOptions(event: any) {
    const popover = await this.popover.create({
      component: OptionsPopover,
      cssClass: "options-popover",
      event: event,
      translucent: true,
      componentProps: {
        user: this.user,
        page: "profile",
      },
    });
    return await popover.present();
  }

  async showTag(tag: Tag) {
    if (tag.category.name === "games" || tag.category.name === "films") {
      try {
        if (tag.slug) {
          this.router.navigate(["/page", tag.slug]);
        } else {
          (
            await this.toast.create({
              message: this.i18n.translate("creating-page"),
              position: "middle",
            })
          ).present();
          const page = await this.pageSvc.setPage(tag.id);
          this.toast.dismiss();
          this.user.tags.map((t) => {
            if (t.id === tag.id) {
              t.slug = page.slug;
            }
          });
          if (this.auth.currentUserValue.id === this.user.id) {
            this.auth.setAuthUser(this.user);
          }
          this.router.navigate(["/page", page.slug]);
        }
      } catch (e) {
        this.toast.dismiss();
        this.router.navigate(["/search", tag.name]);
      }
    } else {
      this.router.navigate(["/search", tag.name]);
    }
  }

  async showStories(id: User["id"]) {
    let stories = this.stories.filter((s) => s.user.id === id);
    stories = [...stories, ...this.stories.filter((s) => s.user.id !== id)];
    const modal = await this.modalController.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });
    await modal.present();
    await modal.onDidDismiss();
    this.stories = await this.storiesSvc.getUserStories(+id);
  }

  async showLikes(param: "received" | "delivered") {
    this.param = param;
    if (!this.likes[param]?.length) {
      this.likes[param] = await this.likeSvc.getLikes(param, 1, this.user.id);
    }
    const modal = await this.modalController.create({
      component: LikesModal,
      componentProps: { likes: this.likes, param: this.param, user: this.user },
      initialBreakpoint: 1,
      breakpoints: [0, 1],
      cssClass: "sheet-modal",
      showBackdrop: true,
    });
    return await modal.present();
  }

  async getMorePosts(event) {
    if (this.posts?.length < 15) {
      event.target.disabled = true;
      return;
    }

    this.page++;
    const posts = await this.storiesSvc.getPosts(this.page);
    this.posts = [...posts, ...this.posts];

    event.target.complete();

    if (posts.length === 0) {
      event.target.disabled = true;
      return;
    }
  }

  removePost(post: Story) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  trackByPostId(index: number, post: any): any {
    return post.id;
  }

  async refresh(event) {
    this.page = 1;
    await this.getStories();
    await this.getPosts();
    event.target.complete();
  }

  back() {
    this.nav.back();
  }
}

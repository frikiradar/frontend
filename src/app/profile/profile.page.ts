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

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])],
})
export class ProfilePage {
  public user: User;
  public stories: Story[];
  public story: Story;
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
        this.stories = await this.storiesSvc.getUserStories(this.user.id);
        this.story = this.stories[this.stories.length - 1];
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
    } catch (e) {
      this.loading = false;
    }

    await this.utils.delay(500);
    this.initSwiper();
    this.ad.resetReward();
  }

  initSwiper() {
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

    if (this.user.chat && !this.user.block) {
      const data = await this.doAction();
      if (data) {
        this.router.navigate(["/chat", this.user.id]);
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
          this.router.navigate(["/chat", this.user.id]);
        }
      } else {
        const alert = await this.alert.create({
          header: "No puedes iniciar un chat con esta persona",
          message: `Para poder iniciar una conversación es necesario tener temas de conversación en común o haber recibido su kokoro ❤️.`,
          buttons: ["Entendido, gracias!"],
          cssClass: "round-alert",
        });

        await alert.present();
      }
    }
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
              message = `¡Felicidades por el match! Ya puedes chatear con ${this.user.name}.`;
            } else {
              message = `¡Le has entregado tu kokoro a ${this.user.name}! No podrás iniciar un chat hasta que te entregue el suyo también.`;
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
                message: `¡Le has entregado tu kokoro a ${this.user.name}!`,
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
            message: `Le has retirado tu kokoro a ${this.user.name}`,
            duration: 5000,
            position: "middle",
          })
        ).present();
      }
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al entregar o retirar el kokoro`,
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
      message:
        "Has ocultado al usuario. No volverá a aparecerte como sugerencia.",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
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
              message: "Creando página...",
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

  back() {
    this.nav.back();
  }
}

import { transition, trigger, useAnimation } from "@angular/animations";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Vibration } from "@ionic-native/vibration/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { Location } from "@angular/common";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { pulse } from "ng-animate";

import { Like } from "../models/like";
import { Story } from "../models/story";
import { Tag } from "../models/tags";
import { User } from "../models/user";
import { OptionsPopover } from "../options-popover/options-popover";
import { LikeService } from "../services/like.service";
import {
  NotificationService,
  Notification
} from "../services/notification.service";
import { PageService } from "../services/page.service";
import { StoryService } from "../services/story.service";
import { UrlService } from "../services/url.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])]
})
export class ProfilePage implements OnInit {
  public user: User;
  public stories: Story[];
  public story: Story;
  public likes: { delivered: Like[]; received: Like[] } = {
    delivered: undefined,
    received: undefined
  };
  public loading = true;
  public pulse: any;
  public pane: CupertinoPane;
  public param: "received" | "delivered";
  public counters: Notification;

  private paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    handleKeyboard: false,
    initialBreak: "middle",
    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
    }
  };

  constructor(
    public popover: PopoverController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public utils: UtilsService,
    private nav: NavController,
    private toast: ToastController,
    private vibration: Vibration,
    private alert: AlertController,
    public auth: AuthService,
    private storiesSvc: StoryService,
    private modal: ModalController,
    private pageSvc: PageService,
    private likeSvc: LikeService,
    private notificationSvc: NotificationService,
    public detectorRef: ChangeDetectorRef,
    private urlSvc: UrlService,
    private location: Location
  ) {}

  async ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    let id = undefined;
    if (!param) {
      id = this.auth.currentUserValue.id;
      this.auth.currentUser.subscribe(async authUser => {
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
      this.loading = false;
      if (this.auth.currentUserValue) {
        this.stories = await this.storiesSvc.getUserStories(this.user.id);
        this.story = this.stories[this.stories.length - 1];
      }
    } catch (e) {
      this.loading = false;
    }

    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
      this.detectorRef.detectChanges();
    });
  }

  editProfile() {
    this.router.navigate(["/edit-profile"]);
  }

  openUrl(event: any) {
    this.urlSvc.openUrl(event);
    return false;
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }

  async showChat() {
    if (!this.auth.currentUserValue) {
      this.nav.navigateRoot(["/login"], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }

    if (this.user.chat && !this.user.block) {
      this.router.navigate(["/chat", this.user.id]);
    } else {
      if (
        this.user.match > 0 ||
        this.user.from_like ||
        this.auth?.isVerified()
      ) {
        this.router.navigate(["/chat", this.user.id]);
      } else {
        const alert = await this.alert.create({
          header: "No puedes iniciar un chat con esta persona",
          message: `Para poder iniciar una conversación es necesario tener temas de conversación en común o haber recibido su kokoro ❤️.`,
          buttons: ["Entendido, gracias!"]
        });

        await alert.present();
      }
    }
  }

  async switchLike() {
    if (!this.auth.currentUserValue) {
      this.nav.navigateRoot(["/login"], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }

    if (!this.user.like) {
      this.vibration.vibrate(5);
      this.user = await this.userSvc.like(this.user.id);
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
            position: "middle"
          })
        ).present();
      } else {
        (
          await this.toast.create({
            message: `¡Le has entregado tu kokoro a ${this.user.name}!`,
            duration: 5000,
            position: "middle"
          })
        ).present();
      }
    } else {
      this.user = await this.userSvc.unlike(this.user.id);
      (
        await this.toast.create({
          message: `Le has retirado tu kokoro a ${this.user.name}`,
          duration: 5000,
          position: "middle"
        })
      ).present();
    }
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
          }
        }
      ]
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
        page: "profile"
      }
    });
    return await popover.present();
  }

  async showTag(tag: Tag) {
    if (tag.category.name === "games") {
      if (tag.slug) {
        this.router.navigate(["/page", tag.slug]);
      } else {
        try {
          (
            await this.toast.create({
              message: "Creando página...",
              position: "middle"
            })
          ).present();
          const page = await this.pageSvc.setPage(tag.id);
          this.toast.dismiss();
          this.user.tags.map(t => {
            if (t.id === tag.id) {
              t.slug = page.slug;
            }
          });
          if (this.auth.currentUserValue.id === this.user.id) {
            this.auth.setAuthUser(this.user);
          }
          this.router.navigate(["/page", page.slug]);
        } catch (e) {
          this.router.navigate(["/search", tag.name]);
        }
      }
    } else {
      this.router.navigate(["/search", tag.name]);
    }
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
    this.stories = await this.storiesSvc.getUserStories(+id);
  }

  async showLikes(param: "received" | "delivered") {
    this.param = param;
    if (!this.likes[param]?.length) {
      this.likes[param] = await this.likeSvc.getLikes(param, 1, this.user.id);
    }
    this.pane = new CupertinoPane(".likes-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  async viewProfile(id: number) {
    this.pane.destroy({ animate: true });
    if (
      this.param === "received" &&
      this.user.id === this.auth.currentUserValue.id
    ) {
      if (!this.likes[this.param].find(l => l.user.id === id).time_read) {
        await this.likeSvc.readLike(id);
      }
    }
    this.nav.navigateRoot(["/profile/", id]);
  }

  back() {
    this.location.back();
  }
}

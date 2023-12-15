import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  ModalController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
import SwiperCore, {
  Keyboard as SwiperKeyboard,
  SwiperOptions,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";

import { Story } from "src/app/models/story";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { UrlService } from "src/app/services/url.service";
import { UserService } from "src/app/services/user.service";
import { StoryService } from "../../services/story.service";
import { CommentLikesModal } from "../comment-likes/comment-likes.modal";
import { StoryModal } from "../story-modal/story.modal";
import { Haptics, NotificationType } from "@capacitor/haptics";
import { transition, trigger, useAnimation } from "@angular/animations";
import { pulse } from "ng-animate";
import { UtilsService } from "src/app/services/utils.service";

SwiperCore.use([SwiperKeyboard, Pagination, Autoplay, Mousewheel]);

@Component({
  selector: "view-stories-modal",
  templateUrl: "./view-stories.modal.html",
  styleUrls: ["./view-stories.modal.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])],
})
export class ViewStoriesModal implements OnInit {
  @Input() stories: Story[];
  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;
  public slides: SwiperCore;
  public story: Story;
  public showComments = false;
  public showViews = false;
  public pulse: any;

  public commentForm: UntypedFormGroup;
  get comment() {
    return this.commentForm.get("comment");
  }

  private delay = 5000;
  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;

  public slideOpts: SwiperOptions = {
    speed: 500,
    autoplay: {
      delay: this.delay,
    },
    grabCursor: true,
    lazy: true,
    keyboard: true,
    pagination: {
      type: "progressbar",
    },
    mousewheel: true,
  };

  constructor(
    public thisModal: ModalController,
    private modalCreate: ModalController,
    private likeModal: ModalController,
    public formBuilder: UntypedFormBuilder,
    private storySvc: StoryService,
    public userSvc: UserService,
    private toast: ToastController,
    private router: Router,
    public auth: AuthService,
    private urlSvc: UrlService,
    private cd: ChangeDetectorRef,
    private utils: UtilsService
  ) {
    this.commentForm = formBuilder.group({
      comment: new UntypedFormControl("", [Validators.required]),
    });
  }

  async ngOnInit() {
    this.story = this.stories[0];
    this.setLikeStory();
    this.viewStory(this.stories[0]);
    // await this.utils.toggleTransparent();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides.autoplay.start();
    }, 100);
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    this.slides.update();
    this.slides.on("slideChange", async (event) => {
      this.slide(event.activeIndex);
      await Haptics.vibrate({ duration: 10 });
    });
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.close();
      this.router.navigate(["/profile", id]);
    }
  }

  slide(index: number) {
    this.comment.setValue("");
    this.story = this.stories[index];
    this.cd.detectChanges();
    this.setLikeStory();
    this.viewStory(this.stories[index]);
  }

  touchStart() {
    this.slides.autoplay.stop();
  }

  touchEnd() {
    this.slides.autoplay.start();
  }

  async tap(event: any) {
    if (event instanceof PointerEvent) {
      const modal = await this.thisModal.getTop();
      const centerStart = modal.offsetWidth / 2; // 50px para el centro
      const centerEnd = modal.offsetWidth / 2; // 50px para el centro

      if (event.clientX > centerEnd) {
        this.slides.slideNext();
      } else if (event.clientX < centerStart) {
        this.slides.slidePrev();
      }
      // Si el evento está en el centro, no hagas nada
    }
    this.slides.autoplay.start();
  }

  closeCommentsSheet() {
    this.showComments = false;
  }

  commentFocus(event?: CustomEvent) {
    event?.stopPropagation();
    if (event) {
      const textarea = event.target as unknown as IonTextarea;
      textarea.getInputElement().then((a) => a.blur());
    }
    this.showComments = true;
    setTimeout(() => {
      this.textarea.setFocus();
      if (isPlatform("capacitor")) {
        Keyboard.show();
      }
    }, 500);
  }

  showViewsSheet(event: Event) {
    event.stopPropagation();
    this.showViews = true;
  }

  closeViewsSheet() {
    this.showViews = false;
  }

  showCommentsSheet(event: Event) {
    event.stopPropagation();
    this.showComments = true;
  }

  closeCommentSheet() {
    this.showComments = false;
  }

  setLikeStory() {
    this.story.viewStories.map(
      (v) =>
        (v.user.like = this.story.likeStories.some(
          (l) => l.user.id === v.user.id
        ))
    );
    this.story.like = !!this.story.likeStories.some(
      (l) => l.user.id === this.auth.currentUserValue.id
    );

    this.story.comments.map((c) => {
      if (c.likes.some((l) => l.id === this.auth.currentUserValue.id)) {
        c.like = true;
      }
    });
  }

  async switchLikeStory(event: Event) {
    event.stopPropagation();
    this.slides.autoplay.stop();

    const liked = this.story.likeStories.some(
      (l) => l.user.id === this.auth.currentUserValue.id
    );

    // Cambia el estado del "like" inmediatamente
    this.story.like = !liked;
    this.stories = this.stories.map((story) =>
      story.id === this.story.id ? this.story : story
    );
    this.cd.detectChanges();

    try {
      // Envía la solicitud al servidor en segundo plano
      if (liked) {
        this.story = await this.storySvc.unlike(this.story.id);
        Haptics.notification({ type: NotificationType.Error });
      } else {
        this.story = await this.storySvc.like(this.story.id);
        Haptics.notification({ type: NotificationType.Success });
      }
    } catch (error) {
      // Si la solicitud falla, revierte el cambio y muestra un mensaje de error
      this.story.like = liked;
      this.stories = this.stories.map((story) =>
        story.id === this.story.id ? this.story : story
      );
      this.cd.detectChanges();
      console.error(`Error al cambiar el estado del "like": ${error}`);
    }

    this.slides.autoplay.start();
  }

  async switchLikeComment(comment: Story["comments"][0]) {
    this.slides.autoplay.stop();

    const liked = comment.likes.some(
      (l) => l.id === this.auth.currentUserValue.id
    );

    // Cambia el estado del "like" inmediatamente
    this.story.comments = this.story.comments.map((c) => {
      if (c.id === comment.id) {
        c.like = !liked;
      }
      return c;
    });

    try {
      // Envía la solicitud al servidor en segundo plano
      if (liked) {
        this.story = await this.storySvc.unlikeComment(comment.id);
      } else {
        this.story = await this.storySvc.likeComment(comment.id);
        this.setLikeStory();
      }
    } catch (error) {
      // Si la solicitud falla, revierte el cambio y muestra un mensaje de error
      this.story.comments = this.story.comments.map((c) => {
        if (c.id === comment.id) {
          c.like = liked;
        }
        return c;
      });
      console.error(
        `Error al cambiar el estado del "like" del comentario: ${error}`
      );
    }
  }

  async viewStory(story: Story) {
    if (
      this.auth.currentUserValue.id !== story.user.id &&
      !story.viewStories.some(
        (v) => v.user.id === this.auth.currentUserValue.id
      )
    ) {
      this.storySvc.viewStory(story.id);
      this.story.viewStories = [
        ...this.story.viewStories,
        {
          date: new Date().toISOString(),
          user: this.auth.currentUserValue,
        },
      ];
      this.stories = this.stories.map((s) =>
        s.id === this.story.id ? this.story : s
      );
    }
  }

  async sendComment(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.slides.autoplay.stop();
    const text = this.comment.value.trim();
    this.comment.setValue("");
    this.story = await this.storySvc.commentStory(
      this.story.id,
      text,
      this.userMentions
    );
    this.stories = this.stories.map((story) =>
      story.id === this.story.id ? this.story : story
    );

    this.setLikeStory();
  }

  async addStory() {
    const modal = await this.modalCreate.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async removeStory() {
    try {
      await this.storySvc.deleteStory(this.story.id);
      (
        await this.toast.create({
          message: "Historia eliminada correctamente",
          position: "middle",
          duration: 2000,
        })
      ).present();
      this.close();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar la historia",
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
    this.modalCreate.dismiss();
  }

  async reportStory() {
    /*try {
      await this.storySvc.deleteStory(this.story.id);
      (
        await this.toast.create({
          message: "Historia eliminada correctamente",
          position: "middle",
          duration: 2000,
        })
      ).present();
      this.close();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar la historia",
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }*/
    this.modalCreate.dismiss();
  }

  async viewCommentLikes(likes: Story["comments"][0]["likes"]) {
    const modal = await this.likeModal.create({
      component: CommentLikesModal,
      keyboardClose: true,
      showBackdrop: true,
      componentProps: { likes },
      cssClass: "medium-modal",
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    if (data?.data?.showProfile) {
      this.close();
    }
  }

  async reply(comment: Story["comments"][0]) {
    if (comment.user.id !== this.auth.currentUserValue.id) {
      this.comment.setValue(`@${comment.user.username} `);
      this.setMention(comment.user.username);
    }
    this.commentFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
  }

  setMention(username: string) {
    this.usernames = [];
    this.inputAt = false;
    this.comment.setValue(
      this.comment.value.replace(this.mention, `@${username} `)
    );
    this.userMentions = [...this.userMentions, username];
    this.commentFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
  }

  async setWriting(text: string) {
    if (this.comment.value) {
      if (text.charAt(text.length - 1) == "@") {
        this.inputAt = true;
      }

      if (this.inputAt) {
        const pattern = /\B@[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+/gi;
        const matches = text.match(pattern);
        if (matches) {
          this.mention = matches[matches.length - 1];
        }

        if (this.writing) {
          return;
        }
        this.writing = true;

        if (this.mention?.length > 3 && this.comment.value.length > 3) {
          this.usernames = await this.userSvc.searchUsernames(
            this.mention.replace("@", "")
          );
        } else {
          this.usernames = [];
        }

        setTimeout(async () => {
          this.writing = false;
        }, 500);
      }
    } else {
      this.usernames = [];
    }
  }

  async deleteComment(comment: Story["comments"][0]) {
    (
      await this.toast.create({
        message: "Eliminando comentario...",
        position: "middle",
        duration: 2000,
      })
    ).present();
    try {
      this.story = await this.storySvc.deleteComment(comment.id);
      this.stories = this.stories.map((story) =>
        story.id === this.story.id ? this.story : story
      );
      this.setLikeStory();
      (
        await this.toast.create({
          message: "Comentario eliminado correctamente",
          position: "middle",
          duration: 2000,
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el comentario",
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
  }

  async openUrl(event: any) {
    await this.urlSvc.openUrl(event);

    if (
      event.srcElement.href &&
      (event.target.className.includes("mention") ||
        event.target.className.includes("hashtag") ||
        event.target.className.includes("linkified"))
    ) {
      this.close();
    }

    return false;
  }

  close() {
    this.thisModal.dismiss();
  }

  async ngOnDestroy() {
    // await this.utils.toggleTransparent();
  }
}

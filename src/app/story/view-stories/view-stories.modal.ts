import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  ModalController,
  Platform,
  ToastController,
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

SwiperCore.use([SwiperKeyboard, Pagination, Autoplay, Mousewheel]);

@Component({
  selector: "view-stories-modal",
  templateUrl: "./view-stories.modal.html",
  styleUrls: ["./view-stories.modal.scss"],
})
export class ViewStoriesModal implements OnInit {
  @Input() stories: Story[];
  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;
  public slides: SwiperCore;

  public commentForm: FormGroup;
  get comment() {
    return this.commentForm.get("comment");
  }

  public story: Story;
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
    public modal: ModalController,
    private modalCreate: ModalController,
    private likeModal: ModalController,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private storySvc: StoryService,
    public userSvc: UserService,
    private toast: ToastController,
    private router: Router,
    public auth: AuthService,
    private urlSvc: UrlService
  ) {
    this.commentForm = formBuilder.group({
      comment: new FormControl("", [Validators.required]),
    });
  }

  async ngOnInit() {
    this.story = this.stories[0];
    this.setLikeStory();
    this.viewStory(this.stories[0]);
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    this.slides.update();
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.close();
      this.router.navigate(["/profile", id]);
    }
  }

  async slide() {
    this.comment.setValue("");
    const index = this.slides.activeIndex;
    this.story = this.stories[index];
    this.setLikeStory();
    this.viewStory(this.stories[index]);
  }

  touchStart(event: TouchEvent) {
    this.slides.autoplay.stop();
  }
  touchEnd(event: TouchEvent) {
    this.slides.autoplay.start();
  }

  tap(event: any) {
    if (event instanceof PointerEvent) {
      if (event.pageX > screen.width / 2) {
        this.slides.slideNext();
      } else {
        this.slides.slidePrev();
      }
    }
    this.slides.autoplay.start();
  }

  commentFocus(event?: CustomEvent) {
    if (event) {
      const textarea = event.target as unknown as IonTextarea;
      textarea.setBlur();
    }
    document.getElementById("view-comments").click();
    setTimeout(() => {
      this.textarea.setFocus();
      if (this.platform.is("capacitor")) {
        Keyboard.show();
      }
    }, 500);
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

  async switchLikeStory() {
    this.slides.autoplay.stop();
    if (
      this.story.likeStories.some(
        (l) => l.user.id === this.auth.currentUserValue.id
      )
    ) {
      this.story.like = false;
      await this.storySvc.unlike(this.story.id);
    } else {
      this.story.like = true;
      await this.storySvc.like(this.story.id);
    }
    this.slides.autoplay.start();
  }

  async switchLikeComment(comment: Story["comments"][0]) {
    this.slides.autoplay.stop();
    if (comment.likes.some((l) => l.id === this.auth.currentUserValue.id)) {
      this.story.comments.map((c) => {
        if (c.id === comment.id) {
          c.like = false;
        }
      });
      this.story = await this.storySvc.unlikeComment(comment.id);
    } else {
      this.story.comments.map((c) => {
        if (c.id === comment.id) {
          c.like = true;
        }
      });
      this.story = await this.storySvc.likeComment(comment.id);
      this.setLikeStory();
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
    this.setLikeStory();
  }

  async addStory() {
    const modal = await this.modalCreate.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "full-modal",
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

  viewComments() {
    document.getElementById("view-comments").click();
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
    if (this.platform.is("capacitor")) {
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
    if (this.platform.is("capacitor")) {
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
    this.modal.dismiss();
  }
}

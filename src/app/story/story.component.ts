import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import SwiperCore from "swiper";
import { Haptics, NotificationType } from "@capacitor/haptics";
import {
  AlertController,
  IonTextarea,
  isPlatform,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { transition, trigger, useAnimation } from "@angular/animations";
import { pulse } from "ng-animate";

import { Story } from "../models/story";
import { I18nService } from "../services/i18n.service";
import { StoryService } from "../services/story.service";
import { AuthService } from "../services/auth.service";
import { CommentLikesModal } from "./comment-likes/comment-likes.modal";
import { Keyboard } from "@capacitor/keyboard";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { UrlService } from "../services/url.service";
import { UtilsService } from "../services/utils.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])],
})
export class StoryComponent {
  @Input() story: Story;
  @Input() slides: SwiperCore;
  @Input() showComments = false;
  @Input() showOptions = false;
  @Output() removeEvent = new EventEmitter<Story>();
  @Output() closeEvent = new EventEmitter<boolean>();

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;

  public showViews = false;
  public showCommentOptions = false;
  public selectedComment: Story["comments"][0];

  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;

  constructor(
    private storySvc: StoryService,
    private toast: ToastController,
    private i18n: I18nService,
    private auth: AuthService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router,
    private likeModal: ModalController,
    private userSvc: UserService,
    private urlSvc: UrlService,
    private utils: UtilsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.showComments?.currentValue) {
      this.showComments = changes.showComments.currentValue;
      setTimeout(() => {
        this.textarea.setFocus();
        if (isPlatform("capacitor")) {
          Keyboard.show();
        }
      }, 500);
    }

    if (changes.showOptions?.currentValue) {
      this.showOptions = changes.showOptions.currentValue;
    }
  }

  async sendComment(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.stopSlide();
    const text = this.textarea.value.trim();
    this.textarea.value = "";
    this.story = await this.storySvc.commentStory(
      this.story.id,
      text,
      this.userMentions
    );
  }

  async reply(comment: Story["comments"][0]) {
    if (comment.user.id !== this.auth.currentUserValue.id) {
      this.textarea.value = `@${comment.user.username} `;
      this.setMention(comment.user.username);
    }
    this.commentFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
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

  setMention(username: string) {
    this.usernames = [];
    this.inputAt = false;
    this.textarea.value = this.textarea.value.replace(
      this.mention,
      `@${username} `
    );
    if (!this.userMentions.includes(username)) {
      this.userMentions = [...this.userMentions, username];
    }
    this.commentFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
  }

  async setWriting(text: string) {
    if (this.textarea.value) {
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

        if (this.mention?.length > 3 && this.textarea.value.length > 3) {
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

  async openUrl(event: any) {
    await this.urlSvc.openUrl(event);

    if (
      event.srcElement.href &&
      (event.target.className.includes("mention") ||
        event.target.className.includes("hashtag") ||
        event.target.className.includes("linkified"))
    ) {
      if (await this.modalCtrl.getTop()) {
        await this.modalCtrl.dismiss();
      }
    }

    return false;
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

  closeCommentsSheet() {
    this.showComments = false;
  }

  showCommentOptionsSheet(comment: Story["comments"][0]) {
    this.selectedComment = comment;
    this.showCommentOptions = true;
  }

  closeCommentOptionsSheet() {
    this.showCommentOptions = false;
  }

  async switchLikeStory(event: Event) {
    event.stopPropagation();
    this.stopSlide();
    try {
      // Envía la solicitud al servidor en segundo plano
      if (this.story.like) {
        this.story.like = false;
        Haptics.notification({ type: NotificationType.Error });
        this.story = await this.storySvc.unlike(this.story.id);
      } else {
        this.story.like = true;
        Haptics.notification({ type: NotificationType.Success });
        this.story = await this.storySvc.like(this.story.id);
      }
    } catch (error) {
      console.error(`Error al cambiar el estado del "like": ${error}`);
    }

    this.startSlide();
  }

  async switchLikeComment(comment: Story["comments"][0]) {
    this.stopSlide();

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
        this.story.comments = this.story.comments.map((c) => {
          if (c.id === comment.id) {
            c.like = false;
          }
          return c;
        });
      } else {
        this.story = await this.storySvc.likeComment(comment.id);
        this.story.like = true;
        this.story.comments = this.story.comments.map((c) => {
          if (c.id === comment.id) {
            c.like = true;
          }
          return c;
        });
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

  async deleteComment(comment: Story["comments"][0]) {
    (
      await this.toast.create({
        message: this.i18n.translate("deleting-comment"),
        position: "middle",
        duration: 2000,
      })
    ).present();
    try {
      await this.storySvc.deleteComment(comment.id);
      this.story.comments = this.story.comments.filter(
        (c) => c.id !== comment.id
      );

      (
        await this.toast.create({
          message: this.i18n.translate("comment-deleted-successfully"),
          position: "middle",
          duration: 2000,
        })
      ).present();
      this.showCommentOptions = false;
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-deleting-comment"),
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
  }

  async reportComment(comment: Story["comments"][0]) {
    await this.modalCtrl.dismiss();
    const alert = await this.alertCtrl.create({
      header: this.i18n.translate("do-you-want-to-report-comment", {
        username: comment.user.username,
      }),
      message: this.i18n.translate("we-will-review-the-case"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("report-reason"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("report"),
          role: "block",
          handler: async (data: any) => {
            if (data.note.trim().length) {
              try {
                await this.storySvc.reportComment(comment.id, data.note);
                (
                  await this.toast.create({
                    message: this.i18n.translate(
                      "comment-reported-successfully"
                    ),
                    duration: 2000,
                    position: "bottom",
                  })
                ).present();
              } catch (e) {
                (
                  await this.toast.create({
                    message: this.i18n.translate("error-reporting-comment", {
                      error: e,
                    }),
                    duration: 2000,
                    position: "bottom",
                    color: "danger",
                  })
                ).present();
                alert.present();
              }
            } else {
              (
                await this.toast.create({
                  message: this.i18n.translate(
                    "report-message-cannot-be-blank"
                  ),
                  duration: 2000,
                  position: "middle",
                  color: "danger",
                })
              ).present();

              this.reportComment(comment);
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  async reportStory(event?: Event) {
    await this.modalCtrl.dismiss();
    const alert = await this.alertCtrl.create({
      header: this.i18n.translate("do-you-want-to-report-story", {
        username: this.story.user.username,
      }),
      message: this.i18n.translate("we-will-review-the-case"),
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: this.i18n.translate("report-reason"),
        },
      ],
      buttons: [
        {
          text: this.i18n.translate("cancel"),
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.i18n.translate("report"),
          role: "block",
          handler: async (data: any) => {
            if (data.note.trim().length) {
              try {
                await this.storySvc.report(this.story, data.note);
                (
                  await this.toast.create({
                    message: this.i18n.translate("story-reported-successfully"),
                    duration: 2000,
                    position: "bottom",
                  })
                ).present();
              } catch (e) {
                (
                  await this.toast.create({
                    message: this.i18n.translate("error-reporting-story", {
                      error: e,
                    }),
                    duration: 2000,
                    position: "bottom",
                    color: "danger",
                  })
                ).present();
                alert.present();
              }
            } else {
              (
                await this.toast.create({
                  message: this.i18n.translate(
                    "report-message-cannot-be-blank"
                  ),
                  duration: 2000,
                  position: "middle",
                  color: "danger",
                })
              ).present();

              this.reportStory();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
    this.stopSlide();

    alert.onDidDismiss().then(() => {
      this.startSlide();
    });
  }

  async blockUser() {
    try {
      await this.userSvc.block(this.story.user);
      this.router.navigate(["/"]);
    } catch (e) {
      // No hacer nada
    }
    this.close();
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      if (await this.modalCtrl.getTop()) {
        await this.modalCtrl.dismiss();
      }
      this.close();
      this.router.navigate(["/profile", id]);
    }
  }

  showPage(slug: string) {
    this.close();
    this.router.navigate(["/page", slug]);
  }

  async removeStory(event: Event) {
    await this.utils.delay(500);
    this.stopSlide();
    try {
      await this.storySvc.deleteStory(this.story.id);
      (
        await this.toast.create({
          message: this.i18n.translate("story-deleted-successfully"),
          position: "middle",
          duration: 2000,
        })
      ).present();

      this.close();
      this.removeEvent.emit(this.story);
    } catch (e) {
      (
        await this.toast.create({
          message: this.i18n.translate("error-deleting-story"),
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
  }

  stopSlide() {
    if (!this.slides) {
      return;
    }
    this.slides.autoplay.stop();
  }

  startSlide() {
    if (!this.slides) {
      return;
    }
    this.slides.autoplay.start();
  }

  async close() {
    if (await this.modalCtrl.getTop()) {
      await this.modalCtrl.dismiss();
    }

    this.closeEvent.emit(true);
  }
}

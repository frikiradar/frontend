import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Story } from "../models/story";
import { Haptics, NotificationType } from "@capacitor/haptics";
import { ImageViewerModal } from "../image-viewer/image-viewer.modal";
import { StoryService } from "../services/story.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import {
  AlertController,
  IonTextarea,
  isPlatform,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { UtilsService } from "../services/utils.service";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";
import { I18nService } from "../services/i18n.service";
import { Keyboard } from "@capacitor/keyboard";
import { UrlService } from "../services/url.service";
import { NavService } from "../services/navigation.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent {
  @Output() deletePost: EventEmitter<Story> = new EventEmitter();
  @Input() post: Story;
  @Input() page = false;

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;

  @ViewChild("postElement", { static: false }) postElement: ElementRef;
  private observer: IntersectionObserver;

  public selectedComment: Story["comments"][0];
  public showCommentOptions = false;
  public showCommentLikes = false;
  public showOptions = false;
  public showViews = false;

  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;

  constructor(
    private router: Router,
    private storySvc: StoryService,
    private modalController: ModalController,
    private utils: UtilsService,
    public userSvc: UserService,
    public auth: AuthService,
    private toast: ToastController,
    private i18n: I18nService,
    private alertCtrl: AlertController,
    private urlSvc: UrlService,
    private nav: NavService,
    private meta: Meta,
    private title: Title
  ) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              this.auth.currentUserValue &&
              !this.post.viewed &&
              this.auth.currentUserValue.id !== this.post.user.id
            ) {
              this.storySvc.viewStory(this.post.id);
            }
          }
        });
      },
      { threshold: 1 }
    );
  }

  ngOnChanges() {
    this.youtubePreview();
  }

  async ngOnInit() {
    /*if (this.page) {
      setTimeout(() => {
        if (this.textarea) {
          this.textarea.setFocus();
        }
      }, 100);
    }*/
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      if (this.postElement.nativeElement) {
        this.observer.observe(this.postElement.nativeElement);
      }
    }, 1000);

    this.meta.addTags([
      {
        name: "keywords",
        content:
          "frikiradar, friki, red social, citas, " + this.post?.user.name,
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "frikiradar" },
      { charset: "UTF-8" },
      {
        property: "og:image",
        content: this.post?.image ?? (this.post?.user.avatar as string),
      },
    ]);

    this.title.setTitle(
      "Publicación de " + this.post?.user.username + " en frikiradar"
    );
    this.meta.updateTag({
      name: "description",
      content: this.post?.text,
    });
  }

  youtubePreview() {
    if (this.post.text && !this.post.image) {
      this.post.youtube = this.utils.extractYoutubeLink(this.post.text);
    }
  }

  async showProfile(id?: number) {
    if (id !== 1 || this.post.user.id !== 1) {
      this.router.navigate(["/profile", id ?? this.post.user.id]);
    }

    if (await this.modalController.getTop()) {
      this.modalController.dismiss();
    }
  }

  async openViewer(event: Event) {
    event.stopPropagation();
    const modal = await this.modalController.create({
      component: ImageViewerModal,
      componentProps: {
        params: {
          src: this.post.image,
          title: this.post.user.username,
          description: this.post.text,
          date: this.utils.niceDate(this.post?.time_creation),
        },
      },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
  }

  async switchLikePost(event: Event) {
    if (!this.auth.currentUserValue) {
      this.redirectToLogin();
      return;
    }

    event.stopPropagation();
    try {
      let post = undefined;
      if (this.post.like) {
        this.post.like = false;
        Haptics.notification({ type: NotificationType.Error });
        post = await this.storySvc.unlike(this.post.id);
      } else {
        this.post.like = true;
        Haptics.notification({ type: NotificationType.Success });
        post = await this.storySvc.like(this.post.id);
      }

      this.post = { ...post, youtube: this.post.youtube };
    } catch (error) {
      console.error(`Error al cambiar el estado del "like": ${error}`);
    }
  }

  async switchLikeComment(comment: Story["comments"][0]) {
    if (!this.auth.currentUserValue) {
      this.redirectToLogin();
      return;
    }

    const liked = comment.likes.some(
      (l) => l.id === this.auth.currentUserValue.id
    );

    // Cambia el estado del "like" inmediatamente
    this.post.comments = this.post.comments.map((c) => {
      if (c.id === comment.id) {
        c.like = !liked;
      }
      return c;
    });

    try {
      // Envía la solicitud al servidor en segundo plano
      if (liked) {
        this.post = await this.storySvc.unlikeComment(comment.id);
        this.post.comments = this.post.comments.map((c) => {
          if (c.id === comment.id) {
            c.like = false;
          }
          return c;
        });
      } else {
        this.post = await this.storySvc.likeComment(comment.id);
        this.post.like = true;
        this.post.comments = this.post.comments.map((c) => {
          if (c.id === comment.id) {
            c.like = true;
          }
          return c;
        });
      }

      this.youtubePreview();
    } catch (error) {
      // Si la solicitud falla, revierte el cambio y muestra un mensaje de error
      this.post.comments = this.post.comments.map((c) => {
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

  commentFocus(event?: CustomEvent) {
    event?.stopPropagation();
    this.textarea.getInputElement().then((inputElement) => {
      inputElement.blur();
      setTimeout(() => {
        inputElement.focus();
        const length = inputElement.value.length;
        inputElement.setSelectionRange(length, length);
        if (isPlatform("capacitor")) {
          Keyboard.show();
        }
      }, 100);
    });
  }

  showViewsSheet(event: Event) {
    if (!this.auth.currentUserValue) {
      this.redirectToLogin();
      return;
    }

    event.stopPropagation();
    this.showViews = true;
  }

  closeViewsSheet() {
    this.showViews = false;
  }

  showCommentOptionsSheet(comment: Story["comments"][0], event) {
    if (!this.auth.currentUserValue) {
      return;
    }

    event.preventDefault();
    this.selectedComment = comment;
    this.showCommentOptions = true;
  }

  closeCommentOptionsSheet() {
    this.showCommentOptions = false;
  }

  showOptionsSheet() {
    this.showOptions = true;
  }

  closeOptionsSheet() {
    this.showOptions = false;
  }

  async sendComment(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    const text = this.textarea.value.trim();
    this.textarea.value = "";
    this.post = await this.storySvc.commentStory(
      this.post.id,
      text,
      this.userMentions
    );

    this.userMentions = [];

    this.youtubePreview();
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

  async deleteComment(comment: Story["comments"][0], event: Event) {
    event.preventDefault();
    let undo = false;

    const undoToast = await this.toast.create({
      message: this.i18n.translate("deleting-comment"),
      position: "bottom",
      duration: 5000,
      buttons: [
        {
          text: this.i18n.translate("undo"),
          handler: async () => {
            undo = true;
            this.closeCommentOptionsSheet();
          },
        },
      ],
    });

    undoToast.present();

    setTimeout(async () => {
      if (!undo) {
        try {
          await this.storySvc.deleteComment(comment.id);
          this.post.comments = this.post.comments.filter(
            (c) => c.id !== comment.id
          );

          (
            await this.toast.create({
              message: this.i18n.translate("comment-deleted-successfully"),
              position: "middle",
              duration: 2000,
            })
          ).present();
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
      this.showCommentOptions = false;
    }, 5000);
  }

  async removePost() {
    let undo = false;

    const undoToast = await this.toast.create({
      message: this.i18n.translate("post-will-be-deleted"),
      position: "bottom",
      duration: 5000, // 5 segundos para deshacer
      buttons: [
        {
          text: this.i18n.translate("undo"),
          handler: () => {
            undo = true;
            this.closeOptionsSheet();
          },
        },
      ],
    });

    undoToast.present();

    setTimeout(async () => {
      if (!undo) {
        try {
          await this.storySvc.deleteStory(this.post.id);
          (
            await this.toast.create({
              message: this.i18n.translate("successfully-deleted"),
              position: "middle",
              duration: 2000,
            })
          ).present();
        } catch (e) {
          (
            await this.toast.create({
              message: this.i18n.translate("error-deleting-post"),
              duration: 2000,
              position: "middle",
              color: "danger",
            })
          ).present();
        }
        this.closeOptionsSheet();
        setTimeout(() => {
          this.deletePost.emit(this.post);
        }, 500);
      }
    }, 5000);
  }

  async reportPost() {
    this.closeOptionsSheet();
    const alert = await this.alertCtrl.create({
      header: this.i18n.translate("do-you-want-to-report-story", {
        username: this.post.user.username,
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
                await this.storySvc.report(this.post, data.note);
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

              this.reportPost();
            }
          },
        },
      ],
      cssClass: "round-alert",
    });

    await alert.present();
  }

  async reportComment(comment: Story["comments"][0], event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.closeCommentOptionsSheet();

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

  async blockUser(user: User) {
    try {
      await this.userSvc.block(user);
    } catch (e) {
      // No hacer nada
    }
    this.router.navigate(["/"]);
  }

  async viewCommentLikesSheet(comment: Story["comments"][0], event: Event) {
    if (!this.auth.currentUserValue) {
      return;
    }

    event.preventDefault();
    this.selectedComment = comment;
    this.showCommentLikes = true;
  }

  async closeCommentLikesSheet() {
    this.showCommentLikes = false;
  }

  showPostPage(event: Event) {
    if (!this.auth.currentUserValue) {
      this.redirectToLogin();
      return;
    }

    event.stopPropagation();
    this.router.navigate(["/post", this.post.id]);
  }

  sharePost(event: Event) {
    event.stopPropagation();
    const url = `https://frikiradar.app/post/${this.post.id}`;
    const text =
      this.i18n.translate("check-out-this-post-on-frikiradar") +
      (this.post.text ? ": " + this.post.text : "");
    this.utils.share(url, text);
  }

  async reply(comment: Story["comments"][0]) {
    if (!this.auth.currentUserValue) {
      this.redirectToLogin();
      return;
    }

    if (comment.user.id !== this.auth.currentUserValue.id) {
      this.textarea.value = `@${comment.user.username} `;
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
    this.textarea.value = this.textarea.value.replace(
      this.mention,
      `@${username} `
    );
    this.userMentions = [...this.userMentions, username];
    this.commentFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
  }

  async openUrl(event: any) {
    this.urlSvc.openUrl(event);

    if (
      event.srcElement.href &&
      (event.target.className.includes("mention") ||
        event.target.className.includes("hashtag"))
    ) {
      if (await this.modalController.getTop()) {
        this.modalController.dismiss();
      }
    }

    return false;
  }

  async showPage(slug: string) {
    if (await this.modalController.getTop()) {
      this.modalController.dismiss();
    }
    this.router.navigate(["/page", slug]);
  }

  redirectToLogin() {
    this.nav.navigateRoot(["/login"], {
      queryParams: { returnUrl: this.router.url },
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import {
  ActionSheetController,
  IonSlides,
  IonTextarea,
  ModalController,
  Platform,
  ToastController
} from "@ionic/angular";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

import { Story } from "src/app/models/story";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { UrlService } from "src/app/services/url.service";
import { UserService } from "src/app/services/user.service";
import { StoryService } from "../../services/story.service";
import { CommentLikesModal } from "../comment-likes/comment-likes.modal";
import { StoryModal } from "../story.modal";

@Component({
  selector: "view-stories-modal",
  templateUrl: "./view-stories.modal.html",
  styleUrls: ["./view-stories.modal.scss"]
})
export class ViewStoriesModal implements OnInit {
  @Input() stories: Story[];
  @ViewChild("slides", { static: true })
  public slides: IonSlides;
  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;

  public commentForm: FormGroup;
  get comment() {
    return this.commentForm.get("comment");
  }

  public story: Story;
  private delay = 5000;
  public pane: CupertinoPane;
  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;

  paneSettings: CupertinoSettings = {
    backdrop: true,
    bottomClose: true,
    buttonDestroy: false,
    showDraggable: false,
    handleKeyboard: false,
    initialBreak: "top",
    onBackdropTap: () => {
      this.pane.destroy({ animate: true });
      this.slides.startAutoplay();
    }
  };

  slideOpts = {
    speed: 500,
    autoplay: {
      delay: this.delay
    }
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
    private sheet: ActionSheetController,
    private router: Router,
    public keyboard: Keyboard,
    public auth: AuthService,
    private urlSvc: UrlService
  ) {
    this.commentForm = formBuilder.group({
      comment: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    this.story = this.stories[0];
    this.setLikeStory();
    this.viewStory(this.stories[0]);
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.close();
      this.router.navigate(["/profile", id]);
    }
  }

  async slide() {
    this.comment.setValue("");
    this.slides.getActiveIndex().then(index => {
      console.log(index);
      this.story = this.stories[index];
      this.setLikeStory();
      this.viewStory(this.stories[index]);
    });
  }

  async tap(event: PointerEvent) {
    if (event.pageX > screen.width / 2) {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  commentFocus() {
    this.slides.stopAutoplay();
    this.viewComments();
    setTimeout(() => {
      this.textarea.setFocus();
      if (this.platform.is("cordova")) {
        this.keyboard.show();
      }
    }, 500);
  }

  setLikeStory() {
    this.story.viewStories.map(
      v =>
        (v.user.like = this.story.likeStories.some(
          l => l.user.id === v.user.id
        ))
    );
    this.story.like = !!this.story.likeStories.some(
      l => l.user.id === this.auth.currentUserValue.id
    );

    this.story.comments.map(c => {
      if (c.likes.some(l => l.id === this.auth.currentUserValue.id)) {
        c.like = true;
      }
    });
  }

  async switchLikeStory() {
    this.slides.stopAutoplay();
    if (
      this.story.likeStories.some(
        l => l.user.id === this.auth.currentUserValue.id
      )
    ) {
      this.story.like = false;
      await this.storySvc.unlike(this.story.id);
    } else {
      this.story.like = true;
      await this.storySvc.like(this.story.id);
    }
    this.slides.startAutoplay();
  }

  async switchLikeComment(comment: Story["comments"][0]) {
    this.slides.stopAutoplay();
    if (comment.likes.some(l => l.id === this.auth.currentUserValue.id)) {
      this.story.comments.map(c => {
        if (c.id === comment.id) {
          c.like = false;
        }
      });
      this.story = await this.storySvc.unlikeComment(comment.id);
    } else {
      this.story.comments.map(c => {
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
      !story.viewStories.some(v => v.user.id === this.auth.currentUserValue.id)
    ) {
      this.storySvc.viewStory(story.id);
    }
  }

  async sendComment(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.slides.stopAutoplay();
    const text = this.comment.value.trim();
    this.comment.setValue("");
    this.story = await this.storySvc.commentStory(
      this.story.id,
      text,
      this.userMentions
    );
    this.setLikeStory();
  }

  async viewViews() {
    this.slides.stopAutoplay();
    this.pane = new CupertinoPane(".views-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  async viewComments() {
    this.slides.stopAutoplay();
    this.pane = new CupertinoPane(".comments-pane", this.paneSettings);
    this.pane.present({ animate: true });
  }

  async showOptions(story: Story) {
    this.slides.stopAutoplay();
    const actionSheet = await this.sheet.create({
      buttons: [
        {
          text: "Añadir nueva historia",
          icon: "add",
          handler: async () => {
            const modal = await this.modalCreate.create({
              component: StoryModal,
              keyboardClose: true,
              showBackdrop: true
            });

            await modal.present();
            await modal.onDidDismiss();
          }
        },
        {
          text: "Eliminar historia",
          icon: "trash-outline",
          handler: async () => {
            try {
              await this.storySvc.deleteStory(story.id);
              (
                await this.toast.create({
                  message: "Historia eliminada correctamente",
                  position: "middle",
                  duration: 2000
                })
              ).present();
              this.close();
            } catch (e) {
              (
                await this.toast.create({
                  message: "Error al eliminar la historia",
                  duration: 2000,
                  position: "middle",
                  color: "danger"
                })
              ).present();
            }
          }
        }
      ]
    });
    await actionSheet.present();
    await actionSheet.onDidDismiss();
    this.slides.startAutoplay();
  }

  async viewCommentLikes(likes: Story["comments"][0]["likes"]) {
    const modal = await this.likeModal.create({
      component: CommentLikesModal,
      keyboardClose: true,
      showBackdrop: true,
      componentProps: { likes },
      cssClass: "medium-modal"
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    if (data?.data?.showProfile) {
      this.close();
    }
  }

  async reply(comment: Story["comments"][0]) {
    if (comment.user.id !== this.auth.currentUserValue.id) {
      this.comment.setValue(`@${comment.user.username}`);
      this.setMention(comment.user.username);
    }
    this.textarea.setFocus();
    if (this.platform.is("cordova")) {
      this.keyboard.show();
    }
  }

  setMention(username: string) {
    this.usernames = [];
    this.inputAt = false;
    this.comment.setValue(
      this.comment.value.replace(this.mention, `@${username}`)
    );
    this.userMentions = [...this.userMentions, username];
    this.textarea.setFocus();
    if (this.platform.is("cordova")) {
      this.keyboard.show();
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
        duration: 2000
      })
    ).present();
    try {
      this.story = await this.storySvc.deleteComment(comment.id);
      this.setLikeStory();
      (
        await this.toast.create({
          message: "Comentario eliminado correctamente",
          position: "middle",
          duration: 2000
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: "Error al eliminar el comentario",
          duration: 2000,
          position: "middle",
          color: "danger"
        })
      ).present();
    }
  }

  async openUrl(event: any) {
    if (event.srcElement.href && event.target.className.includes("linkified")) {
      this.urlSvc.openUrl(event.srcElement.href);
    }

    if (event.srcElement.href && event.target.className.includes("mention")) {
      event.preventDefault();
      this.showProfile(event.target.innerHTML.replace("@", ""));
    }

    return false;
  }

  close() {
    this.modal.dismiss();
  }
}

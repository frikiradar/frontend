import { Injectable } from "@angular/core";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { ModalController } from "@ionic/angular";
import { ViewPostModal } from "../post/view-post/view-post.modal";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService,
    private modalController: ModalController
  ) {}

  async getStory(id: Story["id"]) {
    const story = (await this.rest.get(`story/${id}`)) as Story;
    return this.setLikes(story);
  }

  async getUserStories(id: User["id"]) {
    const stories = (await this.rest.get(`user-stories/${id}`)) as Story[];

    stories.map((p) => {
      p = this.setLikes(p);
    });

    return stories;
  }

  async getStoriesSlug(slug: string) {
    const stories = (await this.rest.get(`stories-slug/${slug}`)) as Story[];

    stories.map((p) => {
      p = this.setLikes(p);
    });

    return stories;
  }

  async getStories() {
    const stories = (await this.rest.get("stories")) as Story[];

    stories.map((p) => {
      p = this.setLikes(p);
    });

    return stories;
  }

  async getPosts(page = 1) {
    const posts = (await this.rest.get(`posts?page=${page}`)) as Story[];

    posts.map((p) => {
      p = this.setLikes(p);
    });

    return posts;
  }

  async getPostsSlug(slug: string, page = 1) {
    const posts = (await this.rest.get(
      `posts-slug/${slug}?page=${page}`
    )) as Story[];

    posts.map((p) => {
      p = this.setLikes(p);
    });

    return posts;
  }

  async getUserPosts(id: User["id"], page = 1) {
    const posts = (await this.rest.get(
      `user-posts/${id}?page=${page}`
    )) as Story[];

    posts.map((p) => {
      p = this.setLikes(p);
    });

    return posts;
  }

  orderStories(stories: Story[]) {
    stories.sort((a, b) => {
      return (
        new Date(a.time_creation).getTime() -
        new Date(b.time_creation).getTime()
      );
    });
    return stories;
  }

  setLikes(story: Story) {
    story.viewStories.map(
      (v) =>
        (v.user.like = story.likeStories.some((l) => l.user.id === v.user.id))
    );

    story.comments.map((c) => {
      if (c.likes.some((l) => l.id === this.auth.currentUserValue.id)) {
        c.like = true;
      }
    });

    return story;
  }

  groupStories(stories: Story[]) {
    const groupedStories = [];
    stories = stories?.reverse();
    stories?.forEach((s) => {
      if (!groupedStories.some((g) => g.user.id === s.user.id)) {
        const filterStories = stories.filter((sf) => sf.user.id === s.user.id);
        groupedStories.push(filterStories[0]);
      }
    });

    return [
      ...groupedStories.filter(
        (s) => s.user.id === this.auth.currentUserValue.id
      ),
      ...groupedStories.filter(
        (s) => s.user.id !== this.auth.currentUserValue.id
      ),
    ];
  }

  async sendStory(
    image?: Blob,
    text?: string,
    color?: string,
    slug?: string,
    type: "story" | "post" = "story"
  ) {
    const formData: FormData = new FormData();
    if (image) {
      formData.set("image", image);
    }

    if (text) {
      formData.set("text", text);
    }

    if (color) {
      formData.set("color", color);
    }

    if (slug) {
      formData.set("slug", slug);
    }

    formData.set("type", type);
    return (await this.uploadSvc.upload("story-upload", formData)) as Story;
  }

  viewStory(id: Story["id"]) {
    this.rest.put("view-story", { story: id });
  }

  deleteStory(id: Story["id"]) {
    return this.rest.delete(`delete-story/${id}`);
  }

  async report(story: Story, note: string) {
    return await this.rest.put("report-story", { story, note });
  }

  async like(id: Story["id"]) {
    return (await this.rest.put("like-story", { story: id })) as Story;
  }

  async unlike(id: Story["id"]) {
    return (await this.rest.delete(`like-story/${id}`)) as Story;
  }

  async commentStory(
    id: Story["id"],
    text: Story["text"],
    mentions?: User["username"][]
  ) {
    return (await this.rest.put("comment-story", {
      story: id,
      text,
      mentions,
    })) as Story;
  }

  likeComment(id: Story["comments"][0]["id"]) {
    return this.rest.put("like-comment", { comment: id }) as Promise<Story>;
  }

  unlikeComment(id: Story["comments"][0]["id"]) {
    return this.rest.delete(`like-comment/${id}`) as Promise<Story>;
  }

  deleteComment(id: Story["id"]) {
    return this.rest.delete(`delete-comment/${id}`);
  }

  reportComment(comment: Story["comments"][0]["id"], note: string) {
    return this.rest.put("report-comment", { comment, note });
  }

  async showStoriesModal(stories: Story[]) {
    const modal = await this.modalController.create({
      component: ViewStoriesModal,
      componentProps: { stories },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  async showPostModal(post: Story) {
    const modal = await this.modalController.create({
      component: ViewPostModal,
      componentProps: { post },
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
  }
}

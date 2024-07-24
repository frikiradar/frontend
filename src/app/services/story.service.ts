import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { firstValueFrom } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService,
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  async getStory(id: Story["id"]) {
    const story = (await this.rest.get(`story/${id}`)) as Story;
    return this.setLikes(story);
  }

  async getPublicStory(id: Story["id"]) {
    try {
      return (await firstValueFrom(
        this.http.get(`${environment.root}api/public-story/${id}`, httpOptions)
      )) as Story;
    } catch (e) {
      throw new Error("No se puede obtener la historia");
    }
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
    if (!stories) {
      return [];
    }

    // Group stories by user
    const groupedStories = stories.reduce((acc, story) => {
      if (!acc[story.user.id]) {
        acc[story.user.id] = [];
      }
      acc[story.user.id].push(story);
      return acc;
    }, {});

    // Select the most recent story per user (highest ID)
    const mostRecentStoryPerUser = Object.values(groupedStories).map(
      (stories) => {
        return stories.reduce((mostRecent: Story, current: Story) =>
          current.id > mostRecent.id ? current : mostRecent
        );
      }
    );

    // Separate the stories of the current user
    const currentUserStories = mostRecentStoryPerUser.filter(
      (s) => s.user.id === this.auth.currentUserValue.id
    );

    // Stories of other users, ordered by story ID
    const otherUsersStories = mostRecentStoryPerUser
      .filter((s) => s.user.id !== this.auth.currentUserValue.id)
      .sort((a, b) => b.id - a.id);

    // Combine the lists, with the current user's stories first
    const orderedStories = [...currentUserStories, ...otherUsersStories];

    return orderedStories;
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
    const story = (await this.rest.put("like-story", { story: id })) as Story;
    return this.setLikes(story);
  }

  async unlike(id: Story["id"]) {
    const story = (await this.rest.delete(`like-story/${id}`)) as Story;
    return this.setLikes(story);
  }

  async commentStory(
    id: Story["id"],
    text: Story["text"],
    mentions?: User["username"][]
  ) {
    const story = (await this.rest.put("comment-story", {
      story: id,
      text,
      mentions,
    })) as Story;

    return this.setLikes(story);
  }

  async likeComment(id: Story["comments"][0]["id"]) {
    const story = (await this.rest.put("like-comment", {
      comment: id,
    })) as Story;
    return this.setLikes(story);
  }

  async unlikeComment(id: Story["comments"][0]["id"]) {
    const story = (await this.rest.delete(`like-comment/${id}`)) as Story;
    return this.setLikes(story);
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
}

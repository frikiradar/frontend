import { Injectable } from "@angular/core";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService
  ) {}

  async getStory(id: Story["id"]) {
    return (await this.rest.get(`story/${id}`)) as Story;
  }

  async getUserStories(id: User["id"]) {
    const stories = (await this.rest.get(`user-stories/${id}`)) as Story[];
    stories.map((s) => {
      if (
        s.viewStories.some(
          (v) => v.user.id === this.auth.currentUserValue.id
        ) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
  }

  async getStories() {
    const stories = (await this.rest.get("stories")) as Story[];
    stories.map((s) => {
      if (
        s.viewStories.some(
          (v) => v.user.id === this.auth.currentUserValue.id
        ) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
  }

  async getStoriesSlug(slug: string) {
    const stories = (await this.rest.get(`stories-slug/${slug}`)) as Story[];
    stories.map((s) => {
      if (
        s.viewStories.some(
          (v) => v.user.id === this.auth.currentUserValue.id
        ) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
  }

  async getAllStories() {
    const stories = (await this.rest.get("all-stories")) as Story[];
    stories.map((s) => {
      if (
        s.viewStories.some(
          (v) => v.user.id === this.auth.currentUserValue.id
        ) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
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

  groupStories(stories: Story[]) {
    const groupedStories = [];
    stories = stories.reverse();
    stories.forEach((s) => {
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

  async sendStory(image: Blob, text: string, mentions?: Story["mentions"]) {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("text", text);
    formData.set("mentions", JSON.stringify(mentions));
    return (await this.uploadSvc.upload("story-upload", formData)) as Story;
  }

  viewStory(id: Story["id"]) {
    this.rest.put("view-story", { story: id });
  }

  deleteStory(id: Story["id"]) {
    return this.rest.delete(`delete-story/${id}`);
  }

  like(id: Story["id"]) {
    return this.rest.put("like-story", { story: id }) as Promise<Story>;
  }

  unlike(id: Story["id"]) {
    return this.rest.delete(`like-story/${id}`) as Promise<Story>;
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
}

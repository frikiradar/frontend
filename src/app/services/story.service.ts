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
      s = this.setLikesStory(s);
    });

    return stories;
  }

  async getStories() {
    const stories = (await this.rest.get("stories")) as Story[];
    stories.map((s) => {
      s = this.setLikesStory(s);
    });

    return stories;
  }

  async getStoriesSlug(slug: string) {
    const stories = (await this.rest.get(`stories-slug/${slug}`)) as Story[];
    stories.map((s) => {
      s = this.setLikesStory(s);
    });

    return stories;
  }

  async getAllStories() {
    const stories = (await this.rest.get("all-stories")) as Story[];
    stories.map((s) => {
      s = this.setLikesStory(s);
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

  async report(story: Story, note: string) {
    return await this.rest.put("report-story", { story, note });
  }

  async like(id: Story["id"]) {
    const story = (await this.rest.put("like-story", { story: id })) as Story;
    return this.setLikesStory(story);
  }

  async unlike(id: Story["id"]) {
    const story = (await this.rest.delete(`like-story/${id}`)) as Story;
    return this.setLikesStory(story);
  }

  setLikesStory(story: Story) {
    story.viewed = story.viewStories.some(
      (s) => s.user.id === this.auth.currentUserValue.id
    );
    story.viewStories.map(
      (v) =>
        (v.user.like = story.likeStories.some((l) => l.user.id === v.user.id))
    );
    story.like = story.likeStories.some(
      (l) => l.user.id === this.auth.currentUserValue.id
    );

    story.comments.map((c) => {
      if (c.likes.some((l) => l.id === this.auth.currentUserValue.id)) {
        c.like = true;
      }
    });

    return story;
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
}

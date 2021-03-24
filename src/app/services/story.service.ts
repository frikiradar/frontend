import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { Story } from "../models/story";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class StoryService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService,
    private modal: ModalController
  ) {}

  async getStory(id: Story["id"]) {
    return (await this.rest.get(`story/${id}`).toPromise()) as Story;
  }

  async getUserStories(id: User["id"]) {
    const stories = (await this.rest
      .get(`user-stories/${id}`)
      .toPromise()) as Story[];
    stories.map(s => {
      if (
        s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
  }

  async getStories() {
    const stories = (await this.rest.get("stories").toPromise()) as Story[];
    stories.map(s => {
      if (
        s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
        s.user.id === this.auth.currentUserValue.id
      ) {
        s.viewed = true;
      }
    });

    return stories;
  }

  async sendStory(image: File, text: string) {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("text", text);
    return (await this.uploadSvc.upload("story-upload", formData)) as Story;
  }

  viewStory(id: Story["id"]) {
    this.rest.put("view-story", { story: id }).toPromise();
  }

  deleteStory(id: Story["id"]) {
    return this.rest.delete(`delete-story/${id}`).toPromise();
  }

  like(id: Story["id"]) {
    return this.rest.put("like-story", { story: id }).toPromise() as Promise<
      Story
    >;
  }

  unlike(id: Story["id"]) {
    return this.rest.delete(`like-story/${id}`).toPromise() as Promise<Story>;
  }

  async commentStory(
    id: Story["id"],
    text: Story["text"],
    mentions?: User["username"][]
  ) {
    return (await this.rest
      .put("comment-story", { story: id, text, mentions })
      .toPromise()) as Story;
  }

  likeComment(id: Story["comments"][0]["id"]) {
    return this.rest
      .put("like-comment", { comment: id })
      .toPromise() as Promise<Story>;
  }

  unlikeComment(id: Story["comments"][0]["id"]) {
    return this.rest.delete(`like-comment/${id}`).toPromise() as Promise<Story>;
  }

  deleteComment(id: Story["id"]) {
    return this.rest.delete(`delete-comment/${id}`).toPromise();
  }
}

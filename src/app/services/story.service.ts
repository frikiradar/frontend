import { Injectable } from "@angular/core";

import { Story } from "../models/story";
import { User } from "../models/user";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class StoryService {
  constructor(private rest: RestService, private uploadSvc: UploadService) {}

  async getStory(id: Story["id"]) {
    return (await this.rest.get(`story/${id}`).toPromise()) as Story;
  }

  async getStories() {
    return (await this.rest.get("stories").toPromise()) as Story[];
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

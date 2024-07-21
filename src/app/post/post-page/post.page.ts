import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Story } from "src/app/models/story";
import { NavService } from "src/app/services/navigation.service";
import { StoryService } from "src/app/services/story.service";

@Component({
  selector: "post-page",
  templateUrl: "./post.page.html",
  styleUrls: ["./post.page.scss"],
})
export class PostPage {
  @Input() id: Story["id"];

  public post: Story;

  constructor(
    private storySvc: StoryService,
    private nav: NavService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    let id: number = undefined;
    if (param) {
      this.id = +param;
    }

    this.post = await this.storySvc.getStory(this.id);
  }

  async removePost(event: Event) {
    try {
      await this.storySvc.deleteStory(this.post.id);
      this.close();
    } catch (e) {
      console.error(e);
    }
  }

  close() {
    if (this.nav.canGoBack()) {
      this.nav.back();
    } else {
      this.nav.navigateRoot("/");
    }
  }
}

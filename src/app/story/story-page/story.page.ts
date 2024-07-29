import { Component, Input, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonTextarea, ModalController } from "@ionic/angular";
import { Story } from "src/app/models/story";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { NavService } from "src/app/services/navigation.service";
import { StoryService } from "src/app/services/story.service";
import { UserService } from "src/app/services/user.service";
import { StoryModal } from "../story-modal/story.modal";

@Component({
  selector: "story-page",
  templateUrl: "./story.page.html",
  styleUrls: ["./story.page.scss"],
})
export class StoryPage {
  @Input() id: Story["id"];

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;

  public story: Story;
  public showComments = false;
  public showOptions = false;
  public loading = true;

  constructor(
    private storySvc: StoryService,
    private nav: NavService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private auth: AuthService,
    public userSvc: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      this.id = +param;
    }

    try {
      if (this.auth.currentUserValue) {
        this.story = await this.storySvc.getStory(this.id);
      } else {
        this.story = await this.storySvc.getPublicStory(this.id);
      }
    } catch (e) {
      console.error(e);
    }

    this.loading = false;
  }

  async showProfile(id: User["id"]) {
    if (id !== 1) {
      this.router.navigate(["/profile", id]);
    }
  }

  async addStory() {
    const modal = await this.modalCtrl.create({
      component: StoryModal,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: "vertical-modal",
    });

    await modal.present();
    await modal.onDidDismiss();
  }

  viewOptions() {
    this.showOptions = true;
  }

  commentFocus(event?: CustomEvent) {
    event?.stopPropagation();
    if (event) {
      const textarea = event.target as unknown as IonTextarea;
      textarea.getInputElement().then((a) => a.blur());
    }
    this.showComments = true;
  }

  async removeStory(event: Event) {
    try {
      await this.storySvc.deleteStory(this.story.id);
      this.close();
    } catch (e) {
      console.error(e);
    }
  }

  async close() {
    if (await this.modalCtrl.getTop()) {
      this.modalCtrl.dismiss();
    } else {
      if (this.nav.canGoBack()) {
        this.nav.back();
      } else {
        this.nav.navigateRoot("/");
      }
    }
  }
}

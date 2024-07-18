import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Story } from "src/app/models/story";

@Component({
  selector: "view-post-modal",
  templateUrl: "./view-post.modal.html",
  styleUrls: ["./view-post.modal.scss"],
})
export class ViewPostModal {
  @Input() post: Story;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  removePost(event) {
    console.log("removePost", event);
  }

  close() {
    this.modalController.dismiss();
  }
}

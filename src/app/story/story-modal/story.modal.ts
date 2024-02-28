import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  ModalController,
  ToastController,
  isPlatform,
} from "@ionic/angular";

import { User } from "../../models/user";
import { StoryService } from "../../services/story.service";
import { UserService } from "../../services/user.service";
import { UtilsService } from "../../services/utils.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "story-modal",
  templateUrl: "./story.modal.html",
  styleUrls: ["./story.modal.scss"],
})
export class StoryModal implements OnInit {
  @Input() hash: string;
  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;

  public storyForm: UntypedFormGroup;
  get text() {
    return this.storyForm.get("text");
  }
  public image: SafeUrl;
  public imageFile: Blob;
  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;
  public showBackdrop = false;

  constructor(
    public modalController: ModalController,
    public formBuilder: UntypedFormBuilder,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private storySvc: StoryService,
    private toast: ToastController,
    private userSvc: UserService,
    private i18n: I18nService
  ) {
    this.storyForm = formBuilder.group({
      text: new UntypedFormControl(),
    });
  }

  async ngOnInit() {
    if (this.hash) {
      this.text.setValue(this.hash + " ");
    }
  }

  async selectPicture(type: "camera" | "gallery") {
    if (isPlatform("android") && isPlatform("capacitor")) {
      /*await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);*/
    }

    if (type == "camera") {
      if (isPlatform("capacitor")) {
        const image = (await this.utils.takePicture(
          "camera",
          true,
          "default",
          true,
          false
        )) as string;
        this.addPicture(image);
      } else {
        const image = await this.utils.webcamImage("avatar", true, false);
        if (!image || typeof image === "boolean") {
          return false;
        }
        this.addPicture(image);
      }
    } else if (type == "gallery") {
      if (isPlatform("capacitor")) {
        const image = (await this.utils.takePicture(
          "gallery",
          true,
          "default",
          true,
          false
        )) as string;
        this.addPicture(image);
      } else {
        this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
      }
    }
  }

  async selectText() {
    this.image = "";
  }

  async addPicture(image: string | Blob) {
    if (typeof image !== "string") {
      image = await this.utils.fileToBase64(image);
    }
    this.image = this.sanitizer.bypassSecurityTrustUrl(image);
    this.imageFile = await this.utils.urltoBlob(image);
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event, null, false);
      if (typeof src == "string") {
        const blob = await this.utils.urltoBlob(src);
        this.addPicture(blob);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async publish() {
    try {
      this.showBackdrop = true;
      (
        await this.toast.create({
          message: this.i18n.translate("publishing"),
          position: "middle",
        })
      ).present();
      let text = "";
      if (this.text.value) {
        text = this.text.value.trim();
      }
      await this.storySvc.sendStory(this.imageFile, text, this.userMentions);
      this.toast.dismiss();
      (
        await this.toast.create({
          message: this.i18n.translate("story-published-successfully"),
          duration: 2000,
          position: "middle",
        })
      ).present();
      this.showBackdrop = false;
      this.modalController.dismiss();
    } catch (e) {
      this.showBackdrop = false;
      this.toast.dismiss();
      (
        await this.toast.create({
          message: this.i18n.translate("error-publishing-your-story"),
          duration: 2000,
          position: "middle",
          color: "danger",
        })
      ).present();
    }
  }

  setMention(username: string) {
    this.usernames = [];
    this.inputAt = false;
    this.text.setValue(this.text.value.replace(this.mention, `@${username} `));
    this.userMentions = [...this.userMentions, username];
    this.textarea.setFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
    }
  }

  async setWriting(text: string) {
    if (this.text.value) {
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

        if (this.mention?.length > 3 && this.text.value.length > 3) {
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

  cancel() {
    this.modalController.dismiss();
  }
}

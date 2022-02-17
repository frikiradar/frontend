import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  ModalController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { User } from "../../models/user";
import { StoryService } from "../../services/story.service";
import { UserService } from "../../services/user.service";
import { UtilsService } from "../../services/utils.service";

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

  public storyForm: FormGroup;
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
    public modal: ModalController,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private storySvc: StoryService,
    private toast: ToastController,
    private userSvc: UserService
  ) {
    this.storyForm = formBuilder.group({
      text: new FormControl(),
    });
  }

  async ngOnInit() {
    if (this.hash) {
      this.text.setValue(this.hash + " ");
    }
  }

  async selectPicture(type: "camera" | "gallery") {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      /*await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);*/
    }

    if (type == "camera") {
      if (this.platform.is("cordova")) {
        const image = (await this.utils.takePicture(
          "camera",
          true,
          "default",
          false,
          false
        )) as File;
        this.addPicture(image);
      } else {
        const image = await this.utils.webcamImage("avatar", true, false);
        if (!image || typeof image === "boolean") {
          return false;
        }
        this.addPicture(image);
      }
    } else if (type == "gallery") {
      if (this.platform.is("cordova")) {
        const image = await this.utils.takePicture(
          "gallery",
          true,
          "default",
          false,
          false
        );
        if (!image || typeof image == "string") {
          return false;
        }
        this.addPicture(image);
      } else {
        this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
      }
    }
  }

  async selectText() {
    this.image = "";
  }

  async addPicture(blob: Blob) {
    if (typeof blob !== "string") {
      const image = await this.utils.fileToBase64(blob);
      this.image = this.sanitizer.bypassSecurityTrustUrl(image);
    }
    this.imageFile = blob;
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
          message: "Publicando...",
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
          message: "Historia publicada correctamente",
          duration: 2000,
          position: "middle",
        })
      ).present();
      this.showBackdrop = false;
      this.modal.dismiss();
    } catch (e) {
      this.showBackdrop = false;
      this.toast.dismiss();
      (
        await this.toast.create({
          message: "Error al publicar tu historia",
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
    if (this.platform.is("capacitor")) {
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
    this.modal.dismiss();
  }
}

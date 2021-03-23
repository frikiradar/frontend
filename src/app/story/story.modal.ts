import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import {
  IonTextarea,
  ModalController,
  Platform,
  ToastController
} from "@ionic/angular";

import { StoryService } from "../services/story.service";
import { UtilsService } from "../services/utils.service";

@Component({
  selector: "story-modal",
  templateUrl: "./story.modal.html",
  styleUrls: ["./story.modal.scss"]
})
export class StoryModal implements OnInit {
  @ViewChild("imageInput", { static: true })
  imageInput: ElementRef;
  @ViewChild("textarea", { static: true })
  textarea: IonTextarea;

  public storyForm: FormGroup;
  get text() {
    return this.storyForm.get("text");
  }
  public image: SafeUrl;
  public imageFile: File;

  constructor(
    public modal: ModalController,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private androidPermissions: AndroidPermissions,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private storySvc: StoryService,
    private toast: ToastController
  ) {
    this.storyForm = formBuilder.group({
      text: new FormControl()
    });
  }

  async ngOnInit() {}

  async selectPicture(type: "camera" | "gallery") {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);
    }

    if (type == "camera") {
      if (this.platform.is("cordova")) {
        const image = (await this.utils.takePicture(
          "camera",
          true,
          "default",
          false
        )) as File;
        this.addPicture(image);
      } else {
        const image = await this.utils.webcamImage("avatar");
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

  async addPicture(imageFile: File) {
    if (typeof imageFile !== "string") {
      const image = await this.utils.fileToBase64(imageFile);
      this.image = this.sanitizer.bypassSecurityTrustUrl(image);
    }
    this.imageFile = imageFile;
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event);
      if (typeof src == "string") {
        const file = await this.utils.urlToFile(src);
        this.addPicture(file);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async publish() {
    try {
      (
        await this.toast.create({
          message: "Publicando...",
          position: "middle"
        })
      ).present();
      let text = "";
      if (this.text.value) {
        text = this.text.value.trim();
      }
      await this.storySvc.sendStory(this.imageFile, text);
      this.toast.dismiss();
      (
        await this.toast.create({
          message: "Historia publicada correctamente",
          duration: 2000,
          position: "middle"
        })
      ).present();
      this.modal.dismiss();
    } catch (e) {
      this.toast.dismiss();
      (
        await this.toast.create({
          message: "Error al publicar tu historia",
          duration: 2000,
          position: "middle",
          color: "danger"
        })
      ).present();
    }
  }

  cancel() {
    this.modal.dismiss();
  }
}

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  ModalController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
declare var EmojiMart: any; // Esto declara EmojiMart para TypeScript
import { Filesystem } from "@capacitor/filesystem";

import { StoryService } from "../../services/story.service";
import { UtilsService } from "../../services/utils.service";
import { I18nService } from "src/app/services/i18n.service";
import { Config, ConfigService } from "src/app/services/config.service";
import runes from "runes";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "story-modal",
    templateUrl: "./story.modal.html",
    styleUrls: ["./story.modal.scss"],
    standalone: false
})
export class StoryModal implements OnInit {
  @Input() slug: string;
  @Input() imageUrl: string;
  @Input() public text: string;
  @Input() public intent = false;

  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;

  @ViewChild("imageTextarea", { static: false })
  imageTextarea: IonTextarea;

  @ViewChild("storyTextarea", { static: false })
  storyTextarea: IonTextarea;

  public image: SafeUrl = undefined;
  public imageFile: Blob;
  public showBackdrop = false;
  private backgroundColors = [
    "#FF3380",
    "#8E24AA",
    "#00838F",
    "#679267",
    "#F6A700",
    "#FF8333",
    "#424242",
    "#CFD8DC",
  ];
  public backgroundColor = this.backgroundColors[0];
  public textColor: "light" | "dark" = "light";
  public emojis = false;
  public user: User;
  public youtube: SafeUrl;

  constructor(
    public modalController: ModalController,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private storySvc: StoryService,
    private toast: ToastController,
    private i18n: I18nService,
    private config: ConfigService,
    private auth: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;

    setTimeout(() => {
      this.storyTextarea.setFocus();
    }, 500);
  }

  async ngAfterViewInit() {
    if (this.text) {
      setTimeout(() => {
        this.storyTextarea.value = this.text;
      }, 500);

      this.youtube = this.utils.extractYoutubeLink(this.text);
    }

    if (this.imageUrl) {
      let resultUrl = decodeURIComponent(this.imageUrl);
      const base64 = await Filesystem.readFile({ path: resultUrl });
      if (typeof base64.data == "string") {
        const blob = this.utils.base64toBlob(base64.data);
        await this.addPicture(blob);
      }
    }
  }

  changeColor() {
    // encontramos el index de la actual
    const index = this.backgroundColors.indexOf(this.backgroundColor);
    // si es el último, volvemos al primero
    if (index == this.backgroundColors.length - 1) {
      this.backgroundColor = this.backgroundColors[0];
    } else {
      // si no, avanzamos al siguiente
      this.backgroundColor = this.backgroundColors[index + 1];
    }

    // cambiamos el color del texto
    if (["#CFD8DC"].includes(this.backgroundColor)) {
      this.textColor = "dark";
    } else {
      this.textColor = "light";
    }
  }

  inputTextarea(event) {
    const maxLines = 10;
    let lines = (event.target.value.match(/\n/g) || []).length + 1;

    if (lines > maxLines) {
      event.target.value = event.target.value.substring(
        0,
        event.target.value.lastIndexOf("\n")
      );
    }

    this.text = event.target.value;

    if (!this.image) {
      this.youtube = this.utils.extractYoutubeLink(this.text);
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

    this.cd.detectChanges();

    this.backgroundColor = "#000000";

    setTimeout(() => {
      this.imageTextarea.setFocus();
    }, 500);

    this.youtube = undefined;

    this.imageTextarea.value = this.text;
  }

  removePicture() {
    this.image = undefined;
    this.imageFile = undefined;
    this.imageInput.nativeElement.value = "";
    this.backgroundColor = this.backgroundColors[0];

    setTimeout(() => {
      this.storyTextarea.setFocus();
    }, 500);

    this.storyTextarea.value = this.text;
    this.youtube = this.utils.extractYoutubeLink(this.text);
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event, null, false);
      if (typeof src == "string") {
        const blob = await this.utils.urltoBlob(src);
        this.addPicture(blob);
      } else {
        this.removePicture();
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
      if (this.imageTextarea?.value) {
        text = this.imageTextarea.value.trim();
      } else if (this.storyTextarea?.value) {
        text = this.storyTextarea.value.trim();
      }
      await this.storySvc.sendStory(
        this.imageFile,
        text,
        this.backgroundColors.includes(this.backgroundColor)
          ? this.backgroundColor
          : undefined,
        this.slug
      );
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

  async emojiPicker() {
    if (typeof EmojiMart !== "undefined") {
      if (!this.emojis) {
        this.emojis = true;
        if (isPlatform("capacitor")) {
          await Keyboard.hide();
        }
        const language = (await this.config.get(
          "language"
        )) as Config["language"];

        const picker = new EmojiMart.Picker({
          onEmojiSelect: (emoji) => {
            // console.log(emoji);
            this.addEmoji(emoji);
          },
          theme: "dark",
          locale: language === "es" ? "es" : "en",
          set: "native",
          dynamicWidth: true,
        });

        const container = document.getElementById("emoji-picker-container");
        if (container) {
          container.appendChild(picker);
          picker.style.width = "100%";
        }
      } else {
        this.closeEmojis();
      }
    }
  }

  addEmoji(emoji: any) {
    if (this.image) {
      this.imageTextarea.value =
        (this.imageTextarea.value ?? "") + emoji.native;
      this.text = this.imageTextarea.value;
    } else {
      this.storyTextarea.value =
        (this.storyTextarea.value ?? "") + emoji.native;
      this.text = this.storyTextarea.value;
    }
  }

  deleteText() {
    const textRunes = runes(this.imageTextarea.value);
    textRunes.pop();
    this.imageTextarea.value = textRunes.join("");
  }

  closeEmojis() {
    if (typeof EmojiMart !== undefined && this.emojis) {
      this.emojis = false;
      if (isPlatform("capacitor")) {
        Keyboard.show();
      }
      const container = document.getElementById("emoji-picker-container");
      if (container) {
        container.innerHTML = "";
      }

      if (this.image) {
        this.imageTextarea.setFocus();
      } else {
        this.storyTextarea.setFocus();
      }
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
}

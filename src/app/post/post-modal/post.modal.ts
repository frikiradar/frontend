import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Keyboard } from "@capacitor/keyboard";
import {
  IonTextarea,
  isPlatform,
  ModalController,
  ToastController,
} from "@ionic/angular";
import runes from "runes";
import { Filesystem } from "@capacitor/filesystem";

import { Page } from "src/app/models/page";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { Config, ConfigService } from "src/app/services/config.service";
import { I18nService } from "src/app/services/i18n.service";
import { PageService } from "src/app/services/page.service";
import { StoryService } from "src/app/services/story.service";
import { UtilsService } from "src/app/services/utils.service";
declare var EmojiMart: any; // Esto declara EmojiMart para TypeScript

@Component({
  selector: "post-modal",
  templateUrl: "./post.modal.html",
  styleUrls: ["./post.modal.scss"],
})
export class PostModal {
  @Input() public slug: string;
  @Input() imageUrl: string;
  @Input() public text: string;
  @Input() public intent = false;

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;
  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;

  public pages: Page[];
  public otherPages: Page[];
  private notFilteredPages: Page[];
  private notFilteredOtherPages: Page[];

  public image: SafeUrl = undefined;
  public imageFile: Blob;
  public showBackdrop = false;
  public emojis = false;
  public user: User;
  public page = 1;
  private query: string;
  public youtube: SafeUrl;

  constructor(
    private modalController: ModalController,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private toast: ToastController,
    private i18n: I18nService,
    private storySvc: StoryService,
    private config: ConfigService,
    private auth: AuthService,
    private pagesSvc: PageService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.user = this.auth.currentUserValue;

    setTimeout(() => {
      this.textarea.setFocus();
    }, 500);

    if (!this.slug) {
      this.getPages();
    }
  }

  async ngAfterViewInit() {
    if (this.imageUrl) {
      let resultUrl = decodeURIComponent(this.imageUrl);
      const base64 = await Filesystem.readFile({ path: resultUrl });
      if (typeof base64.data == "string") {
        const blob = this.utils.base64toBlob(base64.data);
        this.addPicture(blob);
      }
    }

    if (this.text) {
      this.textarea.value = this.text;
      this.youtube = this.utils.extractYoutubeLink(this.text);
    }
  }

  async getPages() {
    this.pages = await this.pagesSvc.getPages();
    this.notFilteredPages = this.pages;
    this.config.set("pages", this.pages);
    this.otherPages = await this.pagesSvc.getOtherPages(15, 1);
    this.notFilteredOtherPages = this.otherPages;
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

  setFocus() {
    this.textarea.setFocus();
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
        const image = await this.utils.webcamImage("avatar", false, false);
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

  async addPicture(image: string | Blob) {
    if (typeof image !== "string") {
      image = await this.utils.fileToBase64(image);
    }
    this.image = this.sanitizer.bypassSecurityTrustUrl(image);
    this.imageFile = await this.utils.urltoBlob(image);

    this.cd.detectChanges();

    this.youtube = undefined;
  }

  removePicture() {
    this.image = undefined;
    this.imageFile = undefined;
    this.imageInput.nativeElement.value = "";
    this.textarea.setFocus();

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

      await this.storySvc.sendStory(
        this.imageFile ?? null,
        this.text ?? null,
        null,
        this.slug ?? null,
        "post"
      );
      this.toast.dismiss();
      (
        await this.toast.create({
          message: this.i18n.translate("post-published-successfully"),
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
          message: this.i18n.translate("error-publishing-your-post"),
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
    this.textarea.value = (this.textarea.value ?? "") + emoji.native;
    this.text = this.textarea.value;
  }

  deleteText() {
    const textRunes = runes(this.textarea.value);
    textRunes.pop();
    this.textarea.value = textRunes.join("");
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

      this.textarea.setFocus();
    }
  }

  async addOtherPages(event: any) {
    if (!this.query) {
      this.page++;
      const otherPages = await this.pagesSvc.getOtherPages(15, this.page);
      this.otherPages = [...this.otherPages, ...otherPages];

      if (event) {
        event.target.complete();

        if (otherPages.length < 15) {
          event.target.disabled = true;
        }
      }
    }
  }

  async filterPages(value: string) {
    this.query = value;
    if (value) {
      this.pages = this.notFilteredPages.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      this.otherPages = this.notFilteredOtherPages.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );

      let searchPages = await this.pagesSvc.searchPages(value);
      searchPages = searchPages.filter(
        (p) => !this.otherPages.find((op) => op.id === p.id)
      );
      this.otherPages = [...this.otherPages, ...searchPages];
    } else {
      this.pages = this.notFilteredPages;
      this.otherPages = this.notFilteredOtherPages;
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
}

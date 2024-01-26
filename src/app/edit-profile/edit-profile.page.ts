import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  ActionSheetController,
  IonInput,
  IonSegment,
  ModalController,
  PickerController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
import { SwiperOptions } from "swiper-new/types";
import { Swiper } from "swiper-new";
import { SwiperContainer } from "swiper-new/element";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Keyboard } from "@capacitor/keyboard";

import { Tag } from "../models/tags";
import { User } from "../models/user";
import { NavService } from "../services/navigation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { TagService } from "./../services/tag.service";
import { UtilsService } from "./../services/utils.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";
import { Haptics } from "@capacitor/haptics";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage {
  get minage() {
    return this.profileForm.get("minage");
  }

  get maxage() {
    return this.profileForm.get("maxage");
  }

  @ViewChild("segment", { static: true })
  segment: IonSegment;
  @ViewChild("games", { static: true })
  games: IonInput;
  @ViewChild("films", { static: true })
  films: IonInput;
  @ViewChild("books", { static: true })
  books: IonInput;
  @ViewChild("music", { static: true })
  music: IonInput;
  @ViewChild("role", { static: true })
  role: IonInput;
  @ViewChild("imageInput", { static: true })
  imageInput: ElementRef;

  public slides: Swiper;
  public sliderOpts: SwiperOptions = {
    keyboard: true,
    grabCursor: true,
    centeredSlides: true,
  };

  public showToolbar = false;
  public showFooter = true;
  public profileForm: FormGroup;
  public today: number = Date.now();
  public user: User;
  public tags: Tag[] = [];
  public tagsInput: string;
  public suggestedTags: { name: string; total: number; image?: string }[];
  public openSuggestions = false;
  public loading = true;
  public isPictureSheetOpen = false;
  private searchSubject = new Subject<{ query: string; category: string }>();
  public languages = this.userSvc.getLanguages();

  constructor(
    public fb: FormBuilder,
    public userSvc: UserService,
    private tagSvc: TagService,
    public auth: AuthService,
    private picker: PickerController,
    public sheet: ActionSheetController,
    private utils: UtilsService,
    private toast: ToastController,
    private nav: NavService,
    private modalController: ModalController,
    private config: ConfigService
  ) {
    this.profileForm = this.fb.group({
      name: [""],
      description: [""],
      location: [""],
      birthday: [""],
      languages: [""],
      gender: [""],
      orientation: [""],
      pronoun: [""],
      relationship: [""],
      status: [""],
      lovegender: [""],
      minage: [""],
      maxage: new FormControl({ value: "", disabled: true }),
      connection: [""],
      tags: [""],
    });

    if (isPlatform("capacitor")) {
      Keyboard.addListener("keyboardDidShow", () => {
        this.showFooter = false;
      });

      Keyboard.addListener("keyboardWillHide", () => {
        this.showFooter = true;
      });
    }
  }

  ngOnInit() {
    this.searchSubject
      .pipe(
        debounceTime(800) // espera 300ms después de la última emisión antes de llamar a performSearch
      )
      .subscribe(({ query, category }) => this.performSearch(query, category));
  }

  async ionViewWillEnter() {
    this.user = await this.auth.getAuthUser();

    this.profileForm.patchValue({
      name: this.user.name,
      description: this.user.description,
      location: this.user.location,
      birthday: this.user.birthday.split("T")[0],
      languages: this.user.languages,
      gender: this.user.gender,
      orientation: this.user.orientation,
      pronoun: this.user.pronoun,
      relationship: this.user.relationship,
      status: this.user.status,
      lovegender: this.user.lovegender,
      minage: this.user.minage,
      maxage: this.user.maxage,
      connection: this.user.connection,
    });

    this.tags = this.user.tags ? this.user.tags : [];

    if (this.minage.value) {
      this.profileForm.get("maxage").enable();
    }

    this.loading = false;

    const rules = await this.config.get("rules");
    if (!rules) {
      const modal = await this.modalController.create({
        component: RulesPage,
        cssClass: "vertical-modal",
        backdropDismiss: false,
      });
      return await modal.present();
    }

    await this.utils.delay(500);
    this.initSwiper();
  }

  initSwiper() {
    const swiperContainer: SwiperContainer = document.querySelector(
      "#swiper-edit-profile"
    );
    Object.assign(swiperContainer, this.sliderOpts);
    this.slides = swiperContainer.swiper;

    this.slides.on("slideChange", async () => {
      await Haptics.vibrate({ duration: 10 });
    });
  }

  async tap(event: any) {
    if (event.x > screen.width / 2) {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  async submitProfile() {
    this.user = {
      ...this.user,
      ...this.profileForm.getRawValue(),
      ...{ tags: this.tags },
    } as User;

    this.user.birthday = this.user.birthday.split("T")[0];

    try {
      this.user = await this.userSvc.updateUser(this.user);
      this.tags = this.user.tags;

      (
        await this.toast.create({
          message: "Cambios guardados correctamente.",
          duration: 5000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al guardar los cambios ${e}.`,
          duration: 5000,
          color: "danger",
          position: "middle",
        })
      ).present();
    }
    this.back();
  }

  async openPicker(typeage: string) {
    let ages = [];
    let min = 18;
    const max = 65;

    if (typeage === "maxage") {
      min = this.minage.value;
    }
    for (let i = min; i <= max; i++) {
      ages = [...ages, { value: i, text: `${i}` }];
    }

    const picker = await this.picker.create({
      buttons: [
        {
          text: "Hecho",
          handler: (data: {
            age: { text: string; value: number; columnIndex: number };
          }) => {
            if (typeage === "minage") {
              this.profileForm.get("maxage").enable();
              if (data.age.value > this.maxage.value) {
                this.profileForm.get("maxage").setValue(data.age.value);
              }
            }
            this.profileForm.get(typeage).setValue(data.age.value);
          },
        },
      ],
      columns: [
        {
          name: "age",
          options: ages,
        },
      ],
    });

    await picker.present();
  }

  async searchTag(query: string, category: string) {
    this.searchSubject.next({ query, category });
  }

  private async performSearch(query: string, category: string) {
    this.openSuggestions = false;
    if (query) {
      this.suggestedTags = (await this.tagSvc.searchTag(query, category)) as {
        name: string;
        total: number;
        cover?: string;
        category?: string;
      }[];

      if (this.suggestedTags.length > 0) {
        this.openSuggestions = true;
      }
    }
  }

  async addTag(name: string, catName: string) {
    this.openSuggestions = false;
    if (
      name &&
      !this.tags.some((t) => t.name === name && t.category.name === catName)
    ) {
      const tags = name.split(",").map((t: string) => {
        return { name: t.trim(), category: { name: catName } };
      });
      tags.forEach(async (t) => {
        try {
          const tag = await this.tagSvc.addTag(t.name, t.category.name);
          this.tags = [...[tag], ...this.tags];
          this.user.tags = this.tags;
          this.auth.setAuthUser(this.user);
        } catch (e) {
          (
            await this.toast.create({
              message: `Error al añadir la etiqueta ${t.name}.`,
              color: "danger",
              duration: 5000,
              position: "middle",
            })
          ).present();
          console.error(e);
        }
      });
    }
    this.role.value =
      this.music.value =
      this.games.value =
      this.films.value =
      this.books.value =
        "";
  }

  async removeTag(id: number) {
    this.tags.splice(
      this.tags.findIndex((t) => t.id === id),
      1
    );
    try {
      await this.tagSvc.removeTag(id);
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al eliminar la etiqueta.`,
          color: "danger",
          duration: 5000,
          position: "middle",
        })
      ).present();
      console.error(e);
    }
  }

  getTagsCategory(category: string) {
    if (!this.tags) {
      return;
    }
    return this.tags.filter((t) => t.category.name === category);
  }

  async selectPictureFromCamera() {
    this.closePictureSheet();
    if (isPlatform("capacitor")) {
      const avatar = (await this.utils.takePicture(
        "camera",
        true,
        "avatar",
        false
      )) as File;
      this.uploadPicture(avatar);
    } else {
      const avatar = await this.utils.webcamImage("avatar", true);
      if (!avatar || typeof avatar === "boolean") {
        return false;
      }
      this.uploadPicture(avatar);
    }
  }

  async selectPictureFromGallery() {
    this.closePictureSheet();
    if (isPlatform("capacitor")) {
      const avatar = await this.utils.takePicture(
        "gallery",
        true,
        "avatar",
        false
      );
      if (!avatar || typeof avatar == "string") {
        return false;
      }
      this.uploadPicture(avatar);
    } else {
      this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
    }
  }

  openPictureSheet() {
    this.isPictureSheetOpen = true;
  }

  closePictureSheet() {
    this.isPictureSheetOpen = false;
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event);
      if (typeof src == "string") {
        const imageFile = await this.utils.urltoBlob(src);
        this.uploadPicture(imageFile);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async uploadPicture(avatar: Blob) {
    try {
      const user = await this.userSvc.uploadAvatar(avatar);
      this.auth.setAuthUser(user);
      this.user = this.auth.currentUserValue;

      (
        await this.toast.create({
          message: `Imagen actualizada correctamente.`,
          duration: 5000,
          position: "middle",
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al actualizar la imagen.`,
          duration: 5000,
          position: "middle",
        })
      ).present();
      console.error(e);
    }
  }

  async setAvatar() {
    if (this.slides.activeIndex > 0) {
      const image = this.user.images[this.slides.activeIndex - 1];
      const user = await this.userSvc.setAvatar(image);
      this.auth.setAuthUser(user);
      this.user = this.auth.currentUserValue;
      this.slides.slideTo(0);
    }
  }

  async deleteImage() {
    let image = undefined;
    if (this.slides.activeIndex === 0) {
      image = this.user.avatar;
    } else {
      image = this.user.images[this.slides.activeIndex - 1];
    }
    const user = await this.userSvc.deleteAvatar(image);
    this.auth.setAuthUser(user);
    this.user = this.auth.currentUserValue;
    this.slides.update();
    this.slides.slideTo(0);
  }

  back() {
    this.nav.back();
  }
}

import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import {
  ActionSheetController,
  IonInput,
  IonSegment,
  ModalController,
  PickerController,
  Platform,
  ToastController,
} from "@ionic/angular";
import SwiperCore, { SwiperOptions, Pagination, Keyboard } from "swiper";

import { Tag } from "../models/tags";
import { User } from "../models/user";
import { NavService } from "../services/navigation.service";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { TagService } from "./../services/tag.service";
import { UtilsService } from "./../services/utils.service";
import { RulesPage } from "../rules/rules.page";
import { ConfigService } from "../services/config.service";

SwiperCore.use([Pagination, Keyboard]);

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

  public slides: SwiperCore;
  public sliderOpts: SwiperOptions = {
    keyboard: true,
    preloadImages: false,
    lazy: true,
    pagination: { clickable: true },
    grabCursor: true,
  };

  public showToolbar = false;
  public profileForm: UntypedFormGroup;
  public today: number = Date.now();
  public user: User;
  public tags: Tag[] = [];
  public tagsInput: string;
  public list: { name: string; total: number }[];

  constructor(
    public fb: UntypedFormBuilder,
    public userSvc: UserService,
    private tagSvc: TagService,
    public auth: AuthService,
    private picker: PickerController,
    public sheet: ActionSheetController,
    private utils: UtilsService,
    private toast: ToastController,
    private platform: Platform,
    private nav: NavService,
    private modal: ModalController,
    private config: ConfigService
  ) {
    this.profileForm = this.fb.group({
      name: [""],
      description: [""],
      location: [""],
      birthday: [""],
      gender: [""],
      orientation: [""],
      pronoun: [""],
      relationship: [""],
      status: [""],
      lovegender: [""],
      minage: [""],
      maxage: new UntypedFormControl({ value: "", disabled: true }),
      connection: [""],
      tags: [""],
    });
  }

  async ionViewWillEnter() {
    this.user = await this.auth.getAuthUser();

    this.profileForm.patchValue({
      name: this.user.name,
      description: this.user.description,
      location: this.user.location,
      birthday: this.user.birthday.split("T")[0],
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

    const rules = await this.config.get("rules");
    if (!rules) {
      const modal = await this.modal.create({
        component: RulesPage,
        cssClass: "full-modal",
        backdropDismiss: false,
      });
      return await modal.present();
    }
  }

  setSwiperInstance(swiper: SwiperCore) {
    this.slides = swiper;
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
    this.sheet.dismiss();

    if (query) {
      this.list = (await this.tagSvc.searchTag(query, category)) as {
        name: string;
        total: number;
      }[];

      if (this.list.length) {
        let buttons = [];
        this.list.forEach((op) => {
          buttons = [
            ...buttons,
            {
              text: `${op.name} (${op.total})`,
              handler: () => {
                this.addTag(op.name, category);
              },
            },
          ];
        });

        const actionSheet = await this.sheet.create({
          keyboardClose: false,
          buttons,
        });
        await actionSheet.present();
      }
    }
  }

  async addTag(name: string, catName: string) {
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

  async openPictureSheet() {
    if (this.platform.is("android") && this.platform.is("capacitor")) {
      /*await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);*/
    }

    const actionSheet = await this.sheet.create({
      header:
        "Consejo: Recuerda que subir fotos con contenido explícito puede ser motivo de expulsión.",
      buttons: [
        {
          text: "Desde la cámara",
          icon: "camera",
          handler: async () => {
            if (this.platform.is("capacitor")) {
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
                actionSheet.dismiss();
                return false;
              }
              this.uploadPicture(avatar);
            }
          },
        },
        {
          text: "Desde la galería",
          icon: "images",
          handler: async () => {
            if (this.platform.is("capacitor")) {
              const avatar = await this.utils.takePicture(
                "gallery",
                true,
                "avatar",
                false
              );
              if (!avatar || typeof avatar == "string") {
                actionSheet.dismiss();
                return false;
              }
              this.uploadPicture(avatar);
            } else {
              this.imageInput.nativeElement.dispatchEvent(
                new MouseEvent("click")
              );
            }
          },
        },
      ],
    });
    await actionSheet.present();
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

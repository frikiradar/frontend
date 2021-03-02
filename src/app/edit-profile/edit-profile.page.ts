import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import {
  ActionSheetController,
  IonInput,
  IonSegment,
  IonSlides,
  PickerController,
  Platform,
  ToastController
} from "@ionic/angular";

import { Tag } from "../models/tags";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { AuthService } from "./../services/auth.service";
import { TagService } from "./../services/tag.service";
import { UtilsService } from "./../services/utils.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"]
})
export class EditProfilePage {
  get minage() {
    return this.profileForm.get("minage");
  }

  get maxage() {
    return this.profileForm.get("maxage");
  }

  @ViewChild("slider", { static: true })
  slider: IonSlides;
  @ViewChild("imageSlider", { static: true })
  imageSlider: IonSlides;
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

  public showToolbar = false;
  public profileForm: FormGroup;
  public today: number = Date.now();
  public user: User;
  public tags: Tag[] = [];
  public tagsInput: string;
  public list: { name: string; total: number }[];
  public activeImage = 0;
  public activeTab = "info";

  constructor(
    public fb: FormBuilder,
    public userSvc: UserService,
    private tagSvc: TagService,
    private auth: AuthService,
    private picker: PickerController,
    public sheet: ActionSheetController,
    private utils: UtilsService,
    private router: Router,
    private toast: ToastController,
    private platform: Platform,
    private androidPermissions: AndroidPermissions
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
      maxage: new FormControl(
        { value: "", disabled: true },
        Validators.required
      ),
      connection: [""],
      tags: [""]
    });
  }

  async ionViewWillEnter() {
    this.user = await this.auth.getAuthUser();

    this.profileForm.patchValue({
      name: this.user.name,
      description: this.user.description,
      location: this.user.location,
      birthday: this.user.birthday,
      gender: this.user.gender,
      orientation: this.user.orientation,
      pronoun: this.user.pronoun,
      relationship: this.user.relationship,
      status: this.user.status,
      lovegender: this.user.lovegender,
      minage: this.user.minage,
      maxage: this.user.maxage,
      connection: this.user.connection
    });

    this.tags = this.user.tags ? this.user.tags : [];

    if (this.minage.value) {
      this.profileForm.get("maxage").enable();
    }
  }

  async submitProfile() {
    this.user = {
      ...this.user,
      ...this.profileForm.getRawValue(),
      ...{ tags: this.tags }
    } as User;

    this.user.birthday = this.user.birthday.split("T")[0];

    try {
      this.user = await this.userSvc.updateUser(this.user);
      this.tags = this.user.tags;

      (
        await this.toast.create({
          message: "Cambios guardados correctamente.",
          duration: 5000,
          position: "bottom"
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al guardar los cambios ${e}.`,
          duration: 5000,
          position: "bottom"
        })
      ).present();
    }
    this.back();
  }

  async showSegment(event: string) {
    switch (event) {
      case "info":
        this.slider.slideTo(0);
        break;
      case "tags":
        this.slider.slideTo(1);
        break;
    }
  }

  async slideSegment(i: Promise<number>) {
    i.then(index => {
      switch (index) {
        case 0:
          this.segment.value = "info";
          break;
        case 1:
          this.segment.value = "tags";
          break;
      }
    });
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
          }
        }
      ],
      columns: [
        {
          name: "age",
          options: ages
        }
      ]
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
        this.list.forEach(op => {
          buttons = [
            ...buttons,
            {
              text: `${op.name} (${op.total})`,
              handler: () => {
                this.inputTag(op.name, category);
              }
            }
          ];
        });

        const actionSheet = await this.sheet.create({
          keyboardClose: false,
          buttons
        });
        await actionSheet.present();
      }
    }
  }

  async inputTag(name: string, catName: string) {
    if (
      name &&
      !this.tags.some(t => t.name === name && t.category.name === catName)
    ) {
      const tags = name.split(",").map((t: string) => {
        return { name: t.trim(), category: { name: catName } };
      });

      this.tags = [...this.tags, ...tags];
      this.submitTags();
    }
    this.role.value = this.music.value = this.games.value = this.films.value = this.books.value =
      "";
  }

  async removeTag(name: string, catName: string) {
    this.tags.splice(
      this.tags.findIndex(t => t.category.name === catName && t.name === name),
      1
    );
    this.submitTags();
  }

  getTagsCategory(category: string) {
    if (!this.tags) {
      return;
    }
    return this.tags.filter(t => t.category.name === category);
  }

  async submitTags() {
    this.user = {
      ...this.user,
      ...{ tags: this.tags }
    } as User;

    try {
      this.user = await this.userSvc.updateUser(this.user);
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al guardar la etiqueta ${e}.`,
          duration: 5000,
          position: "bottom"
        })
      ).present();
    }
  }

  async openPictureSheet() {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);
    }

    const actionSheet = await this.sheet.create({
      header:
        "Consejo: Si pones una foto tuya transmitirás mucha más confianza. Puedes subir hasta 9 fotos.",
      buttons: [
        {
          text: "Desde la cámara",
          icon: "camera",
          handler: async () => {
            if (this.platform.is("cordova")) {
              const avatar = (await this.utils.takePicture(
                "camera",
                true,
                "avatar",
                false
              )) as File;
              this.uploadPicture(avatar);
            } else {
              const avatar = await this.utils.webcamImage("avatar");
              if (!avatar || typeof avatar === "boolean") {
                actionSheet.dismiss();
                return false;
              }
              this.uploadPicture(avatar);
            }
          }
        },
        {
          text: "Desde tus fotos",
          icon: "images",
          handler: async () => {
            if (this.platform.is("cordova")) {
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
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event);
      if (typeof src == "string") {
        const imageFile = await this.utils.urlToFile(src);
        this.uploadPicture(imageFile);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async uploadPicture(avatar: File) {
    try {
      const user = await this.userSvc.uploadAvatar(avatar);
      this.auth.setAuthUser(user);
      this.user = this.auth.currentUserValue;

      (
        await this.toast.create({
          message: `Imagen actualizada correctamente.`,
          duration: 5000,
          position: "middle"
        })
      ).present();
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al actualizar la imagen.`,
          duration: 5000,
          position: "middle"
        })
      ).present();
      console.error(e);
    }
  }

  async setAvatar() {
    const image = this.user.images[this.activeImage - 1];
    const user = await this.userSvc.setAvatar(image);
    this.auth.setAuthUser(user);
    this.user = this.auth.currentUserValue;
    this.imageSlider.slideTo(0);
  }

  async deleteImage() {
    const image = this.user.images[this.activeImage - 1];
    const user = await this.userSvc.deleteAvatar(image);
    this.auth.setAuthUser(user);
    this.user = this.auth.currentUserValue;
    await this.imageSlider.update();
    this.imageSlider.slideTo(0);
  }

  setActiveImage(i: Promise<number>) {
    i.then(index => {
      this.activeImage = index;
    });
  }

  back() {
    this.router.navigate(["/tabs/radar"]);
  }
}

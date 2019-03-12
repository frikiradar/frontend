import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { CameraResultType, CameraSource, Plugins } from "@capacitor/core";
import { Base64 } from "@ionic-native/base64/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";

import {
  ActionSheetController,
  IonInput,
  IonSegment,
  IonSlides,
  ModalController,
  PickerController
} from "@ionic/angular";

import { Tag } from "../../models/tags";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { AuthService } from "./../../services/auth.service";
import { TagService } from "./../../services/tag.service";
import { UtilsService } from "./../../services/utils.service";

const { Toast, Camera } = Plugins;

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.modal.html",
  styleUrls: ["./edit-profile.modal.scss"]
})
export class EditProfileModal implements OnInit {
  get minage() {
    return this.profileForm.get("minage");
  }

  get maxage() {
    return this.profileForm.get("maxage");
  }

  @ViewChild("slider")
  slider: IonSlides;
  @ViewChild("segment")
  segment: IonSegment;
  @ViewChild("games")
  games: IonInput;
  @ViewChild("films")
  films: IonInput;
  @ViewChild("books")
  books: IonInput;
  @ViewChild("music")
  music: IonInput;

  public profileForm: FormGroup;
  public today: number = Date.now();
  public user: User;
  public tags: Tag[];
  public tagsInput: string;
  public list: { name: string; total: number }[];

  constructor(
    public modal: ModalController,
    public fb: FormBuilder,
    public userSvc: UserService,
    private tagSvc: TagService,
    private auth: AuthService,
    private picker: PickerController,
    public sheet: ActionSheetController,
    private crop: Crop,
    private base64: Base64,
    private utils: UtilsService,
    private webview: WebView
  ) {
    this.profileForm = this.fb.group({
      description: [""],
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

  async ngOnInit() {
    this.user = await this.auth.getAuthUser();

    this.profileForm.patchValue({
      description: this.user.description,
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

    this.tags = this.user.tags;
    this.user.avatar = this.user.avatar
      ? this.user.avatar
      : "../../../assets/img/users/default.jpg";

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

    try {
      this.user = await this.userSvc.updateUser(this.user);
      this.tags = this.user.tags;

      await Toast.show({
        text: "Cambios guardados correctamente."
      });
    } catch (e) {
      await Toast.show({
        text: `Error al guardar los cambios ${e}.`
      });
    }
    this.closeModal();
  }

  async showSegment(event: string) {
    switch (event) {
      case "info":
        this.slider.slideTo(0);
        break;
      case "tags":
        this.slider.slideTo(1);
        break;
      case "interesting":
        this.slider.slideTo(2);
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
        case 2:
          this.segment.value = "interesting";
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
    this.music.value = this.games.value = this.films.value = this.books.value =
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
      await Toast.show({
        text: `Error al guardar la etiqueta ${e}.`
      });
    }
  }

  async openPictureSheet() {
    const actionSheet = await this.sheet.create({
      buttons: [
        {
          text: "Desde la cámara",
          icon: "camera",
          handler: () => {
            this.takePicture("camera");
          }
        },
        {
          text: "Desde tus fotos",
          icon: "images",
          handler: () => {
            this.takePicture("gallery");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async takePicture(mode: string) {
    const image = await Camera.getPhoto({
      quality: 70,
      resultType: CameraResultType.Uri,
      source: mode === "camera" ? CameraSource.Camera : CameraSource.Photos
    });

    try {
      const newImage = await this.crop.crop(image.path, {
        quality: 70,
        targetWidth: -1,
        targetHeight: -1
      });

      /*const base64File = await this.utils.getBase64Image(
        this.webview.convertFileSrc(newImage)
      );*/

      const base64File = await this.base64.encodeFile(newImage);
      const blob: Blob = this.utils.base64toBlob(base64File);
      const avatar: File = new File([blob], "avatar.png");
      try {
        this.user.avatar = await this.userSvc.uploadAvatar(avatar);
        await Toast.show({
          text: `Imagen actualizada correctamente.`
        });
      } catch (e) {
        await Toast.show({
          text: `Error al actualizar la imagen.`
        });
      }
    } catch (e) {
      await Toast.show({
        text: `Error al recortar la imagen.`
      });
    }
  }

  closeModal() {
    this.modal.dismiss();
  }
}

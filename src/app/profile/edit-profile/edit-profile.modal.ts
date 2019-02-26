import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ActionSheetController,
  IonInput,
  IonSegment,
  IonSlides,
  ModalController,
  PickerController,
  ToastController
} from "@ionic/angular";

import { Tag } from "../../models/tags";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { AuthService } from "./../../services/auth.service";
import { TagService } from "./../../services/tag.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.modal.html",
  styleUrls: ["./edit-profile.modal.scss"]
})
export class EditProfileModal {
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
  private user: Partial<User>;
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
    private toast: ToastController
  ) {
    this.profileForm = fb.group({
      description: [""],
      birthday: [""],
      gender: [""],
      orientation: [""],
      pronoun: [""],
      relationship: [""],
      status: [""],
      lovegender: [""],
      minage: [""],
      maxage: [""],
      connection: [""],
      tags: [""]
    });

    this.auth.getAuthUser().then((user: User) => {
      this.user = user;
      this.profileForm.patchValue({
        description: user.description,
        birthday: user.birthday,
        gender: user.gender,
        orientation: user.orientation,
        pronoun: user.pronoun,
        relationship: user.relationship,
        status: user.status,
        lovegender: user.lovegender,
        minage: user.minage,
        maxage: user.maxage,
        connection: user.connection
      });

      this.tags = user.tags;
    });
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

      const toast = await this.toast.create({
        message: "Cambios guardados correctamente",
        duration: 1000
      });
      toast.present();
    } catch (e) {
      const toast = await this.toast.create({
        message: `Error al guardar los cambios ${e}`,
        duration: 1000
      });
      toast.present();
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

  async openPicker() {
    let ages = [];
    for (let i = 18; i <= 65; i++) {
      ages = [...ages, { value: i, text: `${i}` }];
    }

    const picker = await this.picker.create({
      buttons: [
        {
          text: "Hecho",
          handler: (data: {
            minage: { text: string; value: number; columnIndex: number };
            maxage: { text: string; value: number; columnIndex: number };
          }) => {
            this.profileForm.get("minage").setValue(data.minage.value);
            this.profileForm.get("maxage").setValue(data.maxage.value);
          }
        }
      ],
      columns: [
        {
          name: "minage",
          options: ages
        },
        {
          name: "maxage",
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
      const category = { name: catName };
      this.tags = [...this.tags, ...[{ name, category }]];
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
      const toast = await this.toast.create({
        message: `Error al guardar la etiqueta ${e}`,
        duration: 1000
      });
      toast.present();
    }
  }

  async uploadAvatar(files: FileList) {
    try {
      const avatar = files.item(0);
      await this.userSvc.uploadAvatar(avatar);
    } catch (err) {
      throw new Error(`${err.status}  - ${err.statusText}`);
    }
  }

  closeModal() {
    this.modal.dismiss();
  }
}

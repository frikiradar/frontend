import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { AuthService } from "./../../services/auth.service";

import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.modal.html",
  styleUrls: ["./edit-profile.modal.scss"]
})
export class EditProfileModal {
  public profileForm: FormGroup;
  public today: number = Date.now();
  private user: Partial<User>;

  constructor(
    public modal: ModalController,
    public fb: FormBuilder,
    public userSvc: UserService,
    private auth: AuthService
  ) {
    this.profileForm = fb.group({
      description: [""],
      birthday: [""],
      gender: [""],
      orientation: [""],
      pronoun: [""],
      relationship: [""],
      status: [""]
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
        status: user.status
      });
    });
  }

  async submitProfile() {
    this.user = { ...this.user, ...this.profileForm.getRawValue() } as User;
    this.userSvc.updateUser(this.user);
  }

  closeModal() {
    this.modal.dismiss();
  }

  async upload(files: FileList) {
    this.userSvc.uploadAvatar(files.item(0));
  }
}

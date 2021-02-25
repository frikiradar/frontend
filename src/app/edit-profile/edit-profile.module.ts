import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ImageCropperModule } from "ngx-image-cropper";

import { SharedModule } from "../shared/shared.module";
import { EditProfilePage } from "./edit-profile.page";

const routes: Routes = [
  {
    path: "",
    component: EditProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ImageCropperModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}

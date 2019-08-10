import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Camera } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { IonicModule } from "@ionic/angular";

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
    SharedModule
  ],
  declarations: [EditProfilePage],
  providers: [Crop, Camera]
})
export class EditProfilePageModule {}

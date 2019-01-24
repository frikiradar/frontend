import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { EditProfileModal } from "../profile/edit-profile/edit-profile.modal";
import { PopoverComponent, RadarPage } from "./radar.page";

const routes: Routes = [
  {
    path: "",
    component: RadarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [RadarPage, PopoverComponent, EditProfileModal],
  entryComponents: [PopoverComponent, EditProfileModal]
})
export class RadarPageModule {}

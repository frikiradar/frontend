import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { NiceDatePipe } from "../nice-date.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProfilePage, ProfilePopover } from "./profile.page";

const routes: Routes = [
  {
    path: "",
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ProfilePage, ProfilePopover, NiceDatePipe],
  entryComponents: [ProfilePopover]
})
export class ProfilePageModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

import { SharedModule } from "../shared/shared.module";
import { RoomPage } from "./room.page";

const routes: Routes = [
  {
    path: "",
    component: RoomPage
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
    PickerModule
  ],
  declarations: [RoomPage]
})
export class RoomPageModule { }

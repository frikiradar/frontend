import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

import { SharedModule } from "../shared/shared.module";
import { RoomPage } from "./room.page";
import { RoomPopover } from "./room-popover/room-popover";

const routes: Routes = [
  {
    path: "",
    component: RoomPage
  }
];

@NgModule({
  entryComponents: [RoomPopover],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    PickerModule
  ],
  declarations: [RoomPage, RoomPopover]
})
export class RoomPageModule {}

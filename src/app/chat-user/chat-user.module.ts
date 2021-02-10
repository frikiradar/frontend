import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { LinkyModule } from "ngx-linky";

import { SharedModule } from "../shared/shared.module";
import { ChatUserPage } from "./chat-user.page";

const routes: Routes = [
  {
    path: "",
    component: ChatUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LinkyModule,
    SharedModule,
    PickerModule
  ],
  declarations: [ChatUserPage]
})
export class ChatUserPageModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgxLinkifyjsModule } from "ngx-linkifyjs";

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
    IonicModule,
    RouterModule.forChild(routes),
    NgxLinkifyjsModule
  ],
  declarations: [ChatUserPage]
})
export class ChatUserPageModule {}

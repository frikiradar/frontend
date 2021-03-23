import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../shared/shared.module";
import { CommunityPage } from "./community.page";

const routes: Routes = [
  {
    path: "",
    component: CommunityPage
  },
  {
    path: "story/:id",
    component: CommunityPage
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
  declarations: [CommunityPage]
})
export class CommunityPageModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../../shared/shared.module";
import { ViewStoriesModal } from "./view-stories.modal";

const routes: Routes = [
  {
    path: "",
    component: ViewStoriesModal,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ViewStoriesModal],
})
export class StoryPageModule {}

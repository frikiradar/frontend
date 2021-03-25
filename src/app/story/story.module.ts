import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StoryPageRoutingModule } from "./story-routing.module";

import { StoryPage } from "./story.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryPageRoutingModule,
    SharedModule
  ],
  declarations: [StoryPage]
})
export class StoryPageModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../../shared/shared.module";
import { StoryListPageRoutingModule } from "./story-list-routing.module";
import { StoryListPage } from "./story-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryListPageRoutingModule,
    SharedModule,
  ],
  declarations: [StoryListPage],
})
export class StoryListPageModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RoomsPageRoutingModule } from "./rooms-routing.module";

import { RoomsPage } from "./rooms.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsPageRoutingModule,
    SharedModule
  ],
  declarations: [RoomsPage]
})
export class RoomsPageModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PopoverComponent, RadarPage } from "./radar.page";

const routes: Routes = [
  {
    path: "",
    component: RadarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RadarPage, PopoverComponent],
  entryComponents: [PopoverComponent]
})
export class RadarPageModule {}

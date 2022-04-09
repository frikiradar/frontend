import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "./../shared/shared.module";
import { RadarPage } from "./radar.page";

const routes: Routes = [
  {
    path: "",
    component: RadarPage,
  },
  {
    path: "story/:id",
    component: RadarPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [RadarPage],
})
export class RadarPageModule {}

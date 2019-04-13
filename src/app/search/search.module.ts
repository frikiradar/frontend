import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../shared/shared.module";
import { SearchPage } from "./search.page";

const routes: Routes = [
  {
    path: "",
    component: SearchPage
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
  declarations: [SearchPage]
})
export class SearchPageModule {}

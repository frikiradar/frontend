import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecruitPage } from "./recruit.page";

const routes: Routes = [
  {
    path: "",
    component: RecruitPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitPageRoutingModule {}

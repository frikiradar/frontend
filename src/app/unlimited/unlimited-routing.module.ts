import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UnlimitedModal } from "./unlimited.modal";

const routes: Routes = [
  {
    path: "",
    component: UnlimitedModal,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlimitedModalRoutingModule {}

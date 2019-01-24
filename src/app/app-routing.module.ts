import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./tabs/tabs.module#TabsPageModule",
    canActivate: [AuthGuard]
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

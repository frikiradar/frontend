import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "app", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "app/profile",
    loadChildren: "./pages/profile/profile.module#ProfilePageModule"
  },
  {
    path: "chat-dialog",
    loadChildren:
      "./pages/chat/chat-dialog/chat-dialog.module#ChatDialogPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

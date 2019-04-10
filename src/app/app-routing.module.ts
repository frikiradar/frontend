import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./tabs/tabs.module#TabsPageModule",
    canActivate: [AuthGuard]
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  {
    path: "edit-profile",
    loadChildren: "./edit-profile/edit-profile.module#EditProfilePageModule"
  },
  {
    path: "profile/:id",
    loadChildren: "./profile/profile.module#ProfilePageModule"
  },
  {
    path: "chat/:id",
    loadChildren: "./chat-user/chat-user.module#ChatUserPageModule"
  },
  {
    path: "search",
    loadChildren: "./search/search.module#SearchPageModule"
  },
  {
    path: "search/:query",
    loadChildren: "./search/search.module#SearchPageModule"
  },
  {
    path: "settings",
    loadChildren: "./settings/settings.module#SettingsPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

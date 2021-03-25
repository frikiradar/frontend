import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./edit-profile/edit-profile.module").then(
        m => m.EditProfilePageModule
      )
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: "profile/:id",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: "chat/:id",
    loadChildren: () =>
      import("./chat/chat-user/chat-user.module").then(
        m => m.ChatUserPageModule
      )
  },
  {
    path: "room/:slug",
    loadChildren: () => import("./room/room.module").then(m => m.RoomPageModule)
  },
  {
    path: "search",
    loadChildren: () =>
      import("./search/search.module").then(m => m.SearchPageModule)
  },
  {
    path: "search/:query",
    loadChildren: () =>
      import("./search/search.module").then(m => m.SearchPageModule)
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then(m => m.SettingsPageModule)
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(m => m.AdminPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'story',
    loadChildren: () => import('./story/story.module').then( m => m.StoryPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

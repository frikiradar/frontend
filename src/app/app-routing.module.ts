import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";
import { TabGuard } from "./guards/tab.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then(m => m.TabsPageModule),
    canActivate: [AuthGuard, TabGuard]
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
    path: "notification",
    loadChildren: () =>
      import("./notification/notification.module").then(
        m => m.NotificationPageModule
      )
  },
  {
    path: "chat/:id",
    loadChildren: () =>
      import("./chat/chat-user/chat-user.module").then(
        m => m.ChatUserPageModule
      )
  },
  {
    path: "rooms",
    loadChildren: () =>
      import("./room/rooms/rooms.module").then(m => m.RoomsPageModule)
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
    path: "story",
    loadChildren: () =>
      import("./story/story.module").then(m => m.StoryPageModule)
  },
  {
    path: "page/:slug",
    loadChildren: () =>
      import("./pages/page/page.module").then(m => m.PagePageModule)
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then(m => m.PagesPageModule)
  },
  {
    path: "ambassador",
    loadChildren: () =>
      import("./ambassador/ambassador.module").then(m => m.AmbassadorPageModule)
  },
  {
    path: ":id",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

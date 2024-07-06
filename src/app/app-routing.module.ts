import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./edit-profile/edit-profile.module").then(
        (m) => m.EditProfilePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "profile/:id",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "search",
    loadChildren: () =>
      import("./search/search.module").then((m) => m.SearchPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "search/:query",
    loadChildren: () =>
      import("./search/search.module").then((m) => m.SearchPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminPageModule),
    canActivate: [AdminGuard],
  },
  {
    path: "story",
    loadChildren: () =>
      import("./story/story.module").then((m) => m.StoryPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "page/:slug",
    loadChildren: () =>
      import("./pages/page/page.module").then((m) => m.PagePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "recruit",
    loadChildren: () =>
      import("./recruit/recruit.module").then((m) => m.RecruitPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "rules",
    loadChildren: () =>
      import("./rules/rules.module").then((m) => m.RulesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "disable-account",
    loadChildren: () =>
      import("./settings/disable-account/disable-account.module").then(
        (m) => m.DisableAccountPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "unlimited",
    loadChildren: () =>
      import("./unlimited/unlimited.module").then(
        (m) => m.UnlimitedModalModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "event/:id",
    loadChildren: () =>
      import("./events/event/event.module").then((m) => m.EventPageModule),
  },
  {
    path: "chat/:id",
    loadChildren: () =>
      import("./chat/chat-modal/chat-modal.module").then(
        (m) => m.ChatModalModule
      ),
  },
  {
    path: ":id",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "unsubscribe/:code",
    loadChildren: () =>
      import("./unsubscribe/unsubscribe.module").then(
        (m) => m.UnsubscribePageModule
      ),
  },
  {
    path: "download",
    loadChildren: () =>
      import("./download/download.module").then((m) => m.DownloadPageModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

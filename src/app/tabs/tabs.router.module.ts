import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../guards/auth.guard";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "radar",
        children: [
          {
            path: "",
            loadChildren: "../radar/radar.module#RadarPageModule"
          }
        ]
      },
      {
        path: "search",
        children: [
          {
            path: "",
            loadChildren: "../search/search.module#SearchPageModule"
          }
        ]
      },
      {
        path: "search/:query",
        children: [
          {
            path: "",
            loadChildren: "../search/search.module#SearchPageModule"
          }
        ]
      },
      {
        path: "chat",
        children: [
          {
            path: "",
            loadChildren: "../chat/chat.module#ChatPageModule"
          }
        ]
      },
      {
        path: "likes",
        children: [
          {
            path: "",
            loadChildren: "../likes/likes.module#LikesPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/radar",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/radar",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

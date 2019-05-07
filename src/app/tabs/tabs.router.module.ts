import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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

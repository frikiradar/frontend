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
            loadChildren: () =>
              import("../radar/radar.module").then((m) => m.RadarPageModule),
          },
        ],
      },
      {
        path: "events",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../events/events.module").then((m) => m.EventsPageModule),
          },
        ],
      },
      {
        path: "community",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../community/community.module").then(
                (m) => m.CommunityPageModule
              ),
          },
        ],
      },
      {
        path: "chat",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../chat/chat.module").then((m) => m.ChatPageModule),
          },
          {
            path: ":id",
            loadChildren: () =>
              import("../chat/chat.module").then((m) => m.ChatPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/radar",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

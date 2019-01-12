import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChatPage } from "../pages/chat/chat.page";
import { NotificationsPage } from "../pages/notifications/notifications.page";
import { RadarPage } from "../pages/radar/radar.page";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/app/tabs/(radar:radar)",
        pathMatch: "full"
      },
      {
        path: "radar",
        outlet: "radar",
        component: RadarPage
      },
      {
        path: "chat",
        outlet: "chat",
        component: ChatPage
      },
      {
        path: "notifications",
        outlet: "notifications",
        component: NotificationsPage
      }
    ]
  },
  {
    path: "",
    redirectTo: "/app/tabs/(radar:radar)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

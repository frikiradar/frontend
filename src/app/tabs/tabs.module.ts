import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { TabsPageRoutingModule } from "./tabs.router.module";

import { ChatPageModule } from "../chat/chat.module";
import { NotificationsPageModule } from "../notifications/notifications.module";
import { RadarPageModule } from "../radar/radar.module";
import { TabsPage } from "./tabs.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RadarPageModule,
    ChatPageModule,
    NotificationsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

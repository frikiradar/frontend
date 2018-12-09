import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { RadarPageModule } from '../radar/radar.module';
import { ChatPageModule } from '../chat/chat.module';
import { NotificationsPageModule } from '../notifications/notifications.module';

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

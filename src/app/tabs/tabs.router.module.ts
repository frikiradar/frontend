import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { RadarPage } from '../radar/radar.page';
import { ChatPage } from '../chat/chat.page';
import { NotificationsPage } from '../notifications/notifications.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(radar:radar)',
        pathMatch: 'full',
      },
      {
        path: 'radar',
        outlet: 'radar',
        component: RadarPage,
      },
      {
        path: 'chat',
        outlet: 'chat',
        component: ChatPage
      },
      {
        path: 'notifications',
        outlet: 'notifications',
        component: NotificationsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(radar:radar)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

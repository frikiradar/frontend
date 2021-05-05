import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatreonPage } from './patreon.page';

const routes: Routes = [
  {
    path: '',
    component: PatreonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatreonPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbassadorPage } from './ambassador.page';

const routes: Routes = [
  {
    path: '',
    component: AmbassadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbassadorPageRoutingModule {}

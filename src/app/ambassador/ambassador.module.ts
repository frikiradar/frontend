import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbassadorPageRoutingModule } from './ambassador-routing.module';

import { AmbassadorPage } from './ambassador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbassadorPageRoutingModule
  ],
  declarations: [AmbassadorPage]
})
export class AmbassadorPageModule {}

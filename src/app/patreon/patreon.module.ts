import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatreonPageRoutingModule } from './patreon-routing.module';

import { PatreonPage } from './patreon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatreonPageRoutingModule
  ],
  declarations: [PatreonPage]
})
export class PatreonPageModule {}

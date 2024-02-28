import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecruitPageRoutingModule } from "./recruit-routing.module";

import { RecruitPage } from "./recruit.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruitPageRoutingModule,
    SharedModule,
  ],
  declarations: [RecruitPage],
})
export class RecruitPageModule {}

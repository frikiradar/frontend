import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { UnlimitedModalRoutingModule } from "./unlimited-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnlimitedModalRoutingModule,
    SharedModule,
  ],
})
export class UnlimitedModalModule {}

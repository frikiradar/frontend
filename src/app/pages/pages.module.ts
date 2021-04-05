import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { PagesPageRoutingModule } from "./pages-routing.module";
import { PagesPage } from "./pages.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    SharedModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}

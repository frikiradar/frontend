import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DownloadPageRoutingModule } from "./download-routing.module";

import { DownloadPage } from "./download.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadPageRoutingModule,
    SharedModule,
  ],
  declarations: [DownloadPage],
})
export class DownloadPageModule {}

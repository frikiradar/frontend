import { NgModule } from "@angular/core";

import { NiceDatePipe } from "../nice-date.pipe";
import { ImagePreloadDirective } from "../shared/image-preload.directive";

@NgModule({
  declarations: [ImagePreloadDirective, NiceDatePipe],
  exports: [ImagePreloadDirective, NiceDatePipe]
})
export class SharedModule {}

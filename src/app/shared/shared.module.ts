import { NgModule } from "@angular/core";

import { ImagePreloadDirective } from "../shared/image-preload.directive";

@NgModule({
  declarations: [ImagePreloadDirective],
  exports: [ImagePreloadDirective]
})
export class SharedModule {}

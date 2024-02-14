import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import localeEs from "@angular/common/locales/es";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { LinkyModule } from "ngx-linky";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { ImageCropperModule } from "ngx-image-cropper";
import { WebcamImage, WebcamModule } from "ngx-webcam";
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from "@angular/service-worker";
import { register } from "swiper-new/element";

import { environment } from "../environments/environment";
import { ErrorInterceptor } from "../helpers/error.interceptor";
import { JwtInterceptor } from "../helpers/jwt.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { OptionsPopover } from "./options-popover/options-popover";

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEs, "es");
// install Swiper modules
register();

@NgModule({
  declarations: [AppComponent, OptionsPopover],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ animated: true }),
    PickerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    LinkyModule,
    ImageCropperModule,
    ServiceWorkerModule.register("ngsw-worker.js"),
    WebcamModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "es" },
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: environment.production }),
    },
    { provide: WebcamImage, useValue: WebcamImage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

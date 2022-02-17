import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import localeEs from "@angular/common/locales/es";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { LaunchReview } from "@awesome-cordova-plugins/launch-review/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { LinkyModule } from "ngx-linky";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { ImageCropperModule } from "ngx-image-cropper";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireMessagingModule } from "@angular/fire/compat/messaging/";
import { WebcamModule } from "ngx-webcam";
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from "@angular/service-worker";
import { Media } from "@ionic-native/media/ngx";
import { File as NativeFile } from "@ionic-native/file/ngx";
import { CodePush } from "@ionic-native/code-push/ngx";

import { IonicGestureConfig } from "src/helpers/ionicgesture.config";
import { environment } from "../environments/environment";
import { ErrorInterceptor } from "../helpers/error.interceptor";
import { JwtInterceptor } from "../helpers/jwt.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { OptionsPopover } from "./options-popover/options-popover";

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEs, "es");

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
    HammerModule,
    NgxIonicImageViewerModule,
    ImageCropperModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: true,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    WebcamModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "es" },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: environment.production }),
    },
    Device,
    SplashScreen,
    LaunchReview,
    Keyboard,
    AppVersion,
    WebView,
    Diagnostic,
    FirebaseX,
    Media,
    NativeFile,
    CodePush,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData
} from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import localeEs from "@angular/common/locales/es";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
// import { AnalyticsFirebase } from "@ionic-native/analytics-firebase/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { LinkyModule } from "ngx-linky";
import { NgxEmojiPickerModule } from "ngx-emoji-picker";

import {
  ServiceWorkerModule,
  SwRegistrationOptions
} from "@angular/service-worker";
import { IonicGestureConfig } from "src/helpers/ionicgesture.config";
import { environment } from "../environments/environment";
import { ErrorInterceptor } from "../helpers/error.interceptor";
import { JwtInterceptor } from "../helpers/jwt.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { SharedModule } from "./shared/shared.module";

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxEmojiPickerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    LinkyModule,
    ServiceWorkerModule.register("ngsw-worker.js"),
    HammerModule
  ],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "es" },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: environment.production })
    },
    Facebook,
    Device,
    Network,
    Vibration,
    Geolocation,
    SplashScreen,
    FCM,
    Clipboard,
    LaunchReview,
    Keyboard,
    LocalNotifications,
    AndroidPermissions,
    SocialSharing,
    AppVersion,
    WebView,
    Diagnostic,
    LocationAccuracy,
    // AnalyticsFirebase,
    BrowserTab,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

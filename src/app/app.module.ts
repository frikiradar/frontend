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
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { AdMobFree } from "@ionic-native/admob-free";
// import { AnalyticsFirebase } from "@ionic-native/analytics-firebase/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";
import { FCM } from "@ionic-native/fcm/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { InAppPurchase2 } from "@ionic-native/in-app-purchase-2/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { LaunchReview } from "@ionic-native/launch-review/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { ServiceWorkerModule } from "@angular/service-worker";
import { IonicGestureConfig } from "src/helpers/ionicgesture.config";
import { environment } from "../environments/environment";
import { ErrorInterceptor } from "../helpers/error.interceptor";
import { JwtInterceptor } from "../helpers/jwt.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { AdmobService } from "./services/admob.service";
import { SharedModule } from "./shared/shared.module";

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "es" },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
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
    AdMobFree,
    AdmobService,
    WebView,
    InAppPurchase2,
    Diagnostic
    // AnalyticsFirebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

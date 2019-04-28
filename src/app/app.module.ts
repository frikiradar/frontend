import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import localeEs from "@angular/common/locales/es";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";
import { FCM } from "@ionic-native/fcm/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Network } from "@ionic-native/network/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { NgxLinkifyjsModule } from "ngx-linkifyjs";

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLinkifyjsModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "es" },
    Facebook,
    Device,
    Toast,
    Network,
    Vibration,
    Geolocation,
    SplashScreen,
    FCM,
    Clipboard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

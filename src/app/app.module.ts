import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { ChatModal } from "./chat/chat-modal/chat.modal";

import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor } from "../helpers/error.interceptor";
import { JwtInterceptor } from "../helpers/jwt.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileModal } from "./profile/profile.modal";

@NgModule({
  declarations: [AppComponent, ProfileModal, ChatModal],
  entryComponents: [ProfileModal, ChatModal],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { AmbassadorModal } from "../ambassador/ambassador.modal";
import { LoginInfoComponent } from "../login/login-info/login-info.component";
import { RegisterComponent } from "../login/register/register.component";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { InsertCoinModal } from "./../insert-coin/insert-coin.modal";
import { PremiumModal } from "./../insert-coin/premium/premium.modal";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    PremiumModal,
    InsertCoinModal,
    AmbassadorModal,
    RequestGeolocationModal,
    LoginInfoComponent,
    RegisterComponent
  ],
  entryComponents: [
    PremiumModal,
    InsertCoinModal,
    AmbassadorModal,
    RequestGeolocationModal
  ],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ImagePreloadDirective,
    NiceDatePipe,
    LoginInfoComponent,
    RegisterComponent
  ]
})
export class SharedModule {}

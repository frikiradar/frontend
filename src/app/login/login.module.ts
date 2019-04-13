import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ActivateAccountPage } from "./activate-account/activate-account.page";
import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";
import { LoginPage } from "./login.page";
import { UnknownDevicePage } from "./unknown-device/unknown-device.page";

const routes: Routes = [
  {
    path: "",
    component: LoginPage
  },
  {
    path: "activate-account",
    component: ActivateAccountPage
  },
  {
    path: "unknown-device",
    component: UnknownDevicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage,
    ForgotPasswordModal,
    ActivateAccountPage,
    UnknownDevicePage
  ],
  entryComponents: [ForgotPasswordModal]
})
export class LoginPageModule {}

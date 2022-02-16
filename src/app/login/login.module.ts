import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LinkyModule } from "ngx-linky";

import { LoginInfoComponent } from "../login/login-info/login-info.component";
import { RegisterComponent } from "../login/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { ActivateAccountPage } from "./activate-account/activate-account.page";
import { BannedAccountPage } from "./banned-account/banned-account.page";
import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";
import { LoginPage } from "./login.page";
import { TwoStepPage } from "./two-step/two-step.page";

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
    path: "banned-account",
    component: BannedAccountPage
  },
  {
    path: "two-step",
    component: TwoStepPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule,
        LinkyModule
    ],
    declarations: [
        LoginPage,
        ForgotPasswordModal,
        ActivateAccountPage,
        BannedAccountPage,
        TwoStepPage,
        RegisterComponent,
        LoginInfoComponent
    ],
    exports: [RegisterComponent, LoginInfoComponent]
})
export class LoginPageModule {}

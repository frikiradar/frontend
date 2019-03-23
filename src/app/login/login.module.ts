import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ForgotPasswordModal } from "./forgot-password/forgot-password.modal";
import { LoginPage } from "./login.page";

const routes: Routes = [
  {
    path: "",
    component: LoginPage
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
  declarations: [LoginPage, ForgotPasswordModal],
  entryComponents: [ForgotPasswordModal]
})
export class LoginPageModule {}

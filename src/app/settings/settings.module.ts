import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../shared/shared.module";
import { BlockUsersModal } from "./block-users/block-users.modal";
import { ChangeEmailModal } from "./change-email/change-email.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { ChangeUsernameModal } from "./change-username/change-username.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";
import { DisableAccountModal } from "./disable-account/disable-account.modal";
import { PaymentsModal } from "./payments/payments.modal";
import { SettingsPage } from "./settings.page";
import { VerificationModal } from "./verification/verification.modal";

const routes: Routes = [
  {
    path: "",
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    SettingsPage,
    ChangePasswordModal,
    ChangeEmailModal,
    ChangeUsernameModal,
    DisableAccountModal,
    DevicesSettingsModal,
    BlockUsersModal,
    PaymentsModal,
    VerificationModal
  ],
  entryComponents: [
    ChangePasswordModal,
    ChangeEmailModal,
    ChangeUsernameModal,
    DisableAccountModal,
    DevicesSettingsModal,
    BlockUsersModal,
    PaymentsModal,
    VerificationModal
  ]
})
export class SettingsPageModule {}

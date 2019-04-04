import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { AccountModal } from "./account/account.modal";
import { BanUsersModal } from "./ban-users/ban-users.modal";
import { ChangePasswordModal } from "./change-password/change-password.modal";
import { DevicesSettingsModal } from "./devices/devices.modal";
import { SettingsPage } from "./settings.page";

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    SettingsPage,
    AccountModal,
    ChangePasswordModal,
    DevicesSettingsModal,
    BanUsersModal
  ],
  entryComponents: [
    AccountModal,
    ChangePasswordModal,
    DevicesSettingsModal,
    BanUsersModal
  ]
})
export class SettingsPageModule {}

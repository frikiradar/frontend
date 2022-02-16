import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LinkyModule } from "ngx-linky";

import { SharedModule } from "./../shared/shared.module";
import { AdminPage } from "./admin.page";
import { BannedMessagesModal } from "./banned-users/banned-messages/banned-messages.modal";
import { BannedUsersModal } from "./banned-users/banned-users.modal";
import { CreateRoomModal } from "./rooms/create-room/create-room.modal";
import { GlobalNotificationsModal } from "./global-notifications/global-notifications.modal";
import { EditRoomsModal } from "./rooms/edit-rooms/edit-rooms.modal";

const routes: Routes = [
  {
    path: "",
    component: AdminPage
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
        AdminPage,
        BannedUsersModal,
        GlobalNotificationsModal,
        CreateRoomModal,
        EditRoomsModal,
        BannedMessagesModal
    ]
})
export class AdminPageModule {}

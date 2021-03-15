import { Component } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { Room } from "src/app/models/room";
import { AdminService } from "src/app/services/admin.service";
import { CreateRoomModal } from "../create-room/create-room.modal";

@Component({
  selector: "edit-rooms",
  templateUrl: "./edit-rooms.modal.html",
  styleUrls: ["./edit-rooms.modal.scss"]
})
export class EditRoomsModal {
  public rooms: Room[];

  constructor(
    private admin: AdminService,
    private toast: ToastController,
    private modal: ModalController,
    private modalCreate: ModalController,
    private modalEdit: ModalController
  ) {}

  async ngOnInit() {
    this.rooms = await this.admin.getRooms();
  }

  async create() {
    const modal = await this.modalCreate.create({
      component: CreateRoomModal
    });
    await modal.present();
    await modal.onDidDismiss();
    this.rooms = await this.admin.getRooms();
  }

  async remove(room: Room) {
    try {
      const rooms = this.rooms;
      this.rooms = this.rooms.filter(r => r.id !== room.id);

      const toast = await this.toast.create({
        message: "Eliminando sala " + room.name + "...",
        duration: 3000,
        position: "bottom",
        buttons: [
          {
            text: "Deshacer",
            handler: () => {
              this.rooms = rooms;
            }
          }
        ]
      });
      toast.present();

      const log = await toast.onDidDismiss();
      if (log.role === "timeout") {
        await this.admin.removeRoom(room.id);
        (
          await this.toast.create({
            message: `Sala eliminada correctamente.`,
            duration: 5000,
            position: "middle"
          })
        ).present();
      }
    } catch (e) {
      (
        await this.toast.create({
          message: `Error al eliminar la sala.`,
          duration: 5000,
          position: "middle"
        })
      ).present();
    }
  }

  async edit(room: Room) {
    const modal = await this.modalEdit.create({
      component: CreateRoomModal,
      componentProps: { room }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.rooms = await this.admin.getRooms();
  }

  close() {
    this.modal.dismiss();
  }
}

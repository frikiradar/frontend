import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Room } from "src/app/models/room";
import { RoomService } from "src/app/services/room.service";

@Component({
  selector: "room-popover",
  templateUrl: "./room-popover.html",
  styleUrls: ["./room-popover.scss"]
})
export class RoomPopover {
  public room: Room;
  public notifications: "all" | "mentions" = "all";

  constructor(public popover: PopoverController, public roomSvc: RoomService) {}

  async ngOnInit() {
    const notifications = await this.roomSvc.getNotificationsSettings(
      this.room
    );
    if (notifications) {
      this.notifications = "all";
    } else {
      this.notifications = "mentions";
    }
  }

  setNotifications(mode: "all" | "mentions") {
    switch (mode) {
      case "all":
        this.roomSvc.activateNotifications(this.room);
        break;
      case "mentions":
        this.roomSvc.disableNotifications(this.room);
        break;
    }
    this.close();
  }

  close() {
    this.popover.dismiss();
  }
}

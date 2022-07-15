import { Component, Input } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { Room } from "src/app/models/room";
import { AdminService } from "src/app/services/admin.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "create-room",
  templateUrl: "./create-room.modal.html",
  styleUrls: ["./create-room.modal.scss"]
})
export class CreateRoomModal {
  @Input() room: Room;
  public roomForm: UntypedFormGroup;
  private imageFile: Blob;
  public editing = false;
  public src: string = "";
  public slug: string = "";

  constructor(
    public formBuilder: UntypedFormBuilder,
    private admin: AdminService,
    private toast: ToastController,
    private modal: ModalController,
    private utils: UtilsService
  ) {
    this.roomForm = formBuilder.group({
      name: new UntypedFormControl("", [Validators.required]),
      description: new UntypedFormControl(),
      permissions: new UntypedFormControl("", [Validators.required]),
      visible: new UntypedFormControl(),
      image: new UntypedFormControl()
    });
  }

  async ngOnInit() {
    if (this.room?.id) {
      this.editing = true;
      this.roomForm.get("name").setValue(this.room.name);
      this.roomForm.get("description").setValue(this.room.description);
      this.roomForm.get("permissions").setValue(this.room.permissions[0]);
      this.roomForm.get("visible").setValue(this.room.visible);
    }
  }

  async submitRoom() {
    if (this.roomForm.valid) {
      if (this.room?.id) {
        try {
          await this.admin.editRoom(
            this.room.id,
            this.roomForm.get("name").value.trim(),
            this.roomForm.get("description").value.trim(),
            this.roomForm.get("permissions").value.trim(),
            this.roomForm.get("visible").value,
            this.imageFile
          );

          (
            await this.toast.create({
              message: `Sala editada correctamente.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          this.close();
        } catch (e) {
          (
            await this.toast.create({
              message: `Error al editar la sala.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          console.error(e);
        }
      } else {
        try {
          await this.admin.createRoom(
            this.roomForm.get("name").value.trim(),
            this.roomForm.get("description").value.trim(),
            this.roomForm.get("permissions").value.trim(),
            this.roomForm.get("visible").value,
            this.imageFile
          );

          (
            await this.toast.create({
              message: `Sala creada correctamente.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          this.close();
        } catch (e) {
          (
            await this.toast.create({
              message: `Error al crear la sala.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          console.error(e);
        }
      }
    }
  }

  async cropImagebyEvent(event: any) {
    try {
      const src = await this.utils.cropImage(event);

      if (typeof src == "string") {
        this.src = src;
        this.imageFile = await this.utils.urltoBlob(src);
      }
    } catch (e) {
      console.error(e);
    }
  }

  removeImage(event: CustomEvent) {
    if (event.detail.value === "") {
      this.src = "";
      this.imageFile = null;
    }
  }

  generateSlug(event: CustomEvent) {
    const name = event.detail.value;
    this.slug = name.toLowerCase().replaceAll(" ", "-");
  }

  close() {
    this.modal.dismiss();
  }
}

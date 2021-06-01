import { Component, Input } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ModalController, ToastController } from "@ionic/angular";

import { Event } from "src/app/models/event";
import { AdminService } from "src/app/services/admin.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "event-modal",
  templateUrl: "./event.modal.html",
  styleUrls: ["./event.modal.scss"]
})
export class EventModal {
  @Input() event: Event;
  public eventForm: FormGroup;
  private imageFile: Blob;
  public editing = false;
  public src: string = "";
  public slug: string = "";
  public endDate = false;
  public showMore = false;
  public mapSrc: SafeUrl = "";

  constructor(
    public formBuilder: FormBuilder,
    private admin: AdminService,
    private toast: ToastController,
    private modal: ModalController,
    private utils: UtilsService,
    private sanitizer: DomSanitizer
  ) {
    this.eventForm = formBuilder.group({
      title: new FormControl("", [Validators.required]),
      description: new FormControl(),
      date: new FormControl("", [Validators.required]),
      time: new FormControl(),
      endDate: new FormControl(),
      endTime: new FormControl(),
      // recursion: new FormControl(),
      url: new FormControl(),
      location: new FormControl(),
      minage: new FormControl(),
      image: new FormControl()
    });
  }

  async ngOnInit() {
    if (this.event?.id) {
      this.editing = true;
      this.eventForm.get("title").setValue(this.event.title);
      this.eventForm.get("description").setValue(this.event.description);
    }
  }

  async changeLocation(event: CustomEvent) {
    const search =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyBdyInAg-2KUZtQFnrQ5ra7wjf2S4q4GTQ&q=" +
      event.detail.value.replace(" ", "+");
    this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(search);
  }

  async submitEvent() {
    if (this.eventForm.valid) {
      if (this.event?.id) {
        try {
          await this.admin.editRoom(
            this.event.id,
            this.eventForm.get("title").value.trim(),
            this.eventForm.get("description").value.trim(),
            this.eventForm.get("permissions").value.trim(),
            this.eventForm.get("visible").value,
            this.imageFile
          );

          (
            await this.toast.create({
              message: `Evento editado correctamente.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          this.close();
        } catch (e) {
          (
            await this.toast.create({
              message: `Error al publicar el evento.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          console.error(e);
        }
      } else {
        try {
          await this.admin.createRoom(
            this.eventForm.get("name").value.trim(),
            this.eventForm.get("description").value.trim(),
            this.eventForm.get("permissions").value.trim(),
            this.eventForm.get("visible").value,
            this.imageFile
          );

          (
            await this.toast.create({
              message: `Evento publicado correctamente.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          this.close();
        } catch (e) {
          (
            await this.toast.create({
              message: `Error al publicar el evento.`,
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

  close() {
    this.modal.dismiss();
  }
}

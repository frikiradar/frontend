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
import { Page } from "src/app/models/page";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/event.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "event-modal",
  templateUrl: "./event.modal.html",
  styleUrls: ["./event.modal.scss"]
})
export class EventModal {
  @Input() event: Event;
  @Input() user: User;
  @Input() page: Page;

  public eventForm: FormGroup;
  private imageFile: Blob;
  public editing = false;
  public src: string = "";
  public slug: string = "";
  public endDate = false;
  public showMore = false;
  public mapSrc: SafeUrl = "";
  public type: "online" | "offline" = "online";
  public country: Event["country"];

  constructor(
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private modal: ModalController,
    public utils: UtilsService,
    private sanitizer: DomSanitizer,
    private eventSvc: EventService,
    public auth: AuthService
  ) {
    this.eventForm = formBuilder.group({
      title: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      date: new FormControl("", [Validators.required]),
      endDate: new FormControl(),
      // repeat: new FormControl(),
      url: new FormControl("", [Validators.required]),
      price: new FormControl(0),
      country: new FormControl(),
      city: new FormControl(),
      address: new FormControl(),
      postal_code: new FormControl(),
      contact_phone: new FormControl(),
      contact_email: new FormControl(),
      minage: new FormControl(0),
      image: new FormControl(),
      official: new FormControl()
    });
  }

  async ngOnInit() {
    if (this.user) {
      this.eventForm.get("title").setValue("Cita con " + this.user.name);
    }

    if (this.event?.id) {
      this.editing = true;
      this.type = this.event.type;
      this.eventForm.get("title").setValue(this.event.title);
      this.eventForm.get("description").setValue(this.event.description);
      this.eventForm.get("date").setValue(this.event.date);
      this.eventForm.get("url").setValue(this.event.url);
      this.eventForm.get("country").setValue(this.event.country);
      this.eventForm.get("city").setValue(this.event.city);
      this.eventForm.get("address").setValue(this.event.address);
      this.eventForm.get("postal_code").setValue(this.event.postal_code);
      this.eventForm.get("contact_phone").setValue(this.event.contact_phone);
      this.eventForm.get("contact_email").setValue(this.event.contact_email);
      this.eventForm.get("minage").setValue(this.event.minage);
      this.eventForm.get("price").setValue(this.event.price);
    }
  }

  async changeLocation() {
    const country = this.eventForm.get("country").value?.trim();
    const city = this.eventForm.get("city").value?.trim();
    const address = this.eventForm.get("address").value?.trim();
    const postal_code = this.eventForm.get("postal_code").value?.trim();
    if (country && city && address) {
      const query = `${country} ${city} ${address} ${postal_code}`;
      const search =
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyBdyInAg-2KUZtQFnrQ5ra7wjf2S4q4GTQ&q=" +
        query.replace(/\s|,/g, "+");
      this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(search);
    }
  }

  async submitEvent() {
    if (this.eventForm.valid) {
      const title = this.eventForm.get("title").value.trim();
      const description = this.eventForm.get("description").value.trim();

      const date = new Date(this.eventForm.get("date").value).toUTCString();

      let endDate = null;
      if (this.eventForm.get("endDate").value) {
        endDate = new Date(this.eventForm.get("endDate").value).toUTCString();
      }

      const url = this.eventForm.get("url")?.value?.trim() ?? "";
      const price = this.eventForm.get("price")?.value ?? 0;
      const minage = this.eventForm.get("minage")?.value ?? 0;
      const official = this.eventForm.get("official")?.value ?? false;

      let country = null;
      let city = null;
      let address = null;
      let postal_code = null;
      let contact_phone = null;
      let contact_email = null;

      if (this.type === "offline") {
        country = this.eventForm.get("country").value?.trim();
        city = this.eventForm.get("city").value?.trim();
        address = this.eventForm.get("address").value?.trim();
        postal_code = this.eventForm.get("postal_code").value?.trim();
        contact_phone = this.eventForm.get("contact_phone").value?.trim();
        contact_email = this.eventForm.get("contact_email").value?.trim();
      }

      if (this.event?.id) {
        try {
          await this.eventSvc.editEvent(
            this.event.id,
            title,
            description,
            date,
            endDate,
            url,
            price,
            this.type,
            country,
            city,
            address,
            postal_code,
            contact_phone,
            contact_email,
            minage,
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
              message: `Error al editar el evento.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
          console.error(e);
        }
      } else {
        try {
          await this.eventSvc.setEvent(
            title,
            description,
            date,
            endDate,
            url,
            price,
            this.type,
            country,
            city,
            address,
            postal_code,
            contact_phone,
            contact_email,
            minage,
            this.imageFile,
            this.user?.id,
            this.page?.slug,
            official
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
      const src = await this.utils.cropImage(event, "", true, 16 / 9);

      if (typeof src == "string") {
        this.src = src;
        this.imageFile = await this.utils.urltoBlob(src);
      }
    } catch (e) {
      console.error(e);
    }
  }

  changeType(type: "online" | "offline") {
    this.type = type;

    if (this.type === "offline") {
      this.eventForm.get("url").setValidators([]);
      this.eventForm.get("url").updateValueAndValidity();
      this.eventForm.get("country").setValidators([Validators.required]);
      this.eventForm.get("country").setValidators([]);
      this.eventForm.get("city").setValidators([Validators.required]);
      this.eventForm.get("city").updateValueAndValidity();
      this.eventForm.get("address").setValidators([Validators.required]);
      this.eventForm.get("address").updateValueAndValidity();
    } else {
      this.eventForm.get("url").setValidators([Validators.required]);
      this.eventForm.get("url").updateValueAndValidity();
      this.eventForm.get("country").setValidators([]);
      this.eventForm.get("country").updateValueAndValidity();
      this.eventForm.get("city").setValidators([]);
      this.eventForm.get("city").updateValueAndValidity();
      this.eventForm.get("address").setValidators([]);
      this.eventForm.get("address").updateValueAndValidity();
    }
    this.eventForm.updateValueAndValidity();
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

import { Injectable } from "@angular/core";

import { Event } from "../models/event";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private rest: RestService, private uploadSvc: UploadService) {}

  async setEvent(
    title: string,
    description: string,
    date: string,
    time: string,
    endDate: string,
    endTime: string,
    url: string,
    location: string,
    minage: number,
    image: Blob
  ) {
    const formData: FormData = new FormData();
    formData.set("title", title);
    formData.set("description", description);
    formData.set("date", date);
    formData.set("time", time);
    formData.set("end_date", endDate);
    formData.set("end_time", endTime);
    formData.set("url", url);
    formData.set("location", location);
    formData.set("minage", "" + minage);
    formData.set("image", image);

    return (await this.uploadSvc.upload("event", formData)) as Event;
  }
}

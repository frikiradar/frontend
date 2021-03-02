import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "webcam-modal",
  templateUrl: "./webcam.modal.html",
  styleUrls: ["./webcam.modal.scss"]
})
export class WebcamModal {
  @Input() src: string;
  @Input() event: any;
  public webcamImage: string = "";
  public switchCamera: Subject<void> = new Subject<void>();
  private trigger: Subject<void> = new Subject<void>();

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public get switchCameraObservable(): Observable<void> {
    return this.switchCamera.asObservable();
  }

  constructor(public modal: ModalController, public webcam: WebcamImage) {}

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage.imageAsDataUrl;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  triggerSwitchCamera(): void {
    this.switchCamera.next();
  }

  ok() {
    this.modal.dismiss(this.webcamImage);
  }

  retry() {
    this.webcamImage = null;
  }

  cancel() {
    this.modal.dismiss();
  }
}

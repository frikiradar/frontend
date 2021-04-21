import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { AlertController, ModalController, Platform } from "@ionic/angular";

import { CropperModal } from "../cropper/cropper.modal";
import { WebcamModal } from "../webcam/webcam.modal";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor(
    public http: HttpClient,
    private alert: AlertController,
    private auth: AuthService,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private webview: WebView,
    private camera: Camera,
    private modal: ModalController
  ) {}

  async takePicture(
    mode?: string,
    crop?: boolean,
    name?: string,
    returnsrc = false
  ): Promise<Blob | string> {
    const fileUri = await this.camera.getPicture({
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType:
        mode === "camera"
          ? this.camera.PictureSourceType.CAMERA
          : this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
      correctOrientation: true
    });

    let src = this.webview.convertFileSrc(fileUri);

    try {
      if (crop) {
        const res = await this.cropImage("", src);
        if (typeof res == "string") {
          src = res;
        } else {
          return;
        }
      }
      // console.log(src);
      if (returnsrc) {
        return src;
      }
      const blob = await this.urltoBlob(src);
      return blob;
    } catch (e) {
      console.error("Error al recortar la imagen.", e);
    }
  }

  async cropImage(
    event: any = "",
    src: string = ""
  ): Promise<string | boolean> {
    const modal = await this.modal.create({
      component: CropperModal,
      componentProps: {
        event,
        src
      },
      cssClass: "full-modal"
    });
    await modal.present();

    try {
      const data = await modal.onDidDismiss();
      if (data.data) {
        return data.data;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  async webcamImage(
    name: string = "default",
    crop?: boolean
  ): Promise<Blob | boolean> {
    const modal = await this.modal.create({
      component: WebcamModal,
      cssClass: "full-modal"
    });
    await modal.present();

    try {
      const data = await modal.onDidDismiss();
      if (data.data) {
        let src = data.data;
        if (crop) {
          src = await this.cropImage("", src);
        }
        if (typeof src == "string") {
          const blob = await this.urltoBlob(src);
          return blob;
        } else {
          return;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  base64toBlob(dataURI: string) {
    const bytes: string = atob(dataURI.split(",")[1]);
    // .replace(/^data:image\/(png|jpg|jpeg|\*);charset=utf-8;base64,/, "")
    const byteNumbers = new Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      byteNumbers[i] = bytes.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: "image/png" });
  }

  async urltoBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }

  fileToBase64(file: Blob | File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  getBase64Image(imgUrl: string): Promise<string> {
    return new Promise<string>(resolve => {
      const img = new Image();
      img.src = imgUrl;
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        // resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        resolve(dataURL);
      };
    });
  }

  async getDataURI(url: string): Promise<string> {
    const blob = await this.urltoBlob(url);
    return await this.fileToBase64(blob);
  }

  async test() {
    const alert = await this.alert.create({
      header: "Función aún no disponible",
      message: "Esta acción se encuentra aún en desarrollo.",
      buttons: ["Gracias por avisar"]
    });

    await alert.present();
  }

  share(url = "") {
    if (!url) {
      url = "https://frikiradar.com";
    }

    const referrer = this.auth.currentUserValue
      ? this.auth.currentUserValue.username
      : "app";

    if (this.platform.is("hybrid")) {
      const options = {
        message:
          "Conoce a personas con tus mismos gustos con FrikiRadar, la app de citas y chat para frikis.", // not supported on some apps (Facebook, Instagram)
        subject: "FrikiRadar, la app de citas y chat para frikis", // fi. for email
        url: `${url}?referrer=${referrer}`,
        chooserTitle: "Elige una app y ayúdanos a seguir creciendo" // Android only, you can override the default share sheet title,
      };

      this.socialSharing.shareWithOptions(options);
    } else if (window.navigator && window.navigator["share"]) {
      window.navigator["share"]({
        title: "FrikiRadar, la app de citas y chat para frikis",
        text:
          "Conoce a personas con tus mismos gustos con FrikiRadar, la app de citas y chat para frikis.",
        url: `${url}?referrer=${referrer}`
      })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
    }
  }

  niceDate(time: string) {
    const date = new Date(time);
    const hours = this.format_two_digits(date.getHours());
    const minutes = this.format_two_digits(date.getMinutes());

    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor(diff / 86400);

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
      return "";
    }

    return (
      (daydiff === 0 &&
        ((diff < 300 && "ahora mismo") ||
          (diff < 3600 && "hace " + Math.floor(diff / 60) + " minutos") ||
          (diff < 7200 && "hace 1 hora") ||
          (diff < 86400 && "hace " + Math.floor(diff / 3600) + " horas"))) ||
      (daydiff === 1 && "ayer a las " + hours + ":" + minutes) ||
      (daydiff < 14 && "hace " + daydiff + " días") ||
      (daydiff < 30 && "hace " + Math.ceil(daydiff / 7) + " semanas") ||
      (daydiff < 60 && "hace 1 mes")
    );
  }

  format_two_digits(n: string | number) {
    return n < 10 ? "0" + n : n;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

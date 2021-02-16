import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { AlertController, Platform } from "@ionic/angular";

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
    private crop: Crop,
    private webview: WebView,
    private camera: Camera
  ) {}

  async takePicture(
    mode?: string,
    crop?: boolean,
    name?: string
  ): Promise<File> {
    let image = await this.camera.getPicture({
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

    try {
      if (crop) {
        image = await this.crop.crop(image, {
          quality: 100,
          targetWidth: -1,
          targetHeight: -1
        });
      }
      const src = this.webview.convertFileSrc(image);
      const blob = (await this.urltoBlob(src)) as Blob;

      const blobFile: File = new File([blob], name ? name : "default" + ".png");
      return blobFile;
    } catch (e) {
      console.error("Error al recortar la imagen.", e);
    }
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

  urltoBlob(url: string) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      };
      xhr.open("GET", url);
      xhr.responseType = "blob"; // convert type
      xhr.send();
    });
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

  async test() {
    const alert = await this.alert.create({
      header: "Función aún no disponible",
      message: "Esta acción se encuentra aún en desarrollo.",
      buttons: ["Gracias por avisar"]
    });

    await alert.present();
  }

  share() {
    const referrer = this.auth.currentUserValue
      ? this.auth.currentUserValue.username
      : "app";

    if (this.platform.is("hybrid")) {
      const options = {
        message:
          "Conoce a personas con tus mismos gustos con FrikiRadar, la app de citas y chat para frikis.", // not supported on some apps (Facebook, Instagram)
        subject: "FrikiRadar, la app de citas y chat para frikis", // fi. for email
        url: `https://frikiradar.com?referrer=${referrer}`,
        chooserTitle: "Elige una app y ayúdanos a seguir creciendo" // Android only, you can override the default share sheet title,
      };

      this.socialSharing.shareWithOptions(options);
    } else if (window.navigator && window.navigator["share"]) {
      window.navigator["share"]({
        title: "FrikiRadar, la app de citas y chat para frikis",
        text:
          "Conoce a personas con tus mismos gustos con FrikiRadar, la app de citas y chat para frikis.",
        url: `https://frikiradar.com?referrer=${referrer}`
      })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
    }
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor(public http: HttpClient, private alert: AlertController) {}

  base64toBlob(b64Data: string) {
    const bytes: string = atob(b64Data.replace(/\s/g, ""));
    const byteNumbers = new Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      byteNumbers[i] = bytes.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: "image/png" });
  }

  blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
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
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  base64toBlob(b64Data: string) {
    const contentType =
      b64Data
        .split(",")[0]
        .split(":")[1]
        .split(";")[0] || "";
    const sliceSize = 1024;

    const byteCharacters = atob(b64Data.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }
}

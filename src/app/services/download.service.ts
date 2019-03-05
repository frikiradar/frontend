import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { UtilsService } from "./utils.service";

@Injectable({
  providedIn: "root"
})
export class DownloadService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient, private utils: UtilsService) {}

  async download(endpoint: string, id: number) {
    const params = new HttpParams();

    const blob = await this.http
      .get(`${this.apiUrl}${endpoint}/${id}`, {
        responseType: "blob",
        params
      })
      .toPromise();

    // return URL.createObjectURL(blob);
    return await this.utils.blobToBase64(blob);
  }
}

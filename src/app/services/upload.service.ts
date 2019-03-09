import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  async upload(endpoint: string, data: FormData) {
    const params = new HttpParams();

    const blob = await this.http
      .post(`${this.apiUrl}${endpoint}`, data, {
        responseType: "blob",
        params,
        reportProgress: true
      })
      .toPromise();

    return blob;
  }
}

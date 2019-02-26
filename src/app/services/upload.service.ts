import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  upload(endpoint: string, data: FormData) {
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true
    };

    return this.http.post(`${this.apiUrl}${endpoint}`, data, options);
  }
}

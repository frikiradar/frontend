import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  async upload(endpoint: string, data: FormData) {
    const params = new HttpParams();

    return await firstValueFrom(
      this.http.post(`${this.apiUrl}${endpoint}`, data, {
        params,
        reportProgress: true,
      })
    );
  }
}

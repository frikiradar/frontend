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

  async download(endpoint: string, id: number): Promise<string> {
    const params = new HttpParams();

    const download = await this.http
      .get<string>(`${this.apiUrl}${endpoint}/${id}`, {
        params
      })
      .toPromise();
    return download;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class RestService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  get(endpoint: string) {
    return firstValueFrom(
      this.http.get(`${this.apiUrl}${endpoint}`, httpOptions)
    );
  }

  post(endpoint: string, data?: any) {
    return firstValueFrom(
      this.http.post(
        `${this.apiUrl}${endpoint}`,
        JSON.stringify(data),
        httpOptions
      )
    );
  }

  put(endpoint: string, data) {
    return firstValueFrom(
      this.http.put(
        `${this.apiUrl}${endpoint}`,
        JSON.stringify(data),
        httpOptions
      )
    );
  }

  delete(endpoint: string) {
    if (!localStorage.getItem("currentUser")) {
      return;
    }

    return firstValueFrom(
      this.http.delete(`${this.apiUrl}${endpoint}`, httpOptions)
    );
  }
}

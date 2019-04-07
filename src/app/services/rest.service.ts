import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class RestService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  get(endpoint: string) {
    return this.http.get(`${this.apiUrl}${endpoint}`, httpOptions);
  }

  post(endpoint: string, data) {
    return this.http.post(
      `${this.apiUrl}${endpoint}`,
      JSON.stringify(data),
      httpOptions
    );
  }

  put(endpoint: string, data) {
    if (!localStorage.getItem("currentUser")) {
      return;
    }

    return this.http.put(
      `${this.apiUrl}${endpoint}`,
      JSON.stringify(data),
      httpOptions
    );
  }

  delete(endpoint: string) {
    if (!localStorage.getItem("currentUser")) {
      return;
    }

    return this.http.delete(`${this.apiUrl}${endpoint}`, httpOptions);
  }
}

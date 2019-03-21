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
    return new Promise(resolve => {
      this.http.get(`${this.apiUrl}${endpoint}`).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        }
      );
    });
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

    return this.http.put(`${this.apiUrl}${endpoint}`, JSON.stringify(data), {
      headers: httpOptions.headers.set(
        "Authorization",
        `Bearer ${JSON.parse(localStorage.getItem("currentUser")).token}`
      )
    });
  }
}

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
  private root = environment.root;

  constructor(public http: HttpClient) {}

  get(endpoint: string) {
    return new Promise(resolve => {
      this.http.get(`${this.root}/${endpoint}`).subscribe(
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
    return this.http.post(`${this.root}/${endpoint}`, JSON.stringify(data), {
      headers: new HttpHeaders().set("Authorization", "token"),
      params: new HttpParams().set("id", "3")
    });
  }

  put(endpoint: string, data) {
    return this.http.put(`${this.root}/${endpoint}`, JSON.stringify(data), {
      headers: new HttpHeaders().set("Authorization", "token"),
      params: new HttpParams().set("id", "3")
    });
  }
}

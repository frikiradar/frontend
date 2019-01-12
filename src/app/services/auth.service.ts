import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private root = environment.root;

  constructor(public http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post(`${this.root}login`, { username, password }, httpOptions)
      .pipe(
        map((r: { token: string }) => localStorage.setItem("token", r.token))
      );
  }

  register(username: string, email: string, password: string) {
    return this.http
      .post(`${this.root}register`, { username, email, password }, httpOptions)
      .pipe(
        map((r: { token: string }) => localStorage.setItem("token", r.token))
      );
  }

  logout() {
    return new Promise((resolve, reject) => {
      httpOptions.headers.append("X-Auth-Token", localStorage.getItem("token"));

      this.http.post(`${this.root}/logout`, {}, httpOptions).subscribe(
        res => {
          localStorage.clear();
        },
        err => {
          reject(err);
        }
      );
    });
  }
}

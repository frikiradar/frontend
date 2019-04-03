import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async login(username: string, password: string) {
    try {
      const token = await this.http
        .post(
          `${environment.root}api/login`,
          { username, password },
          httpOptions
        )
        .pipe(
          map((data: { token: string }) => {
            return data.token;
          })
        )
        .toPromise();
      return await this.getAuthUser(token);
    } catch (e) {
      throw new Error("Credenciales incorrectas");
    }
  }

  getAuthUser(token?: string) {
    if (!token) {
      token = JSON.parse(localStorage.getItem("currentUser")).token;
    }
    return this.http
      .get(`${environment.root}api/v1/user`, {
        headers: httpOptions.headers.set("Authorization", `Bearer ${token}`)
      })
      .pipe(
        map((user: User) => {
          user.token = token;
          localStorage.setItem("currentUser", JSON.stringify(user));
          return user;
        })
      )
      .toPromise();
  }

  setAuthUser(user: User) {
    if (!user.token) {
      user.token = JSON.parse(localStorage.getItem("currentUser")).token;
    }
    if (!user.avatar) {
      user.avatar = JSON.parse(localStorage.getItem("currentUser")).avatar;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  isAdmin(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user.roles.includes("ROLE_ADMIN");
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    sessionStorage.clear();
    this.currentUserSubject.next(undefined);
  }
}

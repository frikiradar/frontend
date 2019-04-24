import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private rest: RestService,
    private nav: NavController
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async register(
    username: string,
    email: string,
    password: string,
    birthday: string,
    gender: string
  ) {
    try {
      return await this.http
        .post(
          `${environment.root}api/register`,
          { username, email, password, birthday, gender },
          httpOptions
        )
        .toPromise();
    } catch (e) {
      throw new Error("Ya hay un usuario registrado con estos datos");
    }
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
      localStorage.setItem("currentUser", JSON.stringify({ token }));
      this.currentUserSubject.next({ token } as User);
      return await this.getAuthUser();
    } catch (e) {
      throw new Error("Credenciales incorrectas");
    }
  }

  getAuthUser() {
    const token = JSON.parse(localStorage.getItem("currentUser")).token;

    return this.rest
      .get("user")
      .pipe(
        map((user: User) => {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ ...user, token })
          );
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

  twoStepCode() {
    return this.rest.get("two-step");
  }

  verifyLogin(verification_code: string) {
    return this.rest
      .put("two-step", { verification_code })
      .toPromise() as Promise<User>;
  }

  isAdmin(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user.roles.includes("ROLE_ADMIN");
  }

  logout() {
    localStorage.removeItem("currentUser");
    sessionStorage.clear();
    this.currentUserSubject.next(undefined);
    this.nav.navigateRoot(["/login"]);
  }
}

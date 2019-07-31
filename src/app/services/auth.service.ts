import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Device as deviceInfo } from "@ionic-native/device/ngx";
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
    private nav: NavController,
    private device: deviceInfo
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
    gender: string,
    mailing: boolean
  ) {
    try {
      return await this.http
        .post(
          `${environment.root}api/register`,
          { username, email, password, birthday, gender, mailing },
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
    if (!this.currentUserValue) {
      return;
    }

    const token = this.currentUserValue.token;

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
    if (!user) {
      return false;
    }

    if (!user.token) {
      user.token = this.currentUserValue.token;
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

  requestPassword(username: string) {
    return this.http
      .post(`${environment.root}api/recover`, { username }, httpOptions)
      .toPromise();
  }

  recoverPassword(
    username: string,
    password: string,
    verification_code: string
  ) {
    return this.http
      .put(
        `${environment.root}api/recover`,
        {
          username,
          password,
          verification_code
        },
        httpOptions
      )
      .toPromise();
  }

  isAdmin(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user.roles.includes("ROLE_ADMIN");
  }

  async logout() {
    // Desactivamos las notificaciones
    this.rest.get(`turnoff-device/${this.device.uuid}`).toPromise();

    // Eliminamos la sesión y configuraciones
    localStorage.removeItem("currentUser");
    sessionStorage.clear();
    this.currentUserSubject.next(undefined);

    // Regresamos a la página de login
    this.nav.navigateRoot(["/login"]);
  }
}

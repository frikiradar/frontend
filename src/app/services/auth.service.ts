import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { BehaviorSubject, Observable, firstValueFrom } from "rxjs";
import { map } from "rxjs/operators";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { Platform } from "@ionic/angular";
import { Device as DevicePlugin } from "@capacitor/device";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private rest: RestService,
    private nav: NavController,
    private platform: Platform
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
    lovegender: string[],
    meet: string,
    referral: string
  ) {
    try {
      return await firstValueFrom(
        this.http.post(
          `${environment.root}api/register`,
          {
            username,
            email,
            password,
            birthday,
            gender,
            lovegender,
            meet,
            referral,
          },
          httpOptions
        )
      );
    } catch (e) {
      throw new Error(
        "Ya hay un usuario registrado con este nombre de usuario o email."
      );
    }
  }

  async login(username: string, password: string) {
    try {
      const token = await firstValueFrom(
        this.http
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
      );
      localStorage.setItem("currentUser", JSON.stringify({ token }));
      this.currentUserSubject.next({ token } as User);
      return await this.getAuthUser();
    } catch (e) {
      throw new Error(e);
    }
  }

  async checkUsername(
    username: User["username"]
  ): Promise<User["username"] | boolean> {
    try {
      const u = (await firstValueFrom(
        this.http.get(`${environment.root}api/username/${username}`)
      )) as User["username"];
      if (u === username) {
        return true;
      } else {
        return u;
      }
    } catch (e) {
      throw new Error("Error al comprobar el nombre de usuario");
    }
  }

  async getAuthUser() {
    if (!this.currentUserValue) {
      return;
    }

    const token = this.currentUserValue.token;

    return await firstValueFrom(
      this.rest.get("user").pipe(
        map((user: User) => {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ ...user, token })
          );
          return user;
        })
      )
    );
  }

  setAuthUser(user: User) {
    if (!user) {
      return false;
    }

    user = { ...this.currentUserValue, ...user };

    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  async twoStepCode() {
    return await firstValueFrom(this.rest.get("two-step"));
  }

  async verifyLogin(verification_code: string) {
    return (await firstValueFrom(
      this.rest.put("two-step", { verification_code })
    )) as Promise<User>;
  }

  async requestPassword(username: string) {
    return await firstValueFrom(
      this.http.post(
        `${environment.root}api/recover`,
        { username },
        httpOptions
      )
    );
  }

  async recoverPassword(
    username: string,
    password: string,
    verification_code: string
  ) {
    return await firstValueFrom(
      this.http.put(
        `${environment.root}api/recover`,
        {
          username,
          password,
          verification_code,
        },
        httpOptions
      )
    );
  }

  isAdmin(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user?.roles?.includes("ROLE_ADMIN");
  }

  isMaster(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user?.roles?.includes("ROLE_MASTER");
  }

  isPatreon(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user?.roles?.includes("ROLE_PATREON");
  }

  isDemo(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user?.roles?.includes("ROLE_DEMO");
  }

  isVerified(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return user.verified;
  }

  isAdult(birthday?: string) {
    if (!birthday) {
      birthday = this.currentUserValue?.birthday;
    }
    const today = Date.now();
    const date = new Date(birthday).getTime();
    const ms = today - date;
    const age = +(ms / 1000 / 3600 / 24 / 365).toFixed(0);

    return age >= 18;
  }

  async logout() {
    let uuid = null;
    if (this.platform.is("capacitor")) {
      uuid = (await DevicePlugin.getId()).identifier;
    } else {
      const fp = await FingerprintJS.load();
      const fingerprint = await fp.get();
      uuid = fingerprint.visitorId;
    }

    // Desactivamos las notificaciones
    if (uuid && this.currentUserValue) {
      try {
        await firstValueFrom(this.rest.get(`turnoff-device/${uuid}`));
      } catch (e) {
        console.error(e);
      }
    }

    // Eliminamos la sesión y configuraciones
    localStorage.clear();
    sessionStorage.clear();
    this.currentUserSubject.next(undefined);

    // Regresamos a la página de login
    this.nav.navigateRoot(["/login"]);
  }
}

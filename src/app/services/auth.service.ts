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
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

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
    referral: string,
    provider?: string,
    credential?: any
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
            provider,
            credential,
          },
          httpOptions
        )
      );
    } catch (e) {
      throw new Error(e);
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

  async loginWithProvider(provider: string, credential: string) {
    try {
      const token = await firstValueFrom(
        this.http
          .post(
            `${environment.root}api/login/google`,
            { provider, credential },
            httpOptions
          )
          .pipe(
            map((data: { token: string }) => {
              return data.token;
            })
          )
      );

      if (provider === "google") {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ google_id_token: credential, token })
        );
        this.currentUserSubject.next({
          google_token: credential,
          token,
        } as User);
      }
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

  async checkLogin(
    login: User["username"] | User["email"]
  ): Promise<User["username"] | User["email"] | boolean> {
    try {
      const l = (await firstValueFrom(
        this.http.get(`${environment.root}api/check-login/${login}`)
      )) as User["username"] | User["email"];
      if (l === login) {
        return true;
      } else {
        return l;
      }
    } catch (e) {
      throw new Error("Error al comprobar el login");
    }
  }

  checkGoogleLogin() {
    GoogleAuth.refresh()
      .then((data) => {
        if (data.accessToken) {
          // User is signed in
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.type === "userLoggedOut") {
          this.logout();
        }
      });
  }

  async getAuthUser() {
    if (!this.currentUserValue) {
      return;
    }

    const token = this.currentUserValue.token;
    const google_token = this.currentUserValue.google_token;

    return await firstValueFrom(
      this.rest.get("user").pipe(
        map((user: User) => {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ ...user, token, google_token })
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

  isPremium(user?: User) {
    if (!user) {
      user = this.currentUserValue;
    }
    return (
      user?.roles?.includes("ROLE_PREMIUM") ||
      user?.roles?.includes("ROLE_PATREON")
    );
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

    // Cerramos sesión de google
    await this.logoutGoogle();

    // Eliminamos la sesión y configuraciones
    localStorage.clear();
    sessionStorage.clear();
    this.currentUserSubject.next(undefined);

    // Regresamos a la página de login
    this.nav.navigateRoot(["/login"]);
  }

  async logoutGoogle() {
    await GoogleAuth.signOut();
  }
}

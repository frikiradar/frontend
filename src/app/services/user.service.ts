import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Base64 } from "@ionic-native/base64/ngx";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
import { AuthService } from "./auth.service";
import { DownloadService } from "./download.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private http: HttpClient,
    private rest: RestService,
    private uploadSvc: UploadService,
    private downloadSvc: DownloadService,
    private auth: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  async register(
    username: string,
    email: string,
    birthday: string,
    password: string
  ) {
    try {
      return await this.http
        .post(
          `${environment.root}api/register`,
          { username, email, birthday, password },
          httpOptions
        )
        .toPromise();
    } catch (e) {
      throw new Error("Ya hay un usuario registrado con estos datos");
    }
  }

  async getUser(id: User["id"]): Promise<User> {
    try {
      return (await this.rest.get(`user/${id}`)) as User;
    } catch (e) {
      throw new Error("No se puede obtener el usuario");
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      user = (await this.rest.put("user", user).toPromise()) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async uploadAvatar(file: File) {
    const formData: FormData = new FormData();
    formData.set("avatar", file);
    const avatar = await this.uploadSvc.upload("avatar", formData);
    const user = this.auth.currentUserValue;
    user.avatar = avatar;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return avatar;
  }

  async setCoordinates(longitude, latitude) {
    return await this.rest
      .put("coordinates", { longitude, latitude })
      .toPromise();
  }

  getRadarUsers(ratio: number) {
    return this.http.get<User[]>(`${environment.apiUrl}radar/${ratio}`);
  }

  getOrientations() {
    return [
      "Heterosexual",
      "Homosexual",
      "Bisexual",
      "Pansexual",
      "Queer",
      "Demisexual",
      "Sapiosexual",
      "Asexual"
    ];
  }

  getPronouns() {
    return ["El", "Ella", "Elle", "Elli"];
  }

  getRelationships() {
    return ["Monógama", "No-monógama"];
  }

  getStatus() {
    return ["Soltero", "Saliendo con alguien", "Pareja estable", "Casado"];
  }

  getGenders() {
    return [
      "Hombre",
      "Mujer",
      "Hombre transgénero",
      "Mujer transgénero",
      "Agénero",
      "Andrógino",
      "Género fluido",
      "Bigénero",
      "No-binario",
      "No conforme",
      "Pangénero",
      "Poligénero",
      "Intergénero"
    ];
  }

  getConnections() {
    return [
      "Amistad",
      "Sexo ocasional",
      "Amistad con derechos",
      "Pareja formal"
    ];
  }
}

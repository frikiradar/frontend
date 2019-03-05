import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
    private base64: Base64,
    private auth: AuthService
  ) {}

  async register(username: string, email: string, password: string) {
    try {
      return await this.http
        .post(
          `${environment.root}api/register`,
          { username, email, password },
          httpOptions
        )
        .toPromise();
    } catch (e) {
      throw new Error("Ya hay un usuario registrado con estos datos");
    }
  }

  async getUser(id: User["id"]): Promise<User> {
    try {
      const user = (await this.rest.get(`user/${id}`)) as User;
      user.avatar = await this.getAvatar(user.id);
      return user;
    } catch (e) {
      throw new Error("No se puede obtener el usuario");
    }
  }

  async updateUser(user: Partial<User>) {
    try {
      return await this.rest.put("user", user).toPromise();
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async uploadAvatar(file: File) {
    const formData: FormData = new FormData();
    formData.set("avatar", file);
    const avatar = await this.uploadSvc.upload("avatar", formData);
    const base64File = await this.base64.encodeFile(avatar);
    localStorage.setItem("avatar", base64File);
    return avatar;
  }

  async getAvatar(id: number, getFromCache = true) {
    const authId = this.auth.currentUserValue.id;
    try {
      if (localStorage.getItem("avatar") && getFromCache && authId === id) {
        return localStorage.getItem("avatar");
      } else {
        const avatar = await this.downloadSvc.download("avatar", id);
        if (id === authId) {
          localStorage.setItem("avatar", avatar);
        }

        return avatar;
      }
    } catch (e) {
      return "./assets/img/users/default.jpg";
    }
  }

  async setCoordinates(longitude, latitude) {
    return await this.rest
      .put("coordinates", { longitude, latitude })
      .toPromise();
  }

  async getRadarUsers(ratio: number) {
    const users = await this.http
      .get<User[]>(`${environment.apiUrl}radar/${ratio}`)
      .toPromise();
    users.map(async user => {
      user.avatar = await this.getAvatar(user.id);
      user.distance = Math.round(user.distance);
      user.age = Math.trunc(user.age);
    });

    return users;
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
    return ["Soltero", "Casado", "Saliendo con alguien"];
  }

  getGenders() {
    return [
      "Hombre cisgénero",
      "Mujer cisgénero",
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

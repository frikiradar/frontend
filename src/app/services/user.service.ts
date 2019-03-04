import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
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
    private downloadSvc: DownloadService
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
    return await this.uploadSvc.upload("avatar", formData);
  }

  async getAvatar(id: number) {
    try {
      // comprobar si pido el user de sesión y esta en localstorage sino
      // pedirlo al endpoint
      return await this.downloadSvc.download("avatar", id);
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
    users.map(user => {
      this.getAvatar(user.id).then(avatar => {
        user.avatar = avatar;
      });
    });

    console.log(users);
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

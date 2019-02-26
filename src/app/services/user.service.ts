import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
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
    private uploadSvc: UploadService
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
    try {
      const formData: FormData = new FormData();
      formData.set("avatar", file);

      return await this.uploadSvc.upload("avatar", formData).toPromise();
    } catch (e) {
      throw new Error("Error al subir el avatar");
    }
  }

  async setCoordinates(longitude, latitude) {
    return await this.rest
      .put("coordinates", { longitude, latitude })
      .toPromise();
  }

  getAll() {
    return this.http.get<User[]>(`${environment.root}/users`);
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

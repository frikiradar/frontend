import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
import { RestService } from "./rest.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient, private rest: RestService) {}

  async register(username: string, email: string, password: string) {
    try {
      return await this.rest
        .post("register", { username, email, password })
        .toPromise();
    } catch (e) {
      throw new Error("Ya hay un usuario registrado con estos datos");
    }
  }

  async updateUser(user: Partial<User>) {
    try {
      return await this.rest.put("user", user).toPromise();
    } catch (e) {
      throw new Error("Ya hay un usuario registrado con estos datos");
    }
  }

  async uploadAvatar(file: File) {
    const formData: FormData = new FormData();
    formData.append("avatar", file, file.name);
    try {
      return await this.rest.post("avatar", formData).toPromise();
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
}

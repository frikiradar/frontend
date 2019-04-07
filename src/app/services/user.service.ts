import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { User } from "./../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService
  ) {}

  async getUser(id: User["id"]): Promise<User> {
    try {
      return (await this.rest.get(`user/${id}`).toPromise()) as User;
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
    return this.rest.get(`radar/${ratio}`).toPromise() as Promise<User[]>;
  }

  activateUser(verification_code: string) {
    return this.rest
      .put("activation", { verification_code })
      .toPromise() as Promise<User>;
  }

  resendActivationEmail() {
    return this.rest.get("activation");
  }

  requestPassword(username: string) {
    return this.rest
      .post(`recover`, {
        username
      })
      .toPromise();
  }

  recoverPassword(
    username: string,
    password: string,
    verification_code: string
  ) {
    return this.rest
      .put(`recover`, {
        username,
        password,
        verification_code
      })
      .toPromise();
  }

  changePassword(old_password: string, new_password: string) {
    return this.rest
      .put("password", {
        old_password,
        new_password
      })
      .toPromise() as Promise<User>;
  }

  getLikes() {
    return this.rest.get("likes").toPromise() as Promise<User[]>;
  }

  like(id: User["id"]) {
    return this.rest.put("like", { user: id }).toPromise() as Promise<User>;
  }

  unlike(id: User["id"]) {
    return this.rest.delete(`like/${id}`).toPromise() as Promise<User>;
  }

  getBlocks() {
    return this.rest.get("blocks").toPromise() as Promise<User[]>;
  }

  block(id: User["id"], note?: string) {
    return this.rest.put("block", { user: id, note }).toPromise();
  }

  unblock(id: User["id"]) {
    return this.rest.delete(`block/${id}`).toPromise() as Promise<User[]>;
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

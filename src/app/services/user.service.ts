import { Injectable } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";

import { User } from "./../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";

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
    const user = (await this.uploadSvc.upload("avatar", formData)) as User;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }

  async setAvatar(src: SafeResourceUrl) {
    try {
      const user = (await this.rest
        .put("avatar", { avatar: src })
        .toPromise()) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async deleteAvatar(src: SafeResourceUrl) {
    try {
      const user = (await this.rest
        .put("delete-avatar", { avatar: src })
        .toPromise()) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async setCoordinates(longitude, latitude) {
    return (await this.rest
      .put("coordinates", { longitude, latitude })
      .toPromise()) as Promise<User>;
  }

  getRadarUsers(page = 1) {
    return this.rest.put("radar", { page }).toPromise() as Promise<User[]>;
  }

  searchUsers(query: string, order: "distance" | "match", page: number) {
    return this.rest
      .post(`search?page=${page}`, { query, order })
      .toPromise() as Promise<User[]>;
  }

  activateUser(verification_code: string) {
    return this.rest
      .put("activation", { verification_code })
      .toPromise() as Promise<User>;
  }

  resendActivationEmail() {
    return this.rest.get("activation");
  }

  disableUser(password: string, note: string) {
    return this.rest
      .put("disable", {
        password,
        note
      })
      .toPromise() as Promise<User>;
  }

  changePassword(old_password: string, new_password: string) {
    return this.rest
      .put("password", {
        old_password,
        new_password
      })
      .toPromise() as Promise<User>;
  }

  changeEmail(old_email: string, new_email: string) {
    return this.rest
      .put("email", {
        old_email,
        new_email
      })
      .toPromise() as Promise<User>;
  }

  changeUsername(new_username: string) {
    return this.rest
      .put("username", {
        new_username
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

  hide(id: User["id"]) {
    return this.rest.put("hide", { user: id }).toPromise();
  }

  addCredits(credits: number) {
    return this.rest.post("credits", { credits }).toPromise() as Promise<User>;
  }

  insertCoin(credits: number) {
    return this.rest.put("insertcoin", { credits }).toPromise() as Promise<
      User
    >;
  }

  subscribePremim(days: number) {
    return this.rest.post("premium", { days }).toPromise() as Promise<User>;
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
      "Mujer",
      "Hombre",
      "Mujer transgénero",
      "Hombre transgénero",
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

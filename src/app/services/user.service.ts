import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ToastController } from "@ionic/angular";
import { environment } from "src/environments/environment";

import { User } from "./../models/user";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { firstValueFrom } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService,
    private toast: ToastController,
    private http: HttpClient
  ) {}

  async getUser(id: User["id"] | User["username"]): Promise<User> {
    try {
      return (await firstValueFrom(this.rest.get(`user/${id}`))) as User;
    } catch (e) {
      throw new Error("No se puede obtener el usuario");
    }
  }

  async getPublicUser(id: User["id"] | User["username"]): Promise<User> {
    try {
      return (await firstValueFrom(
        this.http.get(`${environment.root}api/public-user/${id}`, httpOptions)
      )) as User;
    } catch (e) {
      throw new Error("No se puede obtener el usuario");
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      user = (await firstValueFrom(this.rest.put("user", user))) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async uploadAvatar(file: Blob) {
    const formData: FormData = new FormData();
    formData.set("avatar", file);
    const user = (await this.uploadSvc.upload("avatar", formData)) as User;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }

  async setAvatar(src: SafeResourceUrl) {
    try {
      const user = (await firstValueFrom(
        this.rest.put("avatar", { avatar: src })
      )) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async deleteAvatar(src: SafeResourceUrl) {
    try {
      const user = (await firstValueFrom(
        this.rest.put("delete-avatar", { avatar: src })
      )) as User;
      this.auth.setAuthUser(user);
      return user;
    } catch (e) {
      throw new Error("No se puede actualizar el usuario");
    }
  }

  async setCoordinates(longitude, latitude) {
    return (await firstValueFrom(
      this.rest.put("coordinates", { longitude, latitude })
    )) as Promise<User["coordinates"]>;
  }

  getRadarUsers(
    page = 1,
    ratio = -1,
    options?: { identity: boolean; range: boolean; connection: boolean }
  ) {
    return firstValueFrom(
      this.rest.put("radar", { page, ratio, options })
    ) as Promise<User[]>;
  }

  searchUsers(query: string, order: "distance" | "match", page: number) {
    return firstValueFrom(
      this.rest.post(`search?page=${page}`, { query, order })
    ) as Promise<User[]>;
  }

  searchUsersBySlug(slug: string, order: "distance" | "match", page: number) {
    return firstValueFrom(
      this.rest.post(`search-by-slug?page=${page}`, { slug, order })
    ) as Promise<User[]>;
  }

  searchUsernames(query: string) {
    return firstValueFrom(
      this.rest.get(`search-usernames/${query}`)
    ) as Promise<User[]>;
  }

  activateUser(verification_code: string) {
    return firstValueFrom(
      this.rest.put("activation", { verification_code })
    ) as Promise<User>;
  }

  async resendActivationEmail() {
    return await firstValueFrom(this.rest.get("activation"));
  }

  disableUser(password: string, note: string) {
    return firstValueFrom(
      this.rest.put("disable", {
        password,
        note,
      })
    ) as Promise<User>;
  }

  removeAccount(password: string, note: string) {
    return firstValueFrom(
      this.rest.put("remove-account", {
        password,
        note,
      })
    ) as Promise<User>;
  }

  changePassword(old_password: string, new_password: string) {
    return firstValueFrom(
      this.rest.put("password", {
        old_password,
        new_password,
      })
    ) as Promise<User>;
  }

  changeEmail(old_email: string, new_email: string) {
    return firstValueFrom(
      this.rest.put("email", {
        old_email,
        new_email,
      })
    ) as Promise<User>;
  }

  changeUsername(new_username: string) {
    return firstValueFrom(
      this.rest.put("username", {
        new_username,
      })
    ) as Promise<User>;
  }

  getLikes() {
    return firstValueFrom(this.rest.get("likes")) as Promise<User[]>;
  }

  like(id: User["id"]) {
    return firstValueFrom(this.rest.put("like", { user: id })) as Promise<User>;
  }

  unlike(id: User["id"]) {
    return firstValueFrom(this.rest.delete(`like/${id}`)) as Promise<User>;
  }

  getBlocks() {
    return firstValueFrom(this.rest.get("blocks")) as Promise<User[]>;
  }

  block(id: User["id"], note?: string) {
    return firstValueFrom(this.rest.put("block", { user: id, note }));
  }

  unblock(id: User["id"]) {
    return firstValueFrom(this.rest.delete(`block/${id}`)) as Promise<User[]>;
  }

  report(id: User["id"], note?: string) {
    return firstValueFrom(this.rest.put("report", { user: id, note }));
  }

  getHides() {
    return firstValueFrom(this.rest.get("hides")) as Promise<User[]>;
  }

  hide(id: User["id"]) {
    return firstValueFrom(this.rest.put("hide", { user: id }));
  }

  view(id: User["id"]) {
    firstValueFrom(this.rest.put("view", { user: id }));
  }

  unhide(id: User["id"]) {
    return firstValueFrom(this.rest.delete(`hide/${id}`)) as Promise<User[]>;
  }

  async showRole(user: User) {
    let message = "";
    if (user.roles?.includes("ROLE_ADMIN")) {
      message = "Administrador";
    } else if (user.roles?.includes("ROLE_MASTER")) {
      message = "Moderador";
    } else if (user.roles?.includes("ROLE_PATREON")) {
      message = "Patreon";
    } else if (user.roles.includes("ROLE_DEMO")) {
      message = "FrikiBot";
    } else if (user.verified) {
      message = "Usuario verificado";
    }

    (
      await this.toast.create({
        message,
        duration: 1500,
        position: "middle",
        color: this.getRoleColor(user),
      })
    ).present();
  }

  getRoleColor(user?: User) {
    if (!user) {
      user = this.auth.currentUserValue;
    }

    if (user.roles.includes("ROLE_ADMIN")) {
      return "danger";
    } else if (user.roles.includes("ROLE_MASTER")) {
      return "tertiary";
    } else if (user.roles.includes("ROLE_PATREON")) {
      return "patreon";
    } else if (user.roles.includes("ROLE_DEMO")) {
      return "medium";
    } else if (user.verified) {
      return "secondary";
    }
    return "light";
  }

  getRoleIcon(user?: User) {
    if (!user) {
      user = this.auth.currentUserValue;
    }

    if (user) {
      const roleIconMap = {
        ROLE_ADMIN: "shield-checkmark",
        ROLE_MASTER: "shield-checkmark",
        ROLE_PATREON: "/assets/icon/patreon_coral.svg",
        ROLE_DEMO: "/assets/icon/smart_toy_white_24dp.svg",
      };

      for (let role in roleIconMap) {
        if (user.roles.includes(role)) {
          return roleIconMap[role];
        }
      }

      if (user.verified) {
        return "checkmark-circle";
      }
    }

    return false;
  }

  async linkToPatreon(code: string) {
    await firstValueFrom(this.rest.put("link-patreon", { oauth_code: code }));
  }

  async unsubscribe(code: string) {
    try {
      return firstValueFrom(
        this.http.get(`${environment.root}api/unsubscribe/${code}`, httpOptions)
      );
    } catch (e) {
      throw new Error("Error al desuscribirse");
    }
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
      "Asexual",
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
      "Intergénero",
    ];
  }

  getConnections() {
    return [
      "Amistad",
      "Sexo ocasional",
      "Amistad con derechos",
      "Pareja formal",
    ];
  }

  getLanguages() {
    // Listado de idiomas principales para la aplicación
    return [
      { key: "es", name: "Español" },
      { key: "en", name: "Inglés" },
      { key: "ja", name: "Japonés" },
      { key: "ko", name: "Coreano" },
      { key: "zh", name: "Chino" },
      { key: "pt", name: "Portugués" },
      { key: "fr", name: "Francés" },
      { key: "de", name: "Alemán" },
      { key: "it", name: "Italiano" },
      { key: "ru", name: "Ruso" },
      { key: "ca", name: "Catalán/Valenciano/Balear" },
      { key: "eu", name: "Euskera" },
      { key: "gl", name: "Gallego" },
      { key: "sv", name: "Sueco" },
      { key: "no", name: "Noruego" },
      { key: "da", name: "Danés" },
      { key: "fi", name: "Finés" },
      { key: "pl", name: "Polaco" },
      { key: "ro", name: "Rumano" },
      { key: "ar", name: "Árabe" },
    ];
  }
}

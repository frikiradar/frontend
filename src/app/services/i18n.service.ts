import { Injectable } from "@angular/core";
import es from "../i18n/es.json";
import en from "../i18n/en.json";
import { Config, ConfigService } from "./config.service";
import { RestService } from "./rest.service";
import { User } from "../models/user";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class I18nService {
  private texts: { [key: string]: string } = {};

  constructor(
    private rest: RestService,
    private config: ConfigService,
    private auth: AuthService
  ) {}

  async init() {
    this.texts = await this.getLanguage();
  }

  async getLanguage(): Promise<{ [key: string]: string }> {
    let configLanguage = undefined;
    if (this.auth.currentUserValue) {
      configLanguage = this.auth.currentUserValue.config["language"];
    }
    if (!configLanguage) {
      configLanguage = (await this.config.get(
        "language"
      )) as Config["language"];
    }
    if (configLanguage) {
      return configLanguage === "es" ? es : en;
    } else {
      const navigatorLanguage = navigator.language;

      const spanishVariants = ["es", "ca", "eu", "gl", "val"];
      const language = navigatorLanguage.split("-")[0];
      if (spanishVariants.includes(language)) {
        configLanguage = "es";
      } else {
        configLanguage = "en";
      }

      this.config.set("language", configLanguage);
      return configLanguage === "es" ? es : en;
    }
  }

  async setLanguage(language: string) {
    const user = (await this.rest.put("language-config", { language })) as User;
    this.auth.setAuthUser(user);
  }

  changeLanguage(language: string) {
    this.config.set("language", language);
    this.texts = language === "es" ? es : en;
    window.location.reload();
  }

  translate(key: string, variables: { [key: string]: string } = {}): string {
    let text = this.texts[key] || key;
    for (let variableKey in variables) {
      text = text.replace(`%{${variableKey}}%`, variables[variableKey]);
    }
    return text;
  }
}

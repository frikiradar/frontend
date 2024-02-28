import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Config, ConfigService } from "./config.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class I18nService {
  private texts: { [key: string]: { [key: string]: string } } = {};
  private currentLanguage: string;

  constructor(
    private config: ConfigService,
    private auth: AuthService,
    private http: HttpClient
  ) {}

  async init() {
    this.texts["es"] = await this.loadTranslations("es");
    this.texts["en"] = await this.loadTranslations("en");
    this.currentLanguage = await this.getLanguage();
  }

  async loadTranslations(language: string): Promise<{ [key: string]: string }> {
    const translations = await firstValueFrom(
      this.http.get<{ [key: string]: string }>(`./assets/i18n/${language}.json`)
    );
    return translations;
  }

  async getLanguage(): Promise<string> {
    let configLanguage = undefined;
    if (this.auth.currentUserValue) {
      configLanguage = this.auth.currentUserValue.config["language"];
    } else {
      configLanguage = (await this.config.get(
        "language"
      )) as Config["language"];
    }

    if (!configLanguage) {
      const navigatorLanguage = navigator.language;

      const spanishVariants = ["es", "ca", "eu", "gl", "val"];
      const language = navigatorLanguage.split("-")[0];
      if (spanishVariants.includes(language)) {
        configLanguage = "es";
      } else {
        configLanguage = "en";
      }

      await this.config.set("language", configLanguage);
    }

    return configLanguage;
  }

  async setLanguage(language: string) {
    this.currentLanguage = language;
    this.config.set("language", language);
  }

  translate(key: string, variables: { [key: string]: string } = {}): string {
    let text = this.texts[this.currentLanguage][key] || key;
    for (let variableKey in variables) {
      text = text.replace(`%{${variableKey}}%`, variables[variableKey]);
    }
    return text;
  }
}

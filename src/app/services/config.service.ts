import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { Chat } from "../models/chat";
import { Page } from "../models/page";
import { Story } from "../models/story";
import { User } from "../models/user";
import { firstValueFrom } from "rxjs";

export interface Config {
  openTimes?: number;
  review?: boolean;
  tutorial?: boolean;
  radar_config?: {
    view?: "cards" | "list";
    range?: number;
    extended?: boolean;
    options?: {
      identity: boolean;
      range: boolean;
      connection: boolean;
      online: boolean;
      worldwide: boolean;
      fake_location: boolean;
    };
    location?: {
      city: string;
      country: string;
    };
  };
  radarAdv?: boolean;
  maintenance?: boolean;
  min_version?: string;
  version?: string;
  chat?: boolean;
  push_url?: string;
  geolocation?: boolean;
  chats?: Chat[];
  radar?: User[];
  pages?: Page[];
  stories?: Story[];
  theme?:
    | "dark"
    | "light"
    | "cyberpunk"
    | "black"
    | "fire"
    | "strawberries-and-cream"
    | "transparent";
  rules?: boolean;
  language?: "es" | "en";
}
@Injectable({
  providedIn: "root",
})
export class ConfigService {
  private root = environment.root;

  constructor(public http: HttpClient) {}

  async getConfig(force?: boolean): Promise<Config> {
    let config = JSON.parse(localStorage.getItem("config"));
    if (force || JSON.parse(localStorage.getItem("config")) === undefined) {
      config = (await firstValueFrom(
        this.http.get(`${this.root}api/config`)
      )) as Config;
      this.setConfig(config);
    }

    if (!config) {
      config = {};
    }

    return config;
  }

  async get(parameter: keyof Config) {
    const config = await this.getConfig();
    return config[parameter];
  }

  async setConfig(config: Config) {
    let currentConfig = await this.getConfig();
    if (!currentConfig) {
      currentConfig = {};
    }
    config = { ...currentConfig, ...config };
    localStorage.setItem("config", JSON.stringify(config));
  }

  async set(parameter: keyof Config, value: any) {
    let config = await this.getConfig();
    if (!config) {
      config = {};
    }
    (config as any)[parameter] = value;
    await this.setConfig(config);
  }
}

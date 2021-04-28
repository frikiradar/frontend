import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { Chat } from "../models/chat";
import { Page } from "../models/page";
import { Room } from "../models/room";
import { User } from "../models/user";

export interface Config {
  openTimes?: number;
  review?: boolean;
  radarView?: "view" | "list";
  radarAdv?: boolean;
  maintenance?: boolean;
  min_version?: string;
  version?: string;
  chat?: boolean;
  push_url?: string;
  geolocation?: boolean;
  patreon?: string;
  rooms?: Room[];
  chats?: Chat[];
  radar?: User[];
  pages?: Page[];
}
@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private root = environment.root;

  constructor(public http: HttpClient) {}

  async getConfig(force?: boolean): Promise<Config> {
    let config = JSON.parse(localStorage.getItem("config"));
    if (force || JSON.parse(localStorage.getItem("config")) === undefined) {
      config = (await this.http
        .get(`${this.root}api/config`)
        .toPromise()) as Config;
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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

export interface Config {
  openTimes: number;
  review: boolean;
  radarAdv: boolean;
  maintenance: boolean;
  min_version: string;
  chat: boolean;
  push_url: string;
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

    return config;
  }

  async setConfig(config: Config) {
    const currentConfig = await this.getConfig();
    config = { ...currentConfig, ...config };
    localStorage.setItem("config", JSON.stringify(config));
  }
}

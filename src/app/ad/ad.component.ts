import { Component, Input, OnInit } from "@angular/core";

import { Ad } from "../models/ad";
import { UrlService } from "../services/url.service";
import { AdService } from "../services/ad.service";

@Component({
  selector: "app-ad",
  templateUrl: "./ad.component.html",
  styleUrls: ["./ad.component.scss"],
})
export class AdComponent implements OnInit {
  @Input() ad: Ad;

  constructor(private urlSvc: UrlService, private adSvc: AdService) {}

  ngOnInit() {}

  async openUrl() {
    this.urlSvc.openUrl(this.ad.url);
    this.adSvc.clickAd(this.ad);
    return false;
  }

  async close() {
    // Al intentar cerrar debe salir un mensaje de que pagues!
  }
}

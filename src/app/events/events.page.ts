import { Component, OnInit } from "@angular/core";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"]
})
export class EventsPage implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}

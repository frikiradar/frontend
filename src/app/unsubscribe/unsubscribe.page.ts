import { UserService } from "src/app/services/user.service";

import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-unsubscribe",
  templateUrl: "./unsubscribe.page.html",
  styleUrls: ["./unsubscribe.page.scss"],
})
export class UnsubscribePage implements OnInit {
  constructor(private route: ActivatedRoute, private userSvc: UserService) {}

  public title = "";
  public text = "";

  async ngOnInit() {
    const code = this.route.snapshot.paramMap.get("code");
    try {
      await this.userSvc.unsubscribe(code);
      this.title = "Te has dado de baja correctamente :(";
      this.text =
        "Ya no recibirás más notificaciones promocionales o informativas de FrikiRadar a tu correo electrónico. Recuerda que puedes volver a suscribirte de nuevo en cualquier momento desde la configuración de FrikiRadar.";
    } catch (e) {
      this.title = "No se pudo dar de baja :)";
      this.text =
        "Por favor, responde al correo electrónico que te enviamos indicando que te demos de baja manualmente. Gracias.";
    }
  }
}

import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Vibration } from "@ionic-native/vibration/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  Platform,
  PopoverController,
  ToastController
} from "@ionic/angular";
import { pulse } from "ng-animate";

import { User } from "../models/user";
import { AdmobService } from "../services/admob.service";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";
import { InsertCoinModal } from "./../insert-coin/insert-coin.modal";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  animations: [trigger("pulse", [transition("* => *", useAnimation(pulse))])]
})
export class ProfilePage implements OnInit {
  public user: User;
  public avatar: SafeResourceUrl;
  public loading = true;
  public pulse: any;

  constructor(
    public popover: PopoverController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public utils: UtilsService,
    private nav: NavController,
    private toast: ToastController,
    private vibration: Vibration,
    private alert: AlertController,
    private auth: AuthService,
    private modal: ModalController,
    private admobSvc: AdmobService,
    private platform: Platform
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    try {
      this.loading = true;
      this.user = await this.userSvc.getUser(+id);
      if (this.user.avatar) {
        this.avatar = this.user.avatar;
      }
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }

  getTagsCategory(category: string) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }

  async showChat() {
    if (this.user.chat && !this.user.block) {
      this.router.navigate(["/chat", this.user.id]);
    } else {
      if (
        this.user.match > 0 ||
        this.user.from_like ||
        this.auth.isVerified()
      ) {
        const data = await this.doAction();
        if (data) {
          this.router.navigate(["/chat", this.user.id]);
        }
      } else {
        const alert = await this.alert.create({
          header: "No puedes iniciar un chat con esta persona",
          message: `Para poder iniciar una conversación es necesario tener temas de conversación en común o haber recibido su kokoro ❤️.`,
          buttons: ["Entendido, gracias!"]
        });

        await alert.present();
      }
    }
  }

  async switchLike() {
    if (!this.user.like) {
      const data = await this.doAction();
      if (data) {
        this.vibration.vibrate(50);
        this.user = await this.userSvc.like(this.user.id);
        if (
          this.user.block_messages ||
          !this.user.match ||
          !this.auth.isVerified()
        ) {
          (
            await this.toast.create({
              message: `¡Le has entregado tu kokoro a ${this.user.name}! No podrás iniciar un chat hasta que te entregue el suyo también.`,
              duration: 5000,
              position: "middle"
            })
          ).present();
        } else {
          (
            await this.toast.create({
              message: `¡Le has entregado tu kokoro a ${this.user.name}!`,
              duration: 5000,
              position: "middle"
            })
          ).present();
        }
      }
    } else {
      this.user = await this.userSvc.unlike(this.user.id);
      (
        await this.toast.create({
          message: `Le has retirado tu kokoro a ${this.user.name}`,
          duration: 5000,
          position: "middle"
        })
      ).present();
    }
  }

  async doAction() {
    return await this.insertCoinModal();
  }

  async insertCoinModal() {
    if (!this.auth.isPremium() /*&& this.platform.is("cordova")*/) {
      const modal = await this.modal.create({
        component: InsertCoinModal,
        cssClass: "insert-coin-modal"
      });
      await modal.present();
      const res = await modal.onDidDismiss();
      return res.data;
    } else if (this.auth.isPremium()) {
      return true;
    } else {
      const alert = await this.alert.create({
        header: "Funcionalidad no disponible",
        message:
          "Para poder disfrutar de esta funcionalidad es necesario entrar a FrikiRadar desde una app nativa o tener FrikiRadar ILIMITADO.",
        buttons: ["Entendido, gracias!"]
      });

      await alert.present();
    }
  }

  async showPromo() {
    this.admobSvc.RewardVideoAd();

    return new Promise(resolve => {
      this.admobSvc.adViewed.subscribe(adViewed => {
        if (adViewed !== undefined) {
          resolve(adViewed);
        }
      });
    }).then(es => es);
  }

  async hideProfile() {
    this.router.navigate(["/"]);
    const toast = await this.toast.create({
      message:
        "Has ocultado al usuario. No volverá a aparecerte como sugerencia.",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.router.navigate(["/profile/" + this.user.id]);
          }
        }
      ]
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      this.userSvc.hide(this.user.id);
    }
  }

  async blockUser() {
    const alert = await this.alert.create({
      header: `¿Quieres bloquear a ${this.user.username}?`,
      message:
        "Ya no podrá volver a verte, escribirte o interactuar contigo en FrikiRadar a menos que lo desbloquees. Si lo deseas puedes indicarnos el motivo del bloqueo.",
      inputs: [
        {
          name: "note",
          type: "text",
          placeholder: "Motivo del bloqueo (opcional)"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Bloquear",
          role: "block",
          handler: async data => {
            try {
              await this.userSvc.block(this.user.id, data.note);
              (
                await this.toast.create({
                  message: "Usuario bloqueado correctamente",
                  duration: 2000,
                  position: "bottom"
                })
              ).present();
              this.router.navigate(["/"]);
            } catch (e) {
              (
                await this.toast.create({
                  message: `Error al bloquear al usuario ${e}`,
                  duration: 2000,
                  position: "bottom"
                })
              ).present();
              alert.present();
            }
          }
        }
      ]
    });

    await alert.present();
    this.popover.dismiss();
  }

  back() {
    this.nav.back();
  }
}

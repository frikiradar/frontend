import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import {
  AlertController,
  NavController,
  NavParams,
  PopoverController
} from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";

import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { UtilsService } from "../services/utils.service";

const { Toast } = Plugins;

@Component({
  selector: "profile-popover",
  template: `
    <style>
      ion-list {
        background: white !important;
      }
    </style>
    <ion-list>
      <ion-item button lines="none" (click)="blockUser()"
        >Bloquear usuario</ion-item
      >
    </ion-list>
  `
})
export class ProfilePopover {
  private user: User;

  constructor(
    private popover: PopoverController,
    private alert: AlertController,
    private data: NavParams,
    private router: Router,
    private userSvc: UserService
  ) {
    this.user = this.data.get("user");
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
          placeholder: "Motivo del bloqueo"
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
              await Toast.show({
                text: `Usuario bloqueado correctamente`
              });
              this.router.navigate(["/"]);
            } catch (e) {
              await Toast.show({
                text: `Error al bloquear al usuario ${e}`
              });

              alert.present();
            }
          }
        }
      ]
    });

    await alert.present();
    this.popover.dismiss();
  }
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public user: User;
  public avatar: SafeResourceUrl;
  public showToolbar = false;
  public loading = true;

  constructor(
    public popover: PopoverController,
    private userSvc: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public utils: UtilsService,
    private nav: NavController
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
    this.router.navigate(["/chat", this.user.id]);
  }

  async switchLike() {
    this.user = this.user.like
      ? await this.userSvc.unlike(this.user.id)
      : await this.userSvc.like(this.user.id);

    if (this.user.like) {
      if (this.user.block_messages) {
        await Toast.show({
          text: `¡Le has entregado tu kokoro a ${
            this.user.username
          }! No podrás iniciar un chat con hasta que te entregue el suyo también.`,
          duration: "long"
        });
      } else {
        await Toast.show({
          text: `¡Le has entregado tu kokoro a ${this.user.username}!`
        });
      }
    } else {
      await Toast.show({
        text: `Le has retirado tu kokoro a ${this.user.username}`
      });
    }
  }

  async showPopover(event: Event) {
    const popover = await this.popover.create({
      component: ProfilePopover,
      event,
      translucent: true,
      componentProps: { user: this.user }
    });
    return await popover.present();
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
  }

  back() {
    this.nav.back();
  }
}

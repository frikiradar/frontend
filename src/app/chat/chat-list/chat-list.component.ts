import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Config, ConfigService } from "src/app/services/config.service";
import { Haptics } from "@capacitor/haptics";

import { User } from "../../models/user";
import { Chat } from "./../../models/chat";
import { AuthService } from "./../../services/auth.service";
import { ChatService } from "./../../services/chat.service";
import { NavService } from "src/app/services/navigation.service";
import { I18nService } from "src/app/services/i18n.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"],
})
export class ChatListComponent {
  @Output() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();
  @Input() selected: User["id"];
  @Input() message: Chat;

  public loading: boolean;
  public showOptions = false;
  public selectedChat: Chat;
  public archivedChats: Config["chats"];
  public allChats: Chat[] = null;
  public showingArchived = false;
  public chats: Chat[] = null;
  source: EventSource;

  constructor(
    private chatSvc: ChatService,
    public auth: AuthService,
    private toast: ToastController,
    private config: ConfigService,
    private cd: ChangeDetectorRef,
    public router: Router,
    private nav: NavService,
    private i18n: I18nService
  ) {}

  @HostListener("window:focus")
  async onFocus() {
    // await this.getLastMessages();
  }

  async ngAfterViewInit() {
    if (window.innerWidth > 991) {
      await this.getLastMessages(false);
    } else {
      await this.getLastMessages();
    }

    this.chatSvc.currentMessage.subscribe(async (message) => {
      if (!message) {
        return;
      }
      if (
        this.chats?.some((m) => m.conversationId === message?.conversationId)
      ) {
        const chatIndex = this.chats.findIndex(
          (m) => m.conversationId === message.conversationId
        );
        if (this.chats[chatIndex].writing && !message.writing) {
          this.chats[chatIndex].writing = false;
        }
        if (message.writing) {
          this.chats[chatIndex].writing = true;
          this.cd.detectChanges();
          setTimeout(() => {
            this.chats[chatIndex].writing = false;
            this.cd.detectChanges();
          }, 10000);
        }
        if (message.status == "online") {
          this.chats[chatIndex].user.last_login = new Date();
        } else if (message.status == "offline") {
          // this.chats[chatIndex].user.last_login = new Date(0);
        }
        if (
          message.id > this.chats[chatIndex].id ||
          message.tmp_id !== undefined
        ) {
          if (message.deleted) {
            this.chats[chatIndex].text = "";
          } else if (message.edited) {
            if (
              this.chats[chatIndex].id === message.id ||
              this.chats[chatIndex].tmp_id === message.tmp_id
            ) {
              this.chats[chatIndex].text = message.text;
            }
          } else {
            this.chats[chatIndex].text = message.text;
          }
          this.chats[chatIndex].time_creation = message.time_creation;
          this.chats[chatIndex].time_read = message.time_read;
          if (message.time_read) {
            if (this.chats[chatIndex].count > 0) {
              this.chats[chatIndex].count--;
            }
          } else if (message.fromuser.id !== this.auth.currentUserValue.id) {
            this.chats[chatIndex].count++;
          }
        }

        this.cd.detectChanges();
      } else if (!message.writing) {
        message.user =
          message.fromuser.id === this.auth.currentUserValue.id
            ? message.touser
            : message.fromuser;
        if (this.chats) {
          this.chats = [message, ...this.chats];
        }
      }
      this.chats?.sort((a, b) => {
        return (
          new Date(b.time_creation).getTime() -
          new Date(a.time_creation).getTime()
        );
      });

      if (
        this.chats.some((c) => c.conversationId === message.conversationId) ||
        !message.writing
      ) {
        this.setChats();
      }
    });
  }

  async getCachedMessages() {
    this.allChats = (await this.config.get("chats")) as Config["chats"];
    await this.setChats();
  }

  async getLastMessages(loading = true) {
    this.loading = loading;
    this.getCachedMessages();
    const allChats = await this.chatSvc.getChats();
    this.allChats = allChats;
    await this.setChats();
    this.loading = false;
  }

  async setChats() {
    this.config.set("chats", this.allChats);
    const config = await this.chatSvc.getChatsConfig();
    let chats = this.allChats?.filter((c) => {
      return !config?.some(
        (cc) => cc.conversationId === c.conversationId && cc.archived
      );
    });
    if (this.chats) {
      if (this.chats[0].id === chats[0].id) {
        this.chats[0].time_read = chats[0].time_read;
        this.chats[0].count = chats[0].count;
        if (this.chats[0].user) {
          this.chats[0].user.last_login = chats[0].user.last_login;
        }
      } else {
        // Actualizar cada user del listado, comprobando si algún user nuevo y añadiéndolo
        chats.forEach((chat) => {
          const existingChatIndex = this.chats.findIndex(
            (c) => c.conversationId === chat.conversationId
          );
          if (existingChatIndex !== -1) {
            // Actualiza la información del chat existente sin cambiar su posición
            this.chats[existingChatIndex] = {
              ...this.chats[existingChatIndex],
              ...chat,
            };
          } else {
            // Si el chat es nuevo y no está escribiendo, añádelo al final de la lista
            if (!chat.writing) {
              this.chats.push(chat);
            }
            // Si el chat es nuevo y está escribiendo, simplemente no lo añadas al principio
            // Esto evita interrumpir la lista de chats cuando un usuario está escribiendo
          }
        });
      }
    } else {
      this.chats = chats;
    }

    this.setArchivedChats();
    this.selectedChat = this.chats?.find((c) => +c.user?.id === this.selected);
    this.cd.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes?.selected?.currentValue) {
      this.selectedChat = this.chats?.find(
        (c) => +c.user.id === +changes?.selected?.currentValue
      );
    }
  }

  async showChat(id: User["id"]) {
    this.userChangeEvent.emit(id);
  }

  async deleteChat(chat: Chat) {
    this.selected = undefined;
    this.selectedChat = undefined;
    this.showOptions = false;
    const chats = this.chats;
    this.chats = this.chats.filter((c) => c.user.id !== chat.user.id);
    const toast = await this.toast.create({
      message: this.i18n.translate("you-have-deleted-chat") + chat.user.name,
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: this.i18n.translate("undo"),
          handler: () => {
            this.chats = chats;
          },
        },
      ],
    });
    toast.present();

    const log = await toast.onDidDismiss();
    if (log.role === "timeout") {
      await this.chatSvc.deleteChat(chat.user.id);
    }
  }

  async archiveChat(chat: Chat) {
    this.selected = undefined;
    this.selectedChat = undefined;
    this.showOptions = false;

    try {
      await this.chatSvc.archiveChat(chat, this.allChats);
      await this.setArchivedChats();
      this.chats = this.chats.filter((c) => c.user.id !== chat.user.id);
      const toast = await this.toast.create({
        message: this.i18n.translate("you-have-archived-chat") + chat.user.name,
        duration: 3000,
        position: "bottom",
      });
      toast.present();
    } catch (e) {
      console.log(e);
    }
  }

  async unarchiveChat(chat: Chat) {
    this.selected = undefined;
    this.selectedChat = undefined;
    this.showOptions = false;

    try {
      await this.chatSvc.unarchiveChat(chat, this.allChats);
      await this.setArchivedChats();
      this.chats = this.chats.filter((c) => c.user.id !== chat.user.id);
      const toast = await this.toast.create({
        message:
          this.i18n.translate("you-have-unarchived-chat") + chat.user.name,
        duration: 3000,
        position: "bottom",
      });
      toast.present();

      if (this.archivedChats.length === 0) {
        this.showUnarchivedChats();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async dragItem(event: any, id: number) {
    if (event.detail.ratio < -1.8) {
      await event.target.close();
      this.showChat(id);
    }
  }

  async openItem(event: any, id: number) {
    console.log(event);
    const element = event.target.parentElement;
    element.open("end");
  }

  async selectChat(chat: Chat) {
    if (chat.user.username !== "frikiradar") {
      this.selected = chat.user.id;
      this.selectedChat = chat;
      this.showOptions = true;
      await Haptics.vibrate({ duration: 1 });
    }
  }

  hideOptions() {
    this.showOptions = false;
    this.selectedChat = undefined;
  }

  async showArchivedChats() {
    this.showingArchived = true;
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats.filter((c) => {
      return config?.some(
        (cc) => cc.conversationId === c.conversationId && cc.archived
      );
    });
  }

  async showUnarchivedChats() {
    this.showingArchived = false;
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats.filter((c) => {
      return !config?.some(
        (cc) => cc.conversationId === c.conversationId && cc.archived
      );
    });
  }

  async setArchivedChats() {
    const config = await this.chatSvc.getChatsConfig();

    this.archivedChats = this.allChats?.filter((c) => {
      return config?.some(
        (cc) => cc.conversationId === c.conversationId && cc.archived
      );
    });
  }

  back() {
    this.nav.navigateRoot("/");
  }
}

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
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
import { App } from "@capacitor/app";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"],
})
export class ChatListComponent {
  @Output() userChangeEvent: EventEmitter<User["id"]> = new EventEmitter();

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
  ) {
    App.addListener("appStateChange", async ({ isActive }) => {
      if (isActive) {
        await this.getLastMessages(false);
      }
    });
  }

  async ngOnInit() {
    this.chatSvc.currentMessage.subscribe(async (message) => {
      if (!message) return;

      let chats = this.chats;
      const chatIndex = chats?.findIndex(
        (m) => m.conversationId === message.conversationId
      );

      if (chats && chatIndex !== -1) {
        const chat = chats[chatIndex];
        // Actualizar estado de escritura y programar su reinicio
        chat.writing = message.writing;
        if (message.writing) {
          this.cd.detectChanges();
          setTimeout(() => {
            chat.writing = false;
            this.cd.detectChanges();
          }, 10000);
        }

        // Actualizar último login si el usuario está en línea
        if (message.status === "online") {
          chat.user.last_login = new Date();
        } else if (message.status === "offline") {
          chat.user.last_login = message.user.last_login;
        }

        // Actualizar mensaje si es más reciente
        if (message.id !== chat.id) {
          chat.id = message.id;
          chat.text = message.deleted ? "" : message.text;
          chat.time_creation = message.time_creation;
          chat.time_read = message.time_read;

          // Incrementar contador si el mensaje es nuevo, no leído y para el usuario actual
          if (
            !message.time_read &&
            message.fromuser.id !== this.auth.currentUserValue.id
          ) {
            chat.count = (chat.count || 0) + 1;
          }
        } else if (message.edited) {
          // Actualizar mensaje si ha sido editado
          chat.text = message.text;
        } else if (message.time_read) {
          // Actualizar mensaje si ha sido leído
          chat.time_read = message.time_read;
          chat.count = 0;
        }
        chats[chatIndex] = chat;
        await this.setChats(chats);
      } else if (!message.writing) {
        // Añadir nuevo chat si no existe y el mensaje no es de escritura
        const newUser =
          message.fromuser.id === this.auth.currentUserValue.id
            ? message.touser
            : message.fromuser;
        const newChat = {
          ...message,
          user: newUser,
          count: message.fromuser.id !== this.auth.currentUserValue.id ? 1 : 0,
        };

        await this.setChats([newChat, ...(chats ?? [])]);
      }
    });

    this.chatSvc.selectedUserId$.subscribe(async (id) => {
      if (id && window.innerWidth > 991) {
        this.selectedChat = this.chats?.find((c) => c.user.id === id);
        await this.getLastMessages(!this.chats, false);
      } else if (!id) {
        this.selectedChat = undefined;

        if (window.innerWidth > 991) {
          await this.getLastMessages(!this.chats, false);
        } else {
          await this.getLastMessages(!this.chats, !this.chats);
        }
      }
    });
  }

  async getCachedMessages() {
    const chats = (await this.config.get("chats")) as Config["chats"];
    await this.setChats(chats);
  }

  async getLastMessages(cache = true, loading = true) {
    this.loading = loading;
    /*if (cache) {
      await this.getCachedMessages();
    }*/
    const allChats = await this.chatSvc.getChats();
    this.loading = false;
    this.cd.detectChanges();
    if (
      !this.allChats ||
      allChats[0].id !== this.allChats[0].id ||
      allChats[0].count !== this.allChats[0].count
    ) {
      if (this.allChats?.length > 0) {
        // Se ha desincronizado, reiniciamos conexión con servidor de chat
        this.chatSvc.socket.disconnect();
        await this.chatSvc.init();
      }

      const chats = this.sortChats(allChats);
      await this.setChats(chats);
    } else {
      // console.log(this.allChats[0], allChats[0]);
    }
  }

  async setChats(chats: Chat[]) {
    this.config.set("chats", chats);
    this.allChats = chats;
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats?.filter((c) => {
      return !config?.some(
        (cc) => cc.conversationId === c.conversationId && cc.archived
      );
    });

    this.cd.detectChanges();

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

      this.chats = this.sortChats(this.chats);
    } else {
      this.chats = chats;
    }

    this.setArchivedChats();
    /*this.selectedChat = this.chats?.find(
      (c) => +c.user?.id === this.chatSvc.selectedUserId.value
    );*/
    this.cd.detectChanges();
  }

  async showChat(id: User["id"]) {
    if (this.showOptions) {
      return;
    }
    this.hideOptions();
    this.userChangeEvent.emit(id);
  }

  async deleteChat(chat: Chat) {
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
    this.hideOptions();

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

  sortChats(chats: Chat[]) {
    chats = chats.sort((a, b) => {
      return (
        new Date(b.time_creation).getTime() -
        new Date(a.time_creation).getTime()
      );
    });

    return chats;
  }

  async openItem(event: any, id: number) {
    console.log(event);
    const element = event.target.parentElement;
    element.open("end");
  }

  async selectChat(chat: Chat) {
    if (chat.user.username !== "frikiradar") {
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
    this.selectedChat = undefined;
    this.nav.navigateRoot("/");
  }
}

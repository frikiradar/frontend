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

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"],
})
export class ChatListComponent {
  @Output() userChange: EventEmitter<User["id"]> = new EventEmitter();
  @Input() selected: User["id"];
  @Input() messageEvent: EventEmitter<Chat>;

  public loading = false;
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
    private nav: NavService
  ) {}

  @HostListener("window:focus")
  async onFocus() {
    await this.getLastMessages();
  }

  async ngAfterViewInit() {
    if (this.router.url === "/tabs/chat" || window.innerWidth > 991) {
      await this.getLastMessages();
    }
  }

  async ngOnInit() {
    this.messageEvent.subscribe((message) => {
      if (!message) {
        return;
      }
      if (
        this.chats?.some((m) => m.conversationId === message?.conversationId)
      ) {
        this.chats.map((m) => {
          if (m.conversationId === message.conversationId) {
            if (m.writing && !message.writing) {
              m.writing = false;
            }
            if (message.writing) {
              m.writing = true;
              this.cd.detectChanges();
              setTimeout(() => {
                m.writing = false;
                this.cd.detectChanges();
              }, 10000);
            } else if (message.id > m.id) {
              m.text = message.text;
              m.time_creation = message.time_creation;
              m.time_read = message.time_read;
              if (message.time_read) {
                if (m.count > 0) {
                  m.count--;
                }
              } else if (
                message.fromuser.id !== this.auth.currentUserValue.id
              ) {
                m.count++;
              }
            }
          }
        });
      } else if (!message.writing) {
        message.user =
          message.fromuser.id === this.auth.currentUserValue.id
            ? message.touser
            : message.fromuser;
        if (this.chats) {
          this.chats = [message, ...this.chats];
        }
      }
      if (!message.writing) {
        this.chats?.sort((a, b) => {
          return (
            new Date(b.time_creation).getTime() -
            new Date(a.time_creation).getTime()
          );
        });
        this.setChats();
      }
    });
  }

  async getCachedMessages() {
    this.allChats = (await this.config.get("chats")) as Config["chats"];
    await this.setChats();
  }

  async getLastMessages() {
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
        // TODO: Actualizar cada user del listado, comprobando si algún user nuevo y añadiendolo
        this.chats = chats;
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
    this.userChange.emit(id);
  }

  async deleteChat(chat: Chat) {
    this.selected = undefined;
    this.selectedChat = undefined;
    this.showOptions = false;
    const chats = this.chats;
    this.chats = this.chats.filter((c) => c.user.id !== chat.user.id);
    const toast = await this.toast.create({
      message: "Has eliminado el chat con " + chat.user.name,
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
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
        message: "Has archivado el chat con " + chat.user.name,
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
        message: "Has desarchivado el chat con " + chat.user.name,
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
    this.nav.navigateRoot("/tabs/chat");
  }
}

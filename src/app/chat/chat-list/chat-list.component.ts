import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from "@angular/core";
import { MenuController, ToastController } from "@ionic/angular";
import { Config, ConfigService } from "src/app/services/config.service";
import { NavService } from "src/app/services/navigation.service";
import * as deepEqual from "deep-equal";

import { User } from "../../models/user";
import { Chat } from "./../../models/chat";
import { AuthService } from "./../../services/auth.service";
import { ChatService } from "./../../services/chat.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"]
})
export class ChatListComponent {
  @Output() userChange: EventEmitter<User["id"]> = new EventEmitter();
  @Output() chatsChange: EventEmitter<Chat[]> = new EventEmitter();
  @Input() chats: Chat[] = null;
  @Input() selected: User["id"];

  public loading = false;
  public showOptions = false;
  public selectedChat: Chat;
  public archivedChats: Config["chats"];
  public allChats: Chat[] = null;
  public showingArchived = false;
  source: EventSource;
  conErrors = 0;

  constructor(
    private chatSvc: ChatService,
    public auth: AuthService,
    public menu: MenuController,
    private toast: ToastController,
    private nav: NavService,
    private config: ConfigService
  ) {}

  async ngAfterViewInit() {
    this.allChats = (await this.config.get("chats")) as Config["chats"];
    if (this.allChats) {
      this.setChats();
    }
  }

  async ngOnInit() {
    this.loading = true;
    const allChats = await this.chatSvc.getChats();
    this.loading = false;
    if (!deepEqual(this.allChats, allChats) || !this.allChats) {
      this.allChats = allChats;
      this.setChats();
    }

    this.connectSSE();
  }

  async setChats() {
    this.config.set("chats", this.allChats);
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats.filter(c => {
      return !config?.some(
        cc => cc.conversationId === c.conversationId && cc.archived
      );
    });

    this.chatsChange.emit(this.chats);

    this.archivedChats = config?.filter(cc => cc.archived);
    this.selectedChat = this.chats.find(c => +c.user.id === this.selected);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.selected?.currentValue) {
      this.selectedChat = this.chats?.find(
        c => +c.user.id === +changes?.selected?.currentValue
      );
    }
  }

  async showChat(id: User["id"]) {
    this.chatsChange.emit(this.chats);
    this.userChange.emit(id);
  }

  async deleteChat(chat: Chat) {
    this.selected = undefined;
    this.selectedChat = undefined;
    this.showOptions = false;
    const chats = this.chats;
    this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
    this.chatsChange.emit(this.chats);
    const toast = await this.toast.create({
      message: "Has eliminado el chat con " + chat.user.name,
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "Deshacer",
          handler: () => {
            this.chats = chats;
            this.chatsChange.emit(this.chats);
          }
        }
      ]
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
      await this.chatSvc.archiveChat(chat);
      const config = await this.chatSvc.getChatsConfig();
      this.archivedChats = config.filter(cc => cc.archived);
      this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
      this.chatsChange.emit(this.chats);
      const toast = await this.toast.create({
        message: "Has archivado el chat con " + chat.user.name,
        duration: 3000,
        position: "bottom"
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
    const chats = this.chats;

    try {
      await this.chatSvc.unarchiveChat(chat);
      const config = await this.chatSvc.getChatsConfig();
      this.archivedChats = config.filter(cc => cc.archived);
      this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
      this.chatsChange.emit(this.chats);
      const toast = await this.toast.create({
        message: "Has desarchivado el chat con " + chat.user.name,
        duration: 3000,
        position: "bottom"
      });
      toast.present();
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

  selectChat(chat: Chat) {
    if (chat.user.username !== "frikiradar") {
      this.selected = chat.user.id;
      this.selectedChat = chat;
      this.showOptions = true;
    }
  }

  hideOptions() {
    this.showOptions = false;
    this.selectedChat = undefined;
  }

  async showArchivedChats() {
    this.showingArchived = true;
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats.filter(c => {
      return config?.some(
        cc => cc.conversationId === c.conversationId && cc.archived
      );
    });

    this.chatsChange.emit(this.chats);
  }

  async showUnarchivedChats() {
    this.showingArchived = false;
    const config = await this.chatSvc.getChatsConfig();
    this.chats = this.allChats.filter(c => {
      return !config?.some(
        cc => cc.conversationId === c.conversationId && cc.archived
      );
    });

    this.chatsChange.emit(this.chats);
  }

  async connectSSE() {
    this.source = await this.chatSvc.register(
      `chats-${this.auth.currentUserValue.id}`
    );
    this.source.addEventListener("message", async (res: any) => {
      let message = JSON.parse(res.data) as Chat;
      if (this.chats?.some(m => m.conversationId === message.conversationId)) {
        this.chats.map(m => {
          if (m.conversationId === message.conversationId) {
            if (m.writing && !message.writing) {
              m.writing = false;
            }

            if (message.writing) {
              const oldText = m.text;
              m.writing = true;
              setTimeout(() => {
                m.writing = false;
              }, 10000);
            } else {
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
        this.chats = [message, ...this.chats];
      }
      if (!message.writing) {
        this.chats.sort((a, b) => {
          return (
            new Date(b.time_creation).getTime() -
            new Date(a.time_creation).getTime()
          );
        });
      }
    });

    this.source.addEventListener("error", async error => {
      this.conErrors++;
      console.error("Escucha al servidor de chats perdida", error);
    });

    this.source.addEventListener("open", async error => {
      // console.log("Conexión establecida", this.source.url);
      /*if (this.conErrors >= 10) {
        (
          await this.toast.create({
            message: "¡Conexión al servidor de chat restablecida!",
            duration: 2000,
            position: "bottom",
            color: "success"
          })
        ).present();
      }*/
      this.conErrors = 0;
    });
  }

  back() {
    this.nav.back();
  }
}

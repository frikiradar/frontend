import { Injectable } from "@angular/core";
import io, { Socket } from "socket.io-client";
import { BehaviorSubject, Subject } from "rxjs";

import { Chat } from "../models/chat";
import { User } from "../models/user";
import { AuthService } from "./auth.service";
import { Config } from "./config.service";
import { RestService } from "./rest.service";
import { UploadService } from "./upload.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  public source: EventSource;
  public socket: Socket;
  public socketReady = new Subject<Socket>();
  private messageSource = new BehaviorSubject<Chat>(null);
  currentMessage = this.messageSource.asObservable();

  constructor(
    private rest: RestService,
    private uploadSvc: UploadService,
    private auth: AuthService
  ) {}

  async init() {
    this.socket = io(environment.socketUrl, {
      secure: true,
    });
    this.socket.emit("join", this.auth.currentUserValue.id);

    this.socket.onAny((event, ...args) => {
      // console.log(event, args);
    });

    this.socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    this.socket.on("connect_error", (err) => {
      console.log("Error de conexión: ", err);
    });

    this.socket.on("error", (error) => {
      console.log("Error recibido:", error);
    });

    this.socket.on("message", (message: Chat) => {
      console.log("Mensaje recibido", message);
      this.setMessage(message);
    });

    this.socket.on("writing", (fromuser: number, touser: number) => {
      this.setMessage;
    });

    this.socket.on("typing", (userId) => {
      const conversationId = this.getConversationId(
        this.auth.currentUserValue.id,
        userId
      );
      const message: Chat = {
        fromuser: {
          id: userId,
        },
        conversationId,
        writing: true,
        status: "online",
      };
      this.setMessage(message);
    });
  }

  async getChats() {
    const chats = (await this.rest.get(`chats`)) as Chat[];

    return chats;
  }

  async getMessages(id: number, read?: boolean, page = 1, lastId = 0) {
    return (await this.rest.get(
      `chat/${id}?read=${read}&page=${page}&lastid=${lastId}`
    )) as Chat[];
  }

  async sendMessage(
    id: number,
    text: string,
    replyto?: number,
    tmp_id?: string
  ): Promise<Chat> {
    return (await this.rest.put("chat", {
      touser: id,
      text,
      replyto,
      tmp_id,
    })) as Chat;
  }

  async emitMessage(message: Chat) {
    this.socket.emit("message", message);
  }

  setMessage(message: Chat) {
    this.messageSource.next(message);
  }

  async sendImage(
    id: number,
    image: Blob,
    text: string,
    tmp_id?: string
  ): Promise<Chat> {
    const formData: FormData = new FormData();
    formData.set("image", image);
    formData.set("touser", "" + id);
    formData.set("text", text);
    formData.set("tmp_id", tmp_id);
    return (await this.uploadSvc.upload("chat-upload", formData)) as Chat;
  }

  async sendAudio(id: number, audio: Blob, tmp_id?: string): Promise<Chat> {
    const formData: FormData = new FormData();
    formData.set("audio", audio);
    formData.set("touser", "" + id);
    formData.set("tmp_id", tmp_id);
    return (await this.uploadSvc.upload("chat-upload", formData)) as Chat;
  }

  async typing(fromuser: number, touser: number) {
    // return (await this.rest.put("typing-chat", { fromuser, touser })) as Chat;
    this.socket.emit("typing", fromuser, touser);
  }

  async updateMessage(id: Chat["id"], text: Chat["text"]) {
    return (await this.rest.put("update-message", { id, text })) as Chat;
  }

  async readChat(message: Chat) {
    console.log("read", message);
    this.socket.emit("read", message);
  }

  async userOnline(fromuserid: number, touserid: number) {
    this.socket.emit("online", fromuserid, touserid);
  }

  async userOffline(fromuserid: number, touserid: number) {
    this.socket.emit("offline", fromuserid, touserid);
  }

  async readLastMessages(messages: Chat[], userId: number) {
    messages
      .filter((m) => !m.time_read)
      .forEach((m) => {
        m.time_read = new Date();
        if (m.fromuser.id === userId) {
          this.readChat(m);
        }
      });
  }

  async deleteMessage(id: number) {
    await this.rest.delete(`chat-message/${id}`);
  }

  async deleteChat(touserid: number) {
    await this.rest.delete(`chat/${touserid}`);
  }

  async archiveChat(chat: Chat, allChats: Chat[]) {
    let chats_config = (await this.getChatsConfig()) || [];

    chats_config = chats_config.filter((c) => {
      return allChats.some(
        (ac) => ac.conversationId === c.conversationId && c.archived
      );
    });

    const existingChat = chats_config.find(
      (c) => c.conversationId === chat.conversationId
    );

    if (existingChat) {
      existingChat.archived = true;
    } else {
      chats_config.push({
        conversationId: chat.conversationId,
        archived: true,
      });
    }

    await this.setChatsConfig(chats_config);
  }

  async unarchiveChat(chat: Chat, allChats: Chat[]) {
    let chats_config = (await this.getChatsConfig()) || [];

    chats_config = chats_config.filter((c) => {
      return allChats.some(
        (ac) =>
          ac.conversationId === c.conversationId &&
          c.archived &&
          ac.id !== chat.id
      );
    });

    await this.setChatsConfig(chats_config);
  }

  async setChatsConfig(chats_config: Config["chats"]) {
    const user = (await this.rest.put("chats-config", {
      chats_config,
    })) as User;
    this.auth.setAuthUser(user);
  }

  async getChatsConfig() {
    const config = this.auth.currentUserValue?.config;
    return config?.chats;
  }

  async report(message: Chat, note: string) {
    return await this.rest.put("report-chat", { message, note });
  }

  getConversationId(fromuser: number, touser: number) {
    return `${Math.min(fromuser, touser)}_${Math.max(fromuser, touser)}`;
  }
}

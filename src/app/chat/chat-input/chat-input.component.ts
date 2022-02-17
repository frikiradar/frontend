/// <reference types="@types/dom-mediacapture-record" />

import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  Input,
  SimpleChanges,
  ElementRef,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { ActionSheetController, IonTextarea, Platform } from "@ionic/angular";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { File as NativeFile, FileEntry } from "@ionic-native/file/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";

import { Chat } from "src/app/models/chat";
import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.scss"],
})
export class ChatInputComponent {
  @Output() onWriting: EventEmitter<boolean> = new EventEmitter();
  @Output() onSubmit: EventEmitter<Chat> = new EventEmitter();
  @Output() editingChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output() replyingChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output() onCreateEvent: EventEmitter<void> = new EventEmitter();

  public chatForm: FormGroup;
  get message() {
    return this.chatForm.get("message");
  }

  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;
  @ViewChild("player", { static: false })
  player: ElementRef;

  public emojis: boolean = false;
  public image: string;
  public imagePreview: SafeUrl;
  private mediaRecorder: MediaRecorder;
  public recording: boolean = false;
  public countRecordingString = "0m 0s";
  private countInterval: any;
  public recorded: boolean = false;
  public audio: string;
  public audioPreview: SafeUrl;
  private audioMedia: MediaObject;
  private audioFile: FileEntry;

  @Input() replying: boolean = false;
  @Input() editing = false;
  @Input() selectedMessage: Chat;
  @Input() mentions: boolean;
  @Input() events: boolean;
  @Input() microphone: boolean;

  @ViewChild("textarea", { static: false })
  textarea: IonTextarea;
  private inputAt = false;
  private mention: string;
  public userMentions: User["username"][] = [];
  public usernames: User[];
  private writing = false;

  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService,
    public keyboard: Keyboard,
    public platform: Platform,
    public sheet: ActionSheetController,
    public utils: UtilsService,
    private userSvc: UserService,
    private sanitizer: DomSanitizer,
    private file: NativeFile,
    private webview: WebView,
    private media: Media
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required]),
    });
  }

  onPaste(event: ClipboardEvent) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (
      changes["editing"] &&
      !changes["editing"].firstChange &&
      changes["editing"].currentValue
    ) {
      if (this.replying) {
        this.closeReplying();
      }
      this.message.setValue(this.selectedMessage.text);
      this.focusTextArea();
    }

    if (
      changes["replying"] &&
      !changes["replying"].firstChange &&
      changes["replying"].currentValue
    ) {
      if (this.editing) {
        this.closeEdit();
      }
      this.focusTextArea();
    }

    if (changes["selectedMessage"] && !changes["selectedMessage"].firstChange) {
      if (this.editing) {
        this.closeEdit();
      }
      if (this.replying) {
        this.closeReplying();
      }
    }
  }

  openEmojis() {
    this.keyboard.setKeyboardStyle;
    this.emojis = !this.emojis;

    if (this.emojis) {
      if (this.platform.is("cordova")) {
        this.keyboard.hide();
      }
    } else {
      this.focusTextArea();
    }
  }

  addEmoji(event: any) {
    this.message.setValue(
      (this.message.value ? this.message.value : "") + event.emoji.native
    );
  }

  closeEdit() {
    this.editing = false;
    this.message.setValue("");
    this.editingChange.emit(this.editing);
  }

  closeReplying() {
    this.replying = false;
    this.replyingChange.emit(this.replying);
  }

  sendMessage() {
    this.recorded = false;
    this.emojis = false;

    const message = {
      text: this.message.value ? this.message.value.trim() : "",
      image: this.image,
      audio: this.audio,
      mentions: this.userMentions,
    };

    this.onSubmit.emit(message);
    this.message.setValue("");
    this.audioMedia?.release();
    this.image = "";
    this.audio = "";
    this.focusTextArea();
  }

  async openPictureSheet() {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      /*await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);*/
    }

    const actionSheet = await this.sheet.create({
      header:
        "Enviar contenido explícito sin el consentimiento del receptor puede ser motivo de expulsión.",
      buttons: [
        {
          text: "Desde la cámara",
          icon: "camera",
          handler: async () => {
            if (this.platform.is("cordova")) {
              const image = (await this.utils.takePicture(
                "camera",
                false,
                "default",
                true
              )) as string;
              this.addPicture(image);
            } else {
              const image = await this.utils.webcamImage("default");
              if (!image || typeof image === "boolean") {
                actionSheet.dismiss();
                return false;
              }
              this.addPicture(image);
            }
          },
        },
        {
          text: "Desde la galería",
          icon: "images",
          handler: async () => {
            if (this.platform.is("cordova")) {
              const image = (await this.utils.takePicture(
                "gallery",
                false,
                "default",
                true
              )) as string;
              this.addPicture(image);
            } else {
              this.imageInput.nativeElement.dispatchEvent(
                new MouseEvent("click")
              );
            }
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async openMic() {
    if (this.platform.is("cordova")) {
      /*if (this.platform.is("android")) {
        await this.androidPermissions.requestPermissions([
          this.androidPermissions.PERMISSION.RECORD_AUDIO,
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
        ]);
      }*/

      try {
        let path = this.file.dataDirectory;
        let extension = "";
        if (this.platform.is("ios")) {
          // path = this.file.dataDirectory;
          extension = ".m4a";
        } else {
          // path = this.file.dataDirectory;
          extension = ".mp3";
        }
        const name = `record_${new Date().getTime() + extension}`;
        this.audioFile = await this.file.createFile(path, name, true);
        // const audioMediaSrc = this.audioFile.nativeURL.replace(/^file:[\/]+/, "");
        this.audioMedia = this.media.create(this.audioFile.toInternalURL());
        this.audioMedia.startRecord();
        this.recording = true;
      } catch (error) {
        console.log(error);
      }
    } else if (navigator.mediaDevices) {
      let chunks = [];
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then((stream) => {
          const tracks = stream.getTracks();
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.start();
          this.recording = true;

          this.mediaRecorder.addEventListener("stop", async (error) => {
            this.recording = false;
            this.recorded = true;

            tracks.forEach((track) => {
              track.stop();
            });

            const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
            chunks = [];
            this.audio = URL.createObjectURL(blob);
            this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(
              this.audio
            );
          });

          this.mediaRecorder.addEventListener("dataavailable", async (e) => {
            chunks.push(e.data);
          });
        });
    }

    this.countRecording();
  }

  async stopMic() {
    if (this.platform.is("cordova") && this.audioFile) {
      try {
        this.audioMedia.stopRecord();
        this.recording = false;
        this.recorded = true;
        await this.utils.delay(200);
        // this.audioMedia.play();
        this.audio = this.webview.convertFileSrc(this.audioFile.nativeURL);
        this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(this.audio);
      } catch (e) {
        console.error(e);
      }
    } else {
      this.mediaRecorder.stop();
      // console.log(this.mediaRecorder.state);
    }

    this.stopCountRecording();
  }

  removeRecorded() {
    this.recorded = false;
    if (this.platform.is("cordova")) {
      this.audioMedia?.release();
    }
  }

  async addPicture(image: string | Blob) {
    if (typeof image !== "string") {
      image = await this.utils.fileToBase64(image);
    }
    this.image = image;
    this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(image);
  }

  setMention(username: string) {
    this.usernames = [];
    this.inputAt = false;
    this.message.setValue(
      this.message.value.replace(this.mention, `@${username} `)
    );
    this.userMentions = [...this.userMentions, username];
    this.focusTextArea();
  }

  async setWriting(text: string) {
    if (this.message.value) {
      if (this.mentions) {
        if (text.charAt(text.length - 1) == "@") {
          this.inputAt = true;
        }

        if (this.inputAt) {
          const pattern = /\B@[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+/gi;
          const matches = text.match(pattern);
          if (matches) {
            this.mention = matches[matches.length - 1];
          }
        }
      }

      if (this.writing) {
        return;
      }
      this.writing = true;

      if (!this.editing) {
        this.onWriting.emit(true);
      }

      if (
        this.inputAt &&
        this.mention?.length > 3 &&
        this.message.value.length > 3
      ) {
        this.usernames = await this.userSvc.searchUsernames(
          this.mention.replace("@", "")
        );
      } else {
        this.usernames = [];
      }

      setTimeout(async () => {
        this.writing = false;
      }, 500);
    } else {
      this.usernames = [];
    }
  }

  keydownEnter(event: Event) {
    if (!this.platform.is("hybrid")) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  async focusTextArea() {
    this.textarea?.setFocus();
    if (this.platform.is("cordova")) {
      this.keyboard.show();
    }
  }

  async createEvent() {
    this.onCreateEvent.emit();
  }

  countRecording() {
    let time = 0;
    this.countInterval = setInterval(() => {
      time++;

      let minutes = Math.floor((time % (60 * 60)) / 60);
      let seconds = Math.floor(time % 60);

      this.countRecordingString = minutes + "m " + seconds + "s";
    }, 1000);
  }

  stopCountRecording() {
    clearInterval(this.countInterval);
    this.countRecordingString = "";
  }
}

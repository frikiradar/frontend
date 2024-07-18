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
import { Keyboard, KeyboardStyle } from "@capacitor/keyboard";
import { IonTextarea, Platform, isPlatform } from "@ionic/angular";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import runes from "runes";
declare var EmojiMart: any; // Esto declara EmojiMart para TypeScript

import { Chat } from "src/app/models/chat";
import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { Config, ConfigService } from "src/app/services/config.service";
import { Microphone } from "@mozartec/capacitor-microphone";

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
  public recording: boolean = false;
  public storedFileNames = [];
  public countRecordingString = "0m 0s";
  private countInterval: any;
  public recorded: boolean = false;
  public audio: string;
  public audioPreview: SafeUrl;
  public isPictureSheetOpen = false;
  public i18nEmojiMart = undefined;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: BlobPart[] = [];

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
    public utils: UtilsService,
    private userSvc: UserService,
    private sanitizer: DomSanitizer,
    private config: ConfigService
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required]),
    });

    // Deshabilito porque al buscar emoji se cierran los emojis
    /*if (isPlatform("capacitor")) {
      Keyboard.addListener("keyboardWillShow", () => {
        this.closeEmojis();
      });
    }*/
  }

  async ngOnInit() {}

  onPaste(event: ClipboardEvent) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges) {
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

  async openEmojis() {
    if (typeof EmojiMart !== "undefined") {
      this.emojis = !this.emojis;

      if (this.emojis) {
        if (isPlatform("capacitor")) {
          await Keyboard.hide();
        }
        const language = (await this.config.get(
          "language"
        )) as Config["language"];

        const picker = new EmojiMart.Picker({
          onEmojiSelect: (emoji) => {
            // console.log(emoji);
            this.addEmoji(emoji);
          },
          theme: "dark",
          locale: language === "es" ? "es" : "en",
          set: "native",
          dynamicWidth: true,
        });

        const container = document.getElementById("emoji-picker-container");
        if (container) {
          container.appendChild(picker);
          picker.style.width = "100%";
        }
      } else {
        this.closeEmojis();
      }
    } else {
      console.error("EmojiMart no está definido.");
    }
  }

  closeEmojis() {
    if (typeof EmojiMart !== "undefined") {
      this.emojis = false;
      if (isPlatform("capacitor")) {
        Keyboard.show();
      }
      const container = document.getElementById("emoji-picker-container");
      if (container) {
        container.innerHTML = "";
      }

      this.textarea.setFocus();
    }
  }

  addEmoji(emoji: any) {
    this.message.setValue(
      (this.message.value ? this.message.value : "") + emoji.native
    );
  }

  deleteText() {
    const textRunes = runes(this.message.value);
    textRunes.pop();
    this.message.setValue(textRunes.join(""));
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
    this.image = "";
    this.audio = "";
    this.focusTextArea();
  }

  async selectPictureFromCamera() {
    this.closePictureSheet();
    if (isPlatform("capacitor")) {
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
        return false;
      }
      this.addPicture(image);
    }
  }

  async selectPictureFromGallery() {
    this.closePictureSheet();
    if (isPlatform("capacitor")) {
      const image = (await this.utils.takePicture(
        "gallery",
        false,
        "default",
        true
      )) as string;
      this.addPicture(image);
    } else {
      this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
    }
  }

  openPictureSheet() {
    this.isPictureSheetOpen = true;
  }

  closePictureSheet() {
    this.isPictureSheetOpen = false;
  }

  async openMic() {
    try {
      this.startRecording();
      this.recording = true;
    } catch (e) {
      console.error(e);
    }

    this.countRecording();
  }

  async startRecording() {
    // Detecta si estamos en un entorno web
    if (!isPlatform("capacitor")) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = []; // Inicializa audioChunks
        this.mediaRecorder.ondataavailable = (event) => {
          this.audioChunks.push(event.data); // Agrega datos de audio a audioChunks
        };
        this.mediaRecorder.onstop = () => {
          // Procesa audioChunks cuando la grabación se detiene
          const blob = new Blob(this.audioChunks, { type: "audio/webm" });
          this.audio = URL.createObjectURL(blob);
          this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(this.audio);
          this.audioChunks = []; // Limpia para la próxima grabación
        };
        this.mediaRecorder.start();
        console.log("Grabación iniciada en la web");
      } catch (error) {
        console.error("Error al iniciar la grabación en la web: ", error);
      }
    } else {
      // Aquí, utiliza la API existente para entornos nativos
      if (await this.requestAudioPermissions()) {
        try {
          await Microphone.startRecording();
          console.log("Grabación iniciada en entorno nativo");
        } catch (error) {
          console.error(
            "Error al iniciar la grabación en entorno nativo: ",
            error
          );
        }
      }
    }
  }

  async stopMic() {
    try {
      if (!isPlatform("capacitor")) {
        this.mediaRecorder.stop();
      } else {
        // Entornos nativos
        const result = await Microphone.stopRecording();
        const base64Sound = result.base64String;
        const mimeType = result.mimeType;
        const blob = this.utils.base64toBlob(base64Sound, mimeType);
        this.audio = URL.createObjectURL(blob);
        this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(this.audio);
      }
      this.recording = false;
      this.recorded = true;
    } catch (e) {
      console.error(e);
    } finally {
      // Limpia o reinicia variables según sea necesario
      this.mediaRecorder = null;
    }
  }

  async requestAudioPermissions() {
    if (await Microphone.checkPermissions()) {
      const granted = await Microphone.requestPermissions();
      if (granted) {
        return true;
      } else {
        return false;
      }
    }
  }

  removeRecorded() {
    this.recorded = false;
    if (isPlatform("capacitor")) {
      this.audio = "";
      this.audioPreview = "";
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
    if (!isPlatform("hybrid")) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  async focusTextArea() {
    this.textarea?.setFocus();
    if (isPlatform("capacitor")) {
      Keyboard.show();
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

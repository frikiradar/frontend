import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  Input,
  SimpleChanges,
  ElementRef
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { ActionSheetController, IonTextarea, Platform } from "@ionic/angular";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { Chat } from "src/app/models/chat";
import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.scss"]
})
export class ChatInputComponent {
  @Output() onWriting: EventEmitter<boolean> = new EventEmitter();
  @Output() onSubmit: EventEmitter<Chat> = new EventEmitter();
  @Output() editingChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output() replyingChange: EventEmitter<boolean> = new EventEmitter(true);

  public chatForm: FormGroup;
  get message() {
    return this.chatForm.get("message");
  }

  @ViewChild("imageInput", { static: false })
  imageInput: ElementRef;
  public emojis: boolean = false;
  public image: string;
  public imagePreview: SafeUrl;

  @Input() replying: boolean = false;
  @Input() editing = false;
  @Input() selectedMessage: Chat;
  @Input() mentions: boolean;
  @Input() events: boolean;

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
    private androidPermissions: AndroidPermissions,
    public sheet: ActionSheetController,
    public utils: UtilsService,
    private userSvc: UserService,
    private sanitizer: DomSanitizer
  ) {
    this.chatForm = formBuilder.group({
      message: new FormControl("", [Validators.required])
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

  sendMessage(event?: Event) {
    this.emojis = false;
    if (event) {
      event.preventDefault();
    }

    const message = {
      text: this.message.value ? this.message.value.trim() : "",
      image: this.image,
      mentions: this.userMentions
    };

    this.onSubmit.emit(message);
    this.message.setValue("");
    this.image = "";
    this.focusTextArea();
  }

  async openPictureSheet() {
    if (this.platform.is("android") && this.platform.is("cordova")) {
      await this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      ]);
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
                true,
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
          }
        },
        {
          text: "Desde tus fotos",
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
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async addPicture(image: string | File) {
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

  async focusTextArea() {
    this.textarea?.setFocus();
    if (this.platform.is("cordova")) {
      this.keyboard.show();
    }
  }
}

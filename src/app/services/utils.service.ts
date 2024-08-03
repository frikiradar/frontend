import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
  isPlatform,
} from "@ionic/angular";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Share } from "@capacitor/share";
import { Clipboard } from "@capacitor/clipboard";
import {
  Camera,
  CameraDirection,
  CameraResultType,
  CameraSource,
} from "@capacitor/camera";
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from "@angular/platform-browser";

import { CropperModal } from "../cropper/cropper.modal";
import { WebcamModal } from "../webcam/webcam.modal";
import { AuthService } from "./auth.service";
import { Config, ConfigService } from "./config.service";
import { I18nService } from "./i18n.service";
import { NavigationBar } from "@hugotomazi/capacitor-navigation-bar";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor(
    public http: HttpClient,
    private alert: AlertController,
    private auth: AuthService,
    private modalController: ModalController,
    private toast: ToastController,
    private config: ConfigService,
    private i18n: I18nService,
    private sanitizer: DomSanitizer
  ) {}

  async takePicture(
    mode?: string,
    crop?: boolean,
    name?: string,
    returnsrc = false,
    square = true
  ): Promise<Blob | string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: mode === "camera" ? CameraSource.Camera : CameraSource.Photos,
      correctOrientation: true,
      direction: CameraDirection.Front,
    });

    let src = image.webPath;

    try {
      if (crop) {
        console.log("Cropping image...");
        const res = await this.cropImage("", src, square);
        if (typeof res == "string") {
          src = res;
        } else {
          return;
        }
      }
      // console.log(src);
      if (returnsrc) {
        return src;
      }
      const blob = await this.urltoBlob(src);
      return blob;
    } catch (e) {
      console.error("Error al recortar la imagen.", e);
    }
  }

  async cropImage(
    event: any = "",
    src: string = "",
    square = true,
    aspectRatio = 1 / 1
  ): Promise<string | boolean> {
    const modal = await this.modalController.create({
      component: CropperModal,
      componentProps: {
        event,
        src,
        square,
        aspectRatio,
      },
      cssClass: "vertical-modal",
    });
    await modal.present();

    try {
      const data = await modal.onDidDismiss();
      if (data.data) {
        return data.data;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  async webcamImage(
    name: string = "default",
    crop?: boolean,
    square = true
  ): Promise<Blob | boolean> {
    const modal = await this.modalController.create({
      component: WebcamModal,
      cssClass: "vertical-modal",
    });
    await modal.present();

    try {
      const data = await modal.onDidDismiss();
      if (data.data) {
        let src = data.data;
        if (crop) {
          src = await this.cropImage("", src, square);
        }
        if (typeof src == "string") {
          const blob = await this.urltoBlob(src);
          return blob;
        } else {
          return;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  base64toBlob(b64Data: string, contentType = "", sliceSize = 512) {
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  async urltoBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }

  async blobToUrl(blob: Blob | File) {
    const src = URL.createObjectURL(blob);
    return src;
  }

  fileToBase64(file: Blob | File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  getBase64Image(imgUrl: string): Promise<string> {
    return new Promise<string>((resolve) => {
      const img = new Image();
      img.src = imgUrl;
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        // resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        resolve(dataURL);
      };
    });
  }

  async getDataURI(url: string): Promise<string> {
    const blob = await this.urltoBlob(url);
    return await this.fileToBase64(blob);
  }

  async test() {
    const alert = await this.alert.create({
      header: this.i18n.translate("function-not-yet-available"),
      message: this.i18n.translate("action-in-development"),
      buttons: [this.i18n.translate("thanks-for-warning")],
      cssClass: "round-alert",
    });

    await alert.present();
  }

  async share(url = "", message = "") {
    if (!url) {
      url = "https://frikiradar.com";
    }

    if (!message) {
      message = this.i18n.translate("meet-people-with-same-tastes");
    }

    const referrer = this.auth.currentUserValue
      ? this.auth.currentUserValue.username
      : isPlatform("capacitor")
      ? "app"
      : "web";

    if (isPlatform("hybrid")) {
      const options = {
        // title: this.i18n.translate("share"),
        text: message, // not supported on some apps (Facebook, Instagram)
        url: `${url}?referrer=${referrer}`,
        dialogTitle: this.i18n.translate("choose-app-and-help-us-grow"), // Android only, you can override the default share sheet title,
      };

      await Share.share(options);
    } else if (window.navigator && window.navigator["share"]) {
      window.navigator["share"]({
        title: this.i18n.translate("frikiradar-meet-geek-people-like-you"),
        text: message,
        url: `${url}?referrer=${referrer}`,
      })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
      try {
        await Clipboard.write({
          string: `${message} ${url}?referrer=${referrer}`,
        });
        (
          await this.toast.create({
            message: this.i18n.translate("link-copied-to-clipboard"),
            duration: 2000,
            position: "middle",
          })
        ).present();
      } catch (e) {
        (
          await this.toast.create({
            message: this.i18n.translate("error-copying-link"),
            duration: 2000,
            position: "middle",
          })
        ).present();
      }
    }
  }

  niceDate(time: string | Date) {
    const date = new Date(time);
    const hours = this.format_two_digits(date.getHours());
    const minutes = this.format_two_digits(date.getMinutes());

    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor(diff / 86400);

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
      return "";
    }

    return (
      (daydiff === 0 &&
        ((diff < 300 && this.i18n.translate("just-now")) ||
          (diff < 3600 &&
            this.i18n.translate("minutes-ago", {
              minutes: Math.floor(diff / 60).toString(),
            })) ||
          (diff < 7200 && this.i18n.translate("an-hour-ago")) ||
          (diff < 86400 &&
            this.i18n.translate("hours-ago", {
              hours: Math.floor(diff / 3600).toString(),
            })))) ||
      (daydiff === 1 &&
        this.i18n.translate("yesterday-at", { time: hours + ":" + minutes })) ||
      (daydiff < 14 &&
        this.i18n.translate("days-ago", { days: daydiff.toString() })) ||
      (daydiff < 30 &&
        this.i18n.translate("weeks-ago", {
          weeks: Math.ceil(daydiff / 7).toString(),
        })) ||
      (daydiff < 60 && this.i18n.translate("a-month-ago"))
    );
  }

  format_two_digits(n: string | number) {
    const number = +n;
    return number < 10 ? "0" + n : n;
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async toggleTheme(theme?: Config["theme"], delay = false) {
    const oldTheme = (await this.config.get("theme")) as Config["theme"];
    if (!theme) {
      theme = oldTheme || "dark";
      document.body.classList.toggle(theme, true);
    } else {
      document.body.classList.toggle(oldTheme, false);
      document.body.classList.toggle(theme, true);
    }
    await this.config.set("theme", theme);

    if (isPlatform("capacitor")) {
      if (delay) {
        await this.delay(1000);
      }
      await StatusBar.show();
      await NavigationBar.show();
      StatusBar.setOverlaysWebView({ overlay: false });
      NavigationBar.setTransparency({ isTransparent: false });

      switch (theme) {
        case "dark":
          await NavigationBar.setColor({
            color: "#111111",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#111111" });
          break;
        case "light":
          await NavigationBar.setColor({ color: "#fafafa", darkButtons: true });
          await StatusBar.setStyle({ style: Style.Light });
          await StatusBar.setBackgroundColor({ color: "#fafafa" });
          break;
        case "cyberpunk":
          await NavigationBar.setColor({
            color: "#0c1340",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#0c1340" });
          break;
        case "black":
          await NavigationBar.setColor({
            color: "#000000",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#000000" });
          break;
        case "fire":
          await NavigationBar.setColor({
            color: "#000000",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#000000" });
          break;
        case "strawberries-and-cream":
          await NavigationBar.setColor({ color: "#ffebee", darkButtons: true });
          await StatusBar.setStyle({ style: Style.Light });
          await StatusBar.setBackgroundColor({ color: "#ffebee" });
          break;
        default:
          await NavigationBar.setColor({
            color: "#111111",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#111111" });
      }
    }
  }

  makeId(length: number): string {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getCountries(): string[] {
    const countries = [
      "espana",
      "mexico",
      "argentina",
      "chile",
      "peru",
      "afganistan",
      "albania",
      "alemania",
      "andorra",
      "angola",
      "antigua-y-barbuda",
      "arabia-saudita",
      "argelia",
      "armenia",
      "australia",
      "austria",
      "azerbaiyan",
      "bahamas",
      "banglades",
      "barbados",
      "barein",
      "belgica",
      "belice",
      "benin",
      "bielorrusia",
      "birmania",
      "bolivia",
      "bosnia-y-herzegovina",
      "botsuana",
      "brasil",
      "brunei",
      "bulgaria",
      "burkina-faso",
      "burundi",
      "butan",
      "cabo-verde",
      "camboya",
      "camerun",
      "canada",
      "catar",
      "chad",
      "china",
      "chipre",
      "ciudad-del-vaticano",
      "colombia",
      "comoras",
      "corea-del-norte",
      "corea-del-sur",
      "costa-de-marfil",
      "costa-rica",
      "croacia",
      "cuba",
      "dinamarca",
      "dominica",
      "ecuador",
      "egipto",
      "el-salvador",
      "emiratos-arabes-unidos",
      "eritrea",
      "eslovaquia",
      "eslovenia",
      "estados-unidos",
      "estonia",
      "etiopia",
      "filipinas",
      "finlandia",
      "fiyi",
      "francia",
      "gabon",
      "gambia",
      "georgia",
      "ghana",
      "granada",
      "grecia",
      "guatemala",
      "guyana",
      "guinea",
      "guinea-ecuatorial",
      "guinea-bisau",
      "haiti",
      "honduras",
      "hungria",
      "india",
      "indonesia",
      "irak",
      "iran",
      "irlanda",
      "islandia",
      "islas-marshall",
      "islas-salomon",
      "israel",
      "italia",
      "jamaica",
      "japon",
      "jordania",
      "kazajistan",
      "kenia",
      "kirguistan",
      "kiribati",
      "kuwait",
      "laos",
      "lesoto",
      "letonia",
      "libano",
      "liberia",
      "libia",
      "liechtenstein",
      "lituania",
      "luxemburgo",
      "madagascar",
      "malasia",
      "malaui",
      "maldivas",
      "mali",
      "malta",
      "marruecos",
      "mauricio",
      "mauritania",
      "micronesia",
      "moldavia",
      "monaco",
      "mongolia",
      "montenegro",
      "mozambique",
      "namibia",
      "nauru",
      "nepal",
      "nicaragua",
      "niger",
      "nigeria",
      "noruega",
      "nueva-zelanda",
      "oman",
      "paises-bajos",
      "pakistan",
      "palaos",
      "panama",
      "papua-nueva-guinea",
      "paraguay",
      "polonia",
      "portugal",
      "reino-unido",
      "republica-centroafricana",
      "republica-checa",
      "republica-de-macedonia",
      "republica-del-congo",
      "republica-democratica-del-congo",
      "republica-dominicana",
      "republica-sudafricana",
      "ruanda",
      "rumania",
      "rusia",
      "samoa",
      "san-cristobal-y-nieves",
      "san-marino",
      "san-vicente-y-las-granadinas",
      "santa-lucia",
      "santo-tome-y-principe",
      "senegal",
      "serbia",
      "seychelles",
      "sierra-leona",
      "singapur",
      "siria",
      "somalia",
      "sri-lanka",
      "suazilandia",
      "sudan",
      "sudan-del-sur",
      "suecia",
      "suiza",
      "surinam",
      "tailandia",
      "tanzania",
      "tayikistan",
      "timor-oriental",
      "togo",
      "tonga",
      "trinidad-y-tobago",
      "tunez",
      "turkmenistan",
      "turquia",
      "tuvalu",
      "ucrania",
      "uganda",
      "uruguay",
      "uzbekistan",
      "vanuatu",
      "venezuela",
      "vietnam",
      "yemen",
      "yibuti",
      "zambia",
      "zimbabue",
    ];

    let translatedCountries = [];
    for (let country of countries) {
      translatedCountries = [
        ...translatedCountries,
        this.i18n.translate(country),
      ];
    }

    return translatedCountries;
  }

  getCurrencySymbols() {
    return ["$", "€", "S/.", "¥", "£", ""];
  }

  currencyToSymbol(currency: string) {
    currency = currency.toUpperCase();
    switch (currency) {
      case "EUR":
        return "€";
      case "USD":
        return "$";
      case "PEN":
        return "S/.";
      case "JPY":
        return "¥";
      case "GBP":
        return "£";
      default:
        return currency;
    }
  }

  convertISO8601ToHuman(period: string): { quantity: number; unit: string } {
    const match = period.match(/P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?/);
    const years = match[1]
      ? `${match[1]} ${this.i18n.translate(
          Number(match[1]) > 1 ? "years" : "year"
        )} `
      : "";
    const months = match[2]
      ? `${match[2]} ${this.i18n.translate(
          Number(match[2]) > 1 ? "months" : "month"
        )} `
      : "";
    const days = match[3]
      ? `${match[3]} ${this.i18n.translate(
          Number(match[3]) > 1 ? "days" : "day"
        )} `
      : "";

    let result = years || months || days;
    let split = result.trim().split(" ");
    let quantity = parseInt(split[0]);
    let unit = split[1];

    return { quantity, unit };
  }

  convertISO8601ToMonths(period: string): number {
    const match = period.match(/P(?:([0-9]+)Y)?(?:([0-9]+)M)?/);
    const years = match[1] ? Number(match[1]) * 12 : 0; // Convertir años a meses
    const months = match[2] ? Number(match[2]) : 0;
    return years + months;
  }

  extractYoutubeLink(text: string): SafeResourceUrl {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
    let match: RegExpExecArray;
    while ((match = youtubeRegex.exec(text)) !== null) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${match[1]}`
      );
    }
  }

  extractFacebookLink(text: string): SafeHtml {
    const facebookRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|fb\.watch\/)([a-zA-Z0-9_-]+)/g;
    let match: RegExpExecArray;
    while ((match = facebookRegex.exec(text)) !== null) {
      const url = `https://www.facebook.com/facebook/videos/${match[1]}/`;
      const html = `
        <div class="fb-video" data-href="${url}" data-width="500" data-show-text="false">
          <div class="fb-xfbml-parse-ignore">
            <blockquote cite="${url}">
              <a href="${url}">Watch Video</a>
            </blockquote>
          </div>
        </div>`;
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }

  extractInstagramLink(text: string): SafeHtml {
    const instagramRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/(?:p|tv|reel)\/([a-zA-Z0-9_-]+))/g;
    let match: RegExpExecArray;
    while ((match = instagramRegex.exec(text)) !== null) {
      const url = `https://www.instagram.com/p/${match[1]}/embed`;
      const html = `<iframe src="${url}" width="400" height="480" frameborder="0" allowfullscreen></iframe>`;
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }
}

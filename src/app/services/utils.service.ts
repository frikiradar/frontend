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
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";

import { CropperModal } from "../cropper/cropper.modal";
import { WebcamModal } from "../webcam/webcam.modal";
import { AuthService } from "./auth.service";
import { Config, ConfigService } from "./config.service";
import { NavigationBar } from "@mauricewegner/capacitor-navigation-bar";
import { SafeAreaController } from "@aashu-dubey/capacitor-statusbar-safe-area";

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
    private config: ConfigService
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
      cssClass: "full-modal",
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
      header: "Función aún no disponible",
      message: "Esta acción se encuentra aún en desarrollo.",
      buttons: ["Gracias por avisar"],
      cssClass: "round-alert",
    });

    await alert.present();
  }

  async share(url = "", message = "") {
    if (!url) {
      url = "https://frikiradar.com";
    }

    if (!message) {
      message =
        "Conoce a personas con tus mismos gustos con frikiradar, la app de citas para frikis";
    }

    const referrer = this.auth.currentUserValue
      ? this.auth.currentUserValue.username
      : isPlatform("capacitor")
      ? "app"
      : "web";

    if (isPlatform("hybrid")) {
      const options = {
        title: "Compartir",
        text: message, // not supported on some apps (Facebook, Instagram)
        url: `${url}?referrer=${referrer}`,
        dialogTitle: "Elige una app y ayúdanos a seguir creciendo", // Android only, you can override the default share sheet title,
      };

      await Share.share(options);
    } else if (window.navigator && window.navigator["share"]) {
      window.navigator["share"]({
        title: "frikiradar, conoce a personas frikis como tú",
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
            message: "Link copiado al portapapeles",
            duration: 2000,
            position: "middle",
          })
        ).present();
      } catch (e) {
        (
          await this.toast.create({
            message: "Error al copiar el link",
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
        ((diff < 300 && "ahora mismo") ||
          (diff < 3600 && "hace " + Math.floor(diff / 60) + " minutos") ||
          (diff < 7200 && "hace 1 hora") ||
          (diff < 86400 && "hace " + Math.floor(diff / 3600) + " horas"))) ||
      (daydiff === 1 && "ayer a las " + hours + ":" + minutes) ||
      (daydiff < 14 && "hace " + daydiff + " días") ||
      (daydiff < 30 && "hace " + Math.ceil(daydiff / 7) + " semanas") ||
      (daydiff < 60 && "hace 1 mes")
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
    FirebaseAnalytics.setUserProperty({
      name: "theme",
      value: theme,
    });

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
            color: "#1f1f1f",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#1f1f1f" });
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
        case "transparent":
          await this.transparentStatusBar();
          await this.transparentNavigationBar();
          break;
        default:
          await NavigationBar.setColor({
            color: "#1f1f1f",
            darkButtons: false,
          });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#1f1f1f" });
      }
    }
  }

  async transparentStatusBar(hide = false) {
    if (isPlatform("capacitor")) {
      await SafeAreaController.injectCSSVariables();
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setStyle({ style: Style.Dark });
      if (hide) {
        await StatusBar.hide();
      } else {
        await StatusBar.show();
      }
    }
  }

  async transparentNavigationBar(hide = false) {
    if (isPlatform("capacitor")) {
      await SafeAreaController.injectCSSVariables();
      NavigationBar.setTransparency({ isTransparent: true });
      if (hide) {
        await NavigationBar.hide();
      } else {
        await NavigationBar.show();
      }
    }
  }

  async toggleTransparent(
    type: "statusbar" | "navigationbar" | "both" = "both"
  ) {
    const isTransparent = document.body.classList.contains("transparent");
    if (isTransparent) {
      document.body.classList.toggle("transparent", false);
      await this.toggleTheme();
    } else {
      document.body.classList.toggle("transparent", true);
      switch (type) {
        case "statusbar":
          await this.transparentStatusBar();
          break;
        case "navigationbar":
          await this.transparentNavigationBar();
          break;
        case "both":
          await this.transparentStatusBar();
          await this.transparentNavigationBar();
          break;
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

  getCountries() {
    return [
      "España",
      "México",
      "Argentina",
      "Chile",
      "Perú",
      "Afganistán",
      "Albania",
      "Alemania",
      "Andorra",
      "Angola",
      "Antigua y Barbuda",
      "Arabia Saudita",
      "Argelia",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaiyán",
      "Bahamas",
      "Bangladés",
      "Barbados",
      "Baréin",
      "Bélgica",
      "Belice",
      "Benín",
      "Bielorrusia",
      "Birmania",
      "Bolivia",
      "Bosnia y Herzegovina",
      "Botsuana",
      "Brasil",
      "Brunéi",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Bután",
      "Cabo Verde",
      "Camboya",
      "Camerún",
      "Canadá",
      "Catar",
      "Chad",
      "China",
      "Chipre",
      "Ciudad del Vaticano",
      "Colombia",
      "Comoras",
      "Corea del Norte",
      "Corea del Sur",
      "Costa de Marfil",
      "Costa Rica",
      "Croacia",
      "Cuba",
      "Dinamarca",
      "Dominica",
      "Ecuador",
      "Egipto",
      "El Salvador",
      "Emiratos Árabes Unidos",
      "Eritrea",
      "Eslovaquia",
      "Eslovenia",
      "Estados Unidos",
      "Estonia",
      "Etiopía",
      "Filipinas",
      "Finlandia",
      "Fiyi",
      "Francia",
      "Gabón",
      "Gambia",
      "Georgia",
      "Ghana",
      "Granada",
      "Grecia",
      "Guatemala",
      "Guyana",
      "Guinea",
      "Guinea ecuatorial",
      "Guinea-Bisáu",
      "Haití",
      "Honduras",
      "Hungría",
      "India",
      "Indonesia",
      "Irak",
      "Irán",
      "Irlanda",
      "Islandia",
      "Islas Marshall",
      "Islas Salomón",
      "Israel",
      "Italia",
      "Jamaica",
      "Japón",
      "Jordania",
      "Kazajistán",
      "Kenia",
      "Kirguistán",
      "Kiribati",
      "Kuwait",
      "Laos",
      "Lesoto",
      "Letonia",
      "Líbano",
      "Liberia",
      "Libia",
      "Liechtenstein",
      "Lituania",
      "Luxemburgo",
      "Madagascar",
      "Malasia",
      "Malaui",
      "Maldivas",
      "Malí",
      "Malta",
      "Marruecos",
      "Mauricio",
      "Mauritania",
      "Micronesia",
      "Moldavia",
      "Mónaco",
      "Mongolia",
      "Montenegro",
      "Mozambique",
      "Namibia",
      "Nauru",
      "Nepal",
      "Nicaragua",
      "Níger",
      "Nigeria",
      "Noruega",
      "Nueva Zelanda",
      "Omán",
      "Países Bajos",
      "Pakistán",
      "Palaos",
      "Panamá",
      "Papúa Nueva Guinea",
      "Paraguay",
      "Polonia",
      "Portugal",
      "Reino Unido",
      "República Centroafricana",
      "República Checa",
      "República de Macedonia",
      "República del Congo",
      "República Democrática del Congo",
      "República Dominicana",
      "República Sudafricana",
      "Ruanda",
      "Rumanía",
      "Rusia",
      "Samoa",
      "San Cristóbal y Nieves",
      "San Marino",
      "San Vicente y las Granadinas",
      "Santa Lucía",
      "Santo Tomé y Príncipe",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leona",
      "Singapur",
      "Siria",
      "Somalia",
      "Sri Lanka",
      "Suazilandia",
      "Sudán",
      "Sudán del Sur",
      "Suecia",
      "Suiza",
      "Surinam",
      "Tailandia",
      "Tanzania",
      "Tayikistán",
      "Timor Oriental",
      "Togo",
      "Tonga",
      "Trinidad y Tobago",
      "Túnez",
      "Turkmenistán",
      "Turquía",
      "Tuvalu",
      "Ucrania",
      "Uganda",
      "Uruguay",
      "Uzbekistán",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Yibuti",
      "Zambia",
      "Zimbabue",
    ];
  }

  getDeviceSymbols() {
    return ["$", "€", "S/.", "¥", "£", ""];
  }

  convertISO8601ToSpanish(period: string): { quantity: number; unit: string } {
    const match = period.match(/P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?/);
    const years = match[1]
      ? `${match[1]} ${Number(match[1]) > 1 ? "años" : "año"} `
      : "";
    const months = match[2]
      ? `${match[2]} ${Number(match[2]) > 1 ? "meses" : "mes"} `
      : "";
    const days = match[3]
      ? `${match[3]} ${Number(match[3]) > 1 ? "días" : "día"} `
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
}

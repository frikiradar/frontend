import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "./services/i18n.service";

@Pipe({
  name: "niceDate",
})
export class NiceDatePipe implements PipeTransform {
  constructor(private i18n: I18nService) {}

  transform(value: string) {
    const date = Number(new Date(value));
    const dif = Math.floor((Date.now() - date) / 1000 / 86400);
    if (dif < 60) {
      return this.convertToNiceDate(value);
    } else {
      const datePipe = new DatePipe(this.i18n.currentLanguage);
      return dif <= 30
        ? datePipe.transform(value, this.i18n.translate("date-format-month"))
        : datePipe.transform(value, this.i18n.translate("date-format-year"));
    }
  }

  private convertToNiceDate(time: string) {
    const date = new Date(time);
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor(diff / 86400);

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 60) {
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
      (daydiff === 1 && this.i18n.translate("yesterday")) ||
      (daydiff < 14 &&
        this.i18n.translate("days-ago", { days: daydiff.toString() })) ||
      (daydiff < 30 &&
        this.i18n.translate("weeks-ago", {
          weeks: Math.ceil(daydiff / 7).toString(),
        })) ||
      (daydiff < 60 && this.i18n.translate("a-month-ago"))
    );
  }
}

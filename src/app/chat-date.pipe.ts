import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "./services/i18n.service";

@Pipe({
    name: "chatDate",
    standalone: false
})
export class ChatDatePipe implements PipeTransform {
  constructor(private i18n: I18nService) {} // Inyecta el servicio de i18n

  transform(value: string) {
    return this.convertToChatDate(value);
  }

  private convertToChatDate(time: string) {
    const date = new Date(time);
    const datePipe = new DatePipe(this.i18n.currentLanguage);
    const today = new Date();
    const diff = (new Date().getTime() - date.getTime()) / 1000;

    const daydiff = Math.floor(
      (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    return (
      (daydiff === 0 &&
        ((diff < 300 && this.i18n.translate("just-now")) ||
          (diff >= 300 &&
            this.i18n.translate("today-at", {
              time: datePipe.transform(time, "HH:mm"),
            })))) ||
      (daydiff === 1 &&
        this.i18n.translate("yesterday-at", {
          time: datePipe.transform(time, "HH:mm"),
        })) ||
      (daydiff < 8 &&
        this.i18n.translate("days-ago-at", {
          days: daydiff.toString(),
          time: datePipe.transform(time, "HH:mm"),
        })) ||
      (daydiff < 30 &&
        datePipe.transform(
          time,
          this.i18n.translate("date-format-month-at", {
            time: datePipe.transform(time, "HH:mm"),
          })
        )) ||
      datePipe.transform(
        time,
        this.i18n.translate("date-format-year-at", {
          time: datePipe.transform(time, "HH:mm"),
        })
      )
    );
  }
}

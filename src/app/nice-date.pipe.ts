import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "niceDate"
})
export class NiceDatePipe implements PipeTransform {
  transform(value: string) {
    const date = Number(new Date(value));
    const dif = Math.floor((Date.now() - date) / 1000 / 86400);
    if (dif < 60) {
      return convertToNiceDate(value);
    } else {
      const datePipe = new DatePipe("es-ES");
      return dif <= 30
        ? datePipe.transform(value, "d 'de' MMMM")
        : datePipe.transform(value, "d MMM 'de' yyyy");
    }
  }
}

function convertToNiceDate(time: string) {
  const date = new Date(time);
  const datePipe = new DatePipe("es-ES");
  const today = +datePipe.transform(new Date(), "d");
  const day = +datePipe.transform(date, "d");
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const daydiff = today - day;

  if (isNaN(daydiff) || daydiff < 0 || daydiff >= 61) {
    return "";
  }

  return (
    (daydiff === 0 &&
      ((diff < 300 && "Ahora mismo") ||
        (diff >= 300 && "Hoy, " + datePipe.transform(time, "HH:mm")))) ||
    (daydiff === 1 && "Ayer, " + datePipe.transform(time, "HH:mm")) ||
    (daydiff < 14 && "Hace " + daydiff + " días") ||
    (daydiff < 30 && "Hace " + Math.ceil(daydiff / 7) + " semanas") ||
    (daydiff < 60 && "Hace 1 mes")
  );
}

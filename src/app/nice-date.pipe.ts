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
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const daydiff = Math.floor(diff / 86400);

  if (isNaN(daydiff) || daydiff < 0 || daydiff >= 60) {
    return "";
  }

  return (
    (daydiff === 0 &&
      ((diff < 300 && "Ahora mismo") ||
        (diff < 3600 && "Hace " + Math.floor(diff / 60) + " minutos") ||
        (diff < 7200 && "Hace 1 hora") ||
        (diff < 86400 && "Hace " + Math.floor(diff / 3600) + " horas"))) ||
    (daydiff === 1 && "Ayer") ||
    (daydiff < 14 && "Hace " + daydiff + " días") ||
    (daydiff < 30 && "Hace " + Math.ceil(daydiff / 7) + " semanas") ||
    (daydiff < 60 && "Hace 1 mes")
  );
}

import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "niceDate"
})
export class NiceDatePipe implements PipeTransform {
  transform(value: string) {
    const date = Number(new Date(value));
    const dif = Math.floor((Date.now() - date) / 1000 / 86400);
    if (dif < 30) {
      return convertToNiceDate(value);
    } else {
      const datePipe = new DatePipe("es-ES");
      value = datePipe.transform(value, "dd-MMM-yyyy");
      return value;
    }
  }
}

// tslint:disable-next-line: cyclomatic-complexity
function convertToNiceDate(time: string) {
  const date = new Date(time);
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const daydiff = Math.floor(diff / 86400);

  if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
    return "";
  }

  return (
    (daydiff === 0 &&
      ((diff < 60 && "Justo ahora") ||
        (diff < 120 && "Hace 1 minuto") ||
        (diff < 3600 && "Hace " + Math.floor(diff / 60) + " minutos") ||
        (diff < 7200 && "Hace 1 hora") ||
        (diff < 86400 && "Hace " + Math.floor(diff / 3600) + " horas"))) ||
    (daydiff === 1 && "Ayer") ||
    (daydiff < 14 && "Hace " + daydiff + " días") ||
    (daydiff < 31 && "Hace " + Math.ceil(daydiff / 7) + " semanas")
  );
}

import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "chatDate"
})
export class ChatDatePipe implements PipeTransform {
  transform(value: string) {
    const date = Number(new Date(value));
    const dif = Math.floor((Date.now() - date) / 1000 / 86400);
    return convertToChatDate(value);
  }
}

function convertToChatDate(time: string) {
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
    (daydiff < 8 &&
      "Hace " + daydiff + " días, " + datePipe.transform(time, "HH:mm")) ||
    (daydiff < 30 &&
      datePipe.transform(
        time,
        "d 'de' MMMM', '" + datePipe.transform(time, "HH:mm")
      )) ||
    datePipe.transform(
      time,
      "d MMM 'de' yyyy', '" + datePipe.transform(time, "HH:mm")
    )
  );
}

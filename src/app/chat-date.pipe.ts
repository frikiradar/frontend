import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "chatDate",
})
export class ChatDatePipe implements PipeTransform {
  transform(value: string) {
    return convertToChatDate(value);
  }
}

function convertToChatDate(time: string) {
  const date = new Date(time);
  const datePipe = new DatePipe("es-ES");
  const today = new Date();
  const diff = (new Date().getTime() - date.getTime()) / 1000;

  const daydiff = Math.floor(
    (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) /
      (1000 * 60 * 60 * 24)
  );

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

import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mentions"
})
export class MentionsPipe implements PipeTransform {
  transform(value: any, data?: any) {
    if (data.mentions.length) {
      console.log(value, data.mentions);
      const mentions = data.mentions;
      mentions.forEach((mention: string) => {
        value = value.replaceAll(
          `@${mention}`,
          `<a href='#' class="mention">@${mention}</a>`
        );
      });
    }
    return value;
  }
}

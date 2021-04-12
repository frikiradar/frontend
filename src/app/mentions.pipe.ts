import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mentions"
})
export class MentionsPipe implements PipeTransform {
  transform(value: any, data?: any) {
    if (data?.mentions?.length) {
      const mentions = data.mentions;
      mentions.forEach((mention: string) => {
        value = value.replaceAll(
          `@${mention}`,
          `<a href='#' class="mention">@${mention}</a>`
        );
      });
    } else {
      value = value.replaceAll(
        /@([a-z\d_]+)/gi,
        `<a href='#' class="mention">@$1</a>`
      );
    }
    return value;
  }
}

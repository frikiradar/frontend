import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mentions",
})
export class MentionsPipe implements PipeTransform {
  transform(value: any, data?: any) {
    if (data?.mentions?.length) {
      const mentions = data.mentions;
      mentions.forEach((mention: string) => {
        value = value?.replace(
          new RegExp(`(?<![a-z0-9_.-])@${mention}(?![a-z0-9_.-])`, "gi"),
          `<a href='#' class="mention">@${mention}</a>`
        );
      });
    } else {
      value = value?.replace(
        /(?<![a-z0-9_.-])@([a-z\d_]+)(?![a-z0-9_.-])/gi,
        `<a href='#' class="mention">@$1</a>`
      );
    }
    return value;
  }
}

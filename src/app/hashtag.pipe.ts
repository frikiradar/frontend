import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hashtag"
})
export class HashtagPipe implements PipeTransform {
  transform(value: any) {
    value = value?.replace(
      /(^|\s)(#[a-z\d-]+)/gi,
      "$1<a href='#' class='hashtag'>$2</a>"
    );
    return value;
  }
}

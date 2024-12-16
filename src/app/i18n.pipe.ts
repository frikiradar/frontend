import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "./services/i18n.service"; // Asegúrate de que la ruta al servicio es correcta

@Pipe({
    name: "i18n",
    pure: false,
    standalone: false
})
export class I18nPipe implements PipeTransform {
  constructor(private i18nService: I18nService) {}

  transform(key: string, variables: { [key: string]: string } = {}): string {
    return this.i18nService.translate(key, variables);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();
    const NOMBRES = value.split(' ');

    if (todas) {
      for (const word in NOMBRES) {
        if (word != null) {
          NOMBRES[word] = NOMBRES[word][0].toUpperCase() + NOMBRES[word].substr(1);
        } else {
          console.error('Error, no existen palabras');
        }
      }
    } else {
      NOMBRES[0] = NOMBRES[0][0].toUpperCase() + NOMBRES[0].substr(1);
    }

    return NOMBRES.join(' ');

  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obtenerLetras'
})
export class ObtenerLetrasPipe implements PipeTransform {

  transform(texto: string): string {
    const espacio = texto.indexOf(' ');
    const parte2 = texto.slice(espacio);
    return parte2.slice(0, 3);
  }

}

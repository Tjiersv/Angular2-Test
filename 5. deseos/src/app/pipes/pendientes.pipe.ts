import { Pipe, PipeTransform } from '@angular/core';
import { Listas } from '../clases/listas';

@Pipe({
  name: 'pendientes'
})
export class PendientesPipe implements PipeTransform {
  transform( listas: Listas[], estado: boolean = true ): Listas[] {
    let nuevaLista: Listas[] = [];
    for (let lista of listas) {
      if( lista.terminado === estado){
        nuevaLista.push( lista );
      }
    }
    return nuevaLista;
  }
}

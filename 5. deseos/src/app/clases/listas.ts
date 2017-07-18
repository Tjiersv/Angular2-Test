import { ListaItem } from './lista-item';

export class Listas {
  nombre: string;
  terminado: boolean;
  items: ListaItem[];

  constructor( nombre: string ){
    this.nombre = nombre;
    this.terminado = false;
  }

}

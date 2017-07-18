import { Injectable } from '@angular/core';
import { Listas } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Listas[] = [];

  constructor() {
    // cargando las listas del localStorage
    this.cargarData();
    console.log("Servicio Inicializado.")
  }

  // actualiza las listas almacenadas en el localStorage
  actualizarData() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  // carga las listas almacenadas en el localStorage
  cargarData() {
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  // agrega una lista al arreglo de listas del localStorage
  agregarLista(lista:Listas) {
    this.listas.push(lista);
    this.actualizarData();
  }

  // elimina una lista al arreglo de listas del localStorage
  eliminarLista( idx:number) {
    this.listas.splice(idx, 1);
    this.actualizarData();
  }

}

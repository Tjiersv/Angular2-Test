// angular
import { Component, OnInit } from '@angular/core';
// ionic
import { Listas, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

// services
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";

  items: ListaItem[] = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private _listaDeseos:ListaDeseosService) {
  }

  ngOnInit() {}

  // funcion agregar item a la lista
  agregar() {
    if(this.nombreItem.length == 0 ) {
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);
  }

  // funcion eliminar item de lista
  eliminar(index:number) {
    this.items.splice(index,1);
  }

  // funcion agregar lista
  guardarLista() {
    if(this.nombreItem.length == 0 ) {
      this.nameListAlert();
      return;
    }
    let lista = new Listas( this.nombreLista );
    lista.items = this.items;
    this._listaDeseos.agregarLista(lista);
    this.navCtrl.pop();
    console.log(lista);
  }

  // funcion alerta de nombre obligatorio
  nameListAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nombre de la lista',
      subTitle: 'El nombre de la lista es obligatorio',
      buttons: ['OK']
    });
    alert.present();
  }



}

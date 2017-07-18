import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, AlertController} from 'ionic-angular';
import { Listas, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Listas;

  constructor( private navCtrl: NavController,
               private navParams: NavParams,
               private _listaDeseosService:ListaDeseosService,
               public alertCtrl: AlertController ) {
    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');
    console.log(this.lista);
  }

  ngOnInit() {}

  actualizar( item:ListaItem ) {
    item.completado = !item.completado;
    this._listaDeseosService.actualizarData();
    let todosMarcados = true;
    for (let item of this.lista.items) {
        if( !item.completado ) {
          todosMarcados = false;
          break;
        }
    }

    this.lista.terminado = todosMarcados;
  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'seguro que quiere borrar la lista definitivamente?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.idx);
            this.navCtrl.pop();
            console.log('Si clickeado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('No clickeado');
          }
        }
      ]
    });
    confirm.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendiente',
  templateUrl: 'pendiente.component.html',
})
export class PendienteComponent implements OnInit {
  constructor( private _listaDeseos : ListaDeseosService,
               private navCtrl : NavController ) { }

  ngOnInit() {}

// navega a la pagina Agregar
  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }
// navega a la pagina detalle
  verDetalle(lista, index) {
    this.navCtrl.push(DetalleComponent, { lista , index });
  }
}

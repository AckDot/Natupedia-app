import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html'
})
export class InformacionPage {
planta; 
usos;
  constructor(public navCtrl: NavController , public params :NavParams) {
    this.planta = params.data.item;
    this.planta = this.prepararDatos(this.planta);
    this.usos = this.planta.usos;
  }
 
  prepararDatos(planta) {
    this.planta.contraindicaciones = this.planta.contraindicaciones.split("\n").join("<br />");
    this.planta.descripcion = this.planta.descripcion.split("\n").join("<br />"); 
    this.planta.preparacion = this.planta.preparacion.split("\n").join("<br />"); 
    return this.planta;
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {plants} from '../Plantas/data';

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html'
})
export class InformacionPage {
planta;
  constructor(public navCtrl: NavController , public params :NavParams) {
    this.planta = params.data.item;
  }
 rellenar(){
  var name = this.planta.name[0];
  var informacion = name ;
  informacion += " \n\n Descripcion : \n"+this.planta.descripcion;
  informacion += "\n\n Productos :\n"+this.planta.productos;
  informacion += "\n\n Contraindicaciones : \n"+ this.planta.contraindicaciones;
  return informacion;
 }
}

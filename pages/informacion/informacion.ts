import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
  styleUrls: ['informacion.css']
})
export class InformacionPage {
planta; 
usos;
  constructor(public navCtrl: NavController , public params :NavParams) {
    this.planta = params.data.item;
    this.usos = this.planta.usos;
  }

}

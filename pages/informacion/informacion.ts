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

}

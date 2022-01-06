import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-consultaDiagnostico',
  templateUrl: 'consultaDiagnostico.html',
  styleUrls: ['consultaDiagnostico.css']
})
export class consultaDiagnosticoPage {
plantas; 
  constructor(public navCtrl: NavController , public params :NavParams) {
    this.plantas = params.data.item;
  }
  obtenerPlanta(planta) {
    // Reset items back to all of the items
    // set val to the value of the ev target
    this.navCtrl.push(InformacionPage, { item: planta });
  }
}

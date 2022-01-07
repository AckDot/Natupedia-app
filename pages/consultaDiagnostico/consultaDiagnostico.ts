import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { data } from '../Plantas/data';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-consultaDiagnostico',
  templateUrl: 'consultaDiagnostico.html',
})
export class consultaDiagnosticoPage {
  plants;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.plants = params.data.item;
  }

  obtenerPlanta(planta) {
    let plant = data.filter( dat => dat.name[0]== planta);
    console.log(plant);
    this.navCtrl.push(InformacionPage, { item: plant });
  }
}

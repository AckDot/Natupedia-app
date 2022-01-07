import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { plants } from '../Plantas/data';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-consultaDiagnostico',
  templateUrl: 'consultaDiagnostico.html',
})
export class consultaDiagnosticoPage {
  plantitas;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.plantitas = params.data.item;
  }

  obtenerPlanta(planta) {
    let plant = plants.filter( plant => plant.name == planta);
    console.log(plant);
    this.navCtrl.push(InformacionPage, { item: plant });
  }
}

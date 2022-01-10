import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import { plants } from '../Plantas/data';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-consultaDiagnostico',
  templateUrl: 'consultaDiagnostico.html',
  styleUrls: ['consulta.css'],
})
export class consultaDiagnosticoPage {
  plantitas;
  constructor(public navCtrl: NavController, public params: NavParams, public alertController: AlertController) {
    this.plantitas = params.data.item;
  }

  obtenerPlanta(plantita) {
    let p = plants.filter( plant =>  plantita.toLowerCase() == plant.name[0].toLowerCase() );
    console.log(p);
    this.navCtrl.push(InformacionPage, { item: p });
  }
   mensaje() {
    const alert =  this.alertController.create({
      title: 'Consultelo en la seccion Plantas',
      buttons: ['OK']
    });

     alert.present();
  }
}

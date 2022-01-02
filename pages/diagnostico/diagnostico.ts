import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {busquedaDiagnosticopage} from '../busquedaDiagnostico/busquedaDiagnostico';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html'
})
export class DiagnosticoPage {
  constructor(public navCtrl: NavController) {
    
  }
  getLista() {
    return document.querySelector('ion-list');
  }
  getLabel(){
    return document.querySelector('ion-label');
  }
buscarenLista(){
  var lista = this.getLista().addEventListener('ion-label');
  console.log(lista);
}
  obtenerSeleccionCB(list) {
    // Reset items back to all of the items
    // set val to the value of the ev target
     this.navCtrl.push(busquedaDiagnosticopage, { item: list });
}

}

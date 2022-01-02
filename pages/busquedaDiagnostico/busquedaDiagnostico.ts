import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-busquedaDiagnostico',
  templateUrl: 'busquedaDiagnostico.html'
})
export class busquedaDiagnosticopage {
  constructor(public navCtrl: NavController) {
    
  }
 
  getContent() {
    return document.querySelector('ion-content');
  }

 
}
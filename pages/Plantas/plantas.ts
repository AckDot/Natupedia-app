import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {plants} from './data';
@Component({
  selector: 'page-plantas',
  templateUrl: 'plantas.html'
})
export class PlantasPage{

  plantas: any[] = [];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  initializeItems(){
    this.plantas = plants;
  }
  
  getNames(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.plantas = plants.filter((item) => {
        return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

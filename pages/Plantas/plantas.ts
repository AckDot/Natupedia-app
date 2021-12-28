import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {plants} from './data';
@Component({
  selector: 'page-plantas',
  templateUrl: 'plantas.html',
  styleUrls: ['stilos.css']
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
 console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.plantas = plants.filter((item) => {
        return (item.name[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  obtenerPlanta(planta) {
    // Reset items back to all of the items
    // set val to the value of the ev target
    var name =planta.name[0];
     var informacion = name ;
     informacion += "\n Imagen"+planta.imagen;
     informacion += " \n\n Descripcion : \n"+planta.descripcion;
     informacion += "\n\n Productos :\n"+planta.productos;
     informacion += "\n\n Contraindicaciones : \n"+ planta.contraindicaciones;
     console.log(informacion);   
     return (informacion);  
}
MostrarInfoPlanta(){

  return informacion;
}

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { plants } from '../Plantas/data';
import { consultaDiagnosticoPage } from '../consultaDiagnostico/consultaDiagnostico';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
  styleUrls: ['diagnostico.css']
})
export class DiagnosticoPage {
  SintomasSeleccionados: any[] = [];
  sintomas: any[] = [];

  constructor(public navCtrl: NavController) {
    this.FiltrarData();
  }

  initializeItems() {
    this.SintomasSeleccionados = this.obtenerSintomas();
  }

  obtenerSintomas() {
    let contenedor = [];
    for (let i = 0; i < this.sintomas.length; i++) {
      if (this.sintomas[i].checked === true) {
        contenedor.push(this.sintomas[i].name);
      }
    }
    console.log(contenedor);
    return contenedor;
  }

  FiltrarData() {
    let res: any[] = [];
    for (let index = 0; index < plants.length; index++) {
      //hara la iteracion de cada planta de la data global
      console.log(' planta : ' + plants[index].name);
      for (let j = 0; j < plants[index].usos.length; j++) {
        //iteracion de los usos de una planta
        console.log('estamos iterando el uso:' + plants[index].usos[j]);
        res.push(plants[index].usos[j]);
      }
    }
    console.log(
      'todos los usos de los sintomas cargados son:' +
        res +
        'el tamaño es : ' +
        res.length
    );
    let resFiltrado = res.filter(function (val, ind, vec) {
      return vec.indexOf(val) == ind;
    });
    console.log('Filtrado : ' + resFiltrado + 'tamaño :' + resFiltrado.length);

    for (let h = 0; h < resFiltrado.length; h++) {
      this.sintomas.push({ name: resFiltrado[h], checked: false });
    }
    console.log(this.sintomas);
  }

  getPlantas() {
    let plantasSeleccionadas: any[] = [];
    this.initializeItems();
    for (let i = 0; i < this.SintomasSeleccionados.length; i++) {
      //iterar cada sintoma , luego

      console.log(
        'estamos verificando el sintoma:' + this.SintomasSeleccionados[i]
      );

      for (let index = 0; index < plants.length; index++) {
        //hara la iteracion de cada planta de la data global
        console.log(' planta : ' + plants[index].name);
        for (let j = 0; j < plants[index].usos.length; j++) {
          //iteracion de los usos de una planta
          console.log('estamos iterando el uso:' + plants[index].usos[j]);
          if (plants[index].usos[j] == this.SintomasSeleccionados[i]) {
            console.log(
              'se agregara esta planta al array : ' + plants[index].name[0]
            );
            plantasSeleccionadas.push(plants[index].name[0]);
          }
        }
      }
    }

    console.log('antes de filtrar : ' + plantasSeleccionadas);
    let nuevoVector = plantasSeleccionadas.filter(function (val, ind, vec) {
      return vec.indexOf(val) == ind;
    });
    console.log('Filtrado : ' + nuevoVector);
    return nuevoVector;
  }


  MandarDatos() {
    let resultados = this.getPlantas();
    this.navCtrl.push(consultaDiagnosticoPage, {
      item: resultados,
    });
  }
}

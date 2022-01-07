import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { plants } from '../Plantas/data';
import { consultaDiagnosticoPage } from '../consultaDiagnostico/consultaDiagnostico';
import { dataPlant } from '../Plantas/data';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage {
  SintomasSeleccionados: any[] = [];
  sintomas = [
    { name: 'Gripe', checked: false },
    { name: 'Diarrea', checked: false },
    { name: 'Vomito', checked: false },
    { name: 'Colicos', checked: false },
    { name: 'Tos', checked: false },
    { name: 'Resfrio', checked: false },
    { name: 'Diabetes', checked: false },
    { name: 'Acne', checked: false },
    { name: 'Fiebre', checked: false },
    { name: 'Infecciones', checked: false },
    { name: 'Inflamaciones', checked: false },
    { name: 'Problemas en la piel', checked: false },
    { name: 'Heridas', checked: false },
    { name: 'Colesterol', checked: false },
    { name: 'Estornudos', checked: false },
    { name: 'Cicatrices', checked: false },
    { name: 'Problemas respiratorios', checked: false },
    { name: 'Asma', checked: false },
    { name: 'Nauseas', checked: false },
    { name: 'Gases', checked: false },
    { name: 'Perdida de apetito', checked: false },
    { name: 'Ansiedad', checked: false },
    { name: 'Problema en los riñones', checked: false },
    { name: 'Insomnio', checked: false },
    { name: 'Problemas en las articulaciones', checked: false },
    { name: 'Coagulos', checked: false },
    { name: 'Indigestion', checked: false },
    { name: 'Nervios', checked: false },
    { name: 'Gastritis', checked: false },
    { name: 'Escalosfrios', checked: false },
    { name: 'Migrañas', checked: false },
  ];

  constructor(public navCtrl: NavController) {}

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

    return plantasSeleccionadas;
  }

  FiltrarResultados() {
    let plantaRepetidas = this.getPlantas();
    let nuevoVector = plantaRepetidas.filter(function (val, ind, vec) {
      return vec.indexOf(val) == ind;
    });
    console.log('Filtrado : ' + nuevoVector);
    return nuevoVector;
  }

  MandarDatos() {
    let resultados = this.FiltrarResultados();
    this.navCtrl.push(consultaDiagnosticoPage, {
      item: resultados,
    });
  }
}

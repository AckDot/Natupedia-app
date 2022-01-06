import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { plants } from '../Plantas/data';
import { consultaDiagnosticoPage } from '../consultaDiagnostico/consultaDiagnostico';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage {
  plantasS ;
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


  constructor(private navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.SintomasSeleccionados = this.obtenerSintomas();
  }

  obtenerSintomas() {
    let contenedor = [];
    for (let i = 0; i < this.sintomas.length; i++) {
      if (this.sintomas[i].checked == true) {
        contenedor.push(this.sintomas[i].name);
      }
    }
    return contenedor;
  }

  getPlantas() {
    let plantasSeleccionadas = [];
    this.initializeItems();
    for (let index = 0; index < plants.length; index++) {
      for (let j = 0; j < plants[index].usos.length; j++) {
        let datoplants = plants[index].usos[j];
        let datoSintSeleccionados = this.SintomasSeleccionados[j];
        if ((datoplants = datoSintSeleccionados)) {
          plantasSeleccionadas.push(plants[index].name[0]);
        }
      }
    }
    plantasSeleccionadas = this.FiltrarResultados();
    console.log(plantasSeleccionadas);
    return plantasSeleccionadas;
  }

  FiltrarResultados() {
    let obtenerPlantas = this.getPlantas();
    let resultado = obtenerPlantas.reduce((a, e) => {
      if (!a.find((d) => d == e)) {
        a.push(e);
      }

      return a;
    }, []);
    console.log(resultado);
    return resultado;
  }

  MandarDatos() {
    this.plantasS = this.getPlantas()
    this.navCtrl.push(consultaDiagnosticoPage , { item:  this.plantasS});
  }
}

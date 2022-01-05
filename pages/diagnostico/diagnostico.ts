import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import {plants} from '../Plantas/data';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html'
})
export class DiagnosticoPage {
  sintomas = [ 
    { name: 'Gripe', checked: true },
    {name: 'Diarrea', checked: false },
    {name: 'Vomito', checked: false },
  {name: 'Colicos', checked: false },
  {name: 'Tos', checked: false },
  {name: 'Resfrio', checked: false },
  {name: 'Diabetes', checked: false },
  {name: 'Acne', checked: false },
  {name: 'Fiebre', checked: false },
  {name: 'Infecciones', checked: false },
  {name: 'Inflamaciones', checked: false },
  {name: 'Problemas en la piel', checked: false },
  {name: 'Heridas', checked: false },
  {name: 'Colesterol', checked: false },
  {name: 'Estornudos', checked: false },
  {name: 'Cicatrices', checked: false },
  {name: 'Problemas respiratorios', checked: false },
  {name: 'Asma', checked: false },
  {name: 'Nauseas', checked: false },
  {name: 'Gases', checked: false },
  {name: 'Perdida de apetito', checked: false },
  {name: 'Ansiedad', checked: false },
  {name: 'Problema en los riñones', checked: false },
  {name: 'Insomnio', checked: false },
  {name: 'Problemas en las articulaciones', checked: false },
  {name: 'Coagulos', checked: false },
  {name: 'Indigestion', checked: false },
  {name: 'Nervios', checked: false },
  {name: 'Gastritis', checked: false },
  {name: 'Escalosfrios', checked: false },
  {name: 'Migrañas', checked: false }];
  
  plantasSintomas : any[]=[];
  constructor(public navCtrl: NavController, public alertController:AlertController) {
    this.plantasSintomas;
  }

 obtenerSintomas(){
   console.log(this.sintomas);
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

  async presentAlertCheckbox() {
    const alert =  this.alertController.create({
      title: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}

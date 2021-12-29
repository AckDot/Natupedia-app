import { Component } from '@angular/core';

import { PlantasPage } from '../Plantas/plantas';
import { HomePage } from '../home/home';
import { DiagnosticoPage } from '../diagnostico/diagnostico';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlantasPage;
  tab4Root = DiagnosticoPage;
  constructor() {

  }
}
